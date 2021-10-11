import { useState } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';

import UserName from '../../components/FormParts/UserName';
import Email from '../../components/FormParts/Email';
import Password from '../../components/FormParts/Password';
import Dialog from '../../components/block/Dialog';
import Snackbar from '../../components/block/Snackbar';
import Table from './UserTable';

import { useAuthContext } from '../../context/AuthContext';
import { useRedirect } from '../../hooks/useRedirect';


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0].toUpperCase()}`,
    };
}

const initialState = {
    name: "",
    email: "",
    prevPassword: "",
    newPassword: ""
}

const Account = () => {
    const { user } = useAuthContext();
    const { toHomePage } = useRedirect();

    const [values, setValues] = useState(initialState);
    const [target, setTarget] = useState(null);
    const [error, setError] = useState(null);

    const displayValue = {
        name: "ユーザー名",
        email: "メールアドレス",
        password: "パスワード"
    }

    const [openDialog, setOpenDialog] = useState(false);
    const closeDialog = () => setOpenDialog(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClick = (prop) => (_) => {
        if (prop === "name") {
            setValues({ ...initialState, name: user.name })
        } else if (prop === "email") {
            setValues({ ...initialState, email: user.email })
        } else {
            setValues(initialState)
        }
        setError(null);
        setOpenDialog(true);
        setTarget(prop);
    }

    const logout = () => {
        document.cookie = "token=;";
        window.location.reload();
    }

    const update = async (e) => {
        e.preventDefault();

        let err = false;

        const { data } = await axios.put(`${API_URI}/api/v1/user`, { values, action: target })

        if (data.status === 400) {

            setError(data.message)
            err = true;
        } else {
            if (target !== "password") user[target] = values[target]
        }

        if (!err) {
            setOpenDialog(false);
            setOpenSnackbar(true);
        }
    }

    const title = `${displayValue[target]}の変更`;

    const content = (
        <Box sx={{ mt: 3 }} component={"form"}>
            <Grid container spacing={3}>
                {target === "name" && <Grid item xs={12}><UserName values={values} setValues={setValues} /></Grid>}
                {target === "email" && (
                    <>
                        <Grid item xs={12}>
                            <Email values={values} setValues={setValues} />
                        </Grid>
                        <Grid item xs={12}>
                            <Password
                                values={values}
                                setValues={setValues}
                                id="prevPassword"
                                label="本人確認用パスワード" />
                        </Grid>
                    </>
                )}
                {target === "password" && (
                    <>
                        <Grid item xs={12}>
                            <Password
                                values={values}
                                setValues={setValues}
                                id="prevPassword"
                                label="本人確認用パスワード" />
                        </Grid>
                        <Grid item xs={12}>
                            <Password
                                values={values}
                                setValues={setValues}
                                validation
                                id="newPassword"
                                label="新しいパスワード" />
                        </Grid>
                    </>
                )}
            </Grid>
            <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
        </Box>
    )

    const action = <Button onClick={update}>変更する</Button>

    return (
        <>
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={toHomePage}
                sx={{ position: "fixed", top: "70px", left: "20px" }}
            >
                ホームページへ
            </Button>
            <Button
                startIcon={<LogoutIcon />}
                onClick={logout}
                sx={{ position: "fixed", top: "70px", right: "20px" }}
            >
                ログアウト
            </Button>
            <Box
                sx={{
                    my: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    {...stringAvatar(user.name)}
                    sx={{ width: '48px', height: '48px', fontSize: '20px', m: 2 }} />
                <Typography variant="h6">ようこそ {user.name} !</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Table user={user} handleClick={handleClick} />
            </Box>
            <Dialog isOpen={openDialog} close={closeDialog} title={title} content={content} action={action} />
            <Snackbar isOpen={openSnackbar} setIsOpen={setOpenSnackbar} message={`${displayValue[target]}を変更しました`} />
        </>
    )
}

export default Account;
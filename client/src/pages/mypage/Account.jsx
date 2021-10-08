import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import UserName from '../../components/FormParts/UserName';
import Email from '../../components/FormParts/Email';
import Password from '../../components/FormParts/Password';
import Dialog from '../../components/block/Dialog';
import Snackbar from '../../components/block/Snackbar';
import Table from './UserTable';

import { useAuthContext } from '../../context/AuthContext';
import { useRedirect } from '../../hooks/useRedirect';


const Account = () => {
    const { user } = useAuthContext();
    const { toHomePage } = useRedirect();

    const [values, setValues] = useState({});
    const [target, setTarget] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) return;
        setValues({
            name: user.name,
            email: user.email,
            password: user.password
        })
    }, [user])

    const [openDialog, setOpenDialog] = useState(false);
    const closeDialog = () => setOpenDialog(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClick = (prop) => (e) => {
        if (prop === 'name') {
            setOpenSnackbar(true);
        } else {
            setOpenDialog(true);
        }
        setTarget(prop);
    }

    const update = async (e) => {
        e.preventDefault();

        setError(null);

        await axios.post(`${API_URI}/api/v1/user`, values)
            .then(res => res)
            .catch(err => setError(err.message))

        if (error) return setError("変更に失敗しました")

        if (!error) {
            setOpenDialog(false);
            setOpenSnackbar(true);
        }
    }

    const title = `${target}の変更`;

    const content = (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}><UserName values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Email values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Password values={values} setValues={setValues} /></Grid>
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
            <Box
                sx={{
                    my: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: '56px', height: '56px' }}>
                    <AccountCircleIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6">ようこそ {user.name} !</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Table user={user} handleClick={handleClick} />
            </Box>
            <Dialog isOpen={openDialog} close={closeDialog} title={title} content={content} action={action} />
            <Snackbar isOpen={openSnackbar} setIsOpen={setOpenSnackbar} message={`${target}を変更しました`} />
        </>
    )
}

export default Account;
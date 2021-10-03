import { useHistory } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Table from '../components/Table';

import { useAuthContext } from '../context/AuthContext';

const Account = () => {
    const { user } = useAuthContext();
    const history = useHistory();

    const handleClick = () => {
        history.push("/")
    }
    return (
        <>
            <Button
                onClick={handleClick}
                startIcon={<ArrowBackIcon />}
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
            <Table />
        </>
    )
}

export default Account;
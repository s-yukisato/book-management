import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Table from '../components/Table';

import { useAuthContext } from '../context/AuthContext';

const Account = () => {
    const { user } = useAuthContext();
    console.log(user)
    return (
        <>
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
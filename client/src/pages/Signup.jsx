import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import UserName from '../components/FormParts/UserName';
import Email from '../components/FormParts/Email';
import Password from '../components/FormParts/Password';
import Copyright from '../components/Copyright';

import { useLogin } from '../hooks/useLogin'

const theme = createTheme();

const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, login] = useLogin(values);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#CF5C78' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        サインアップ
                    </Typography>
                    <Box component="form" onSubmit={login} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <UserName values={values} setValues={setValues} />
                            </Grid>
                            <Grid item xs={12}>
                                <Email values={values} setValues={setValues} />
                            </Grid>
                            <Grid item xs={12}>
                                <Password values={values} setValues={setValues} />
                            </Grid>
                        </Grid>
                        <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                        >
                            サインアップ
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <RouterLink to="/signin">
                                    アカウントがありますか？ サインインへ
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;
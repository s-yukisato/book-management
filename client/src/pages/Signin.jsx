import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Email from '../components/FormParts/Email';
import Password from '../components/FormParts/Password';
import Copyright from '../components/block/Copyright';

import { useLogin } from '../hooks/useLogin';

const theme = createTheme();

export default function SignIn() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [error, login] = useLogin(values)

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
                        サインイン
                    </Typography>
                    <Box component="form" onSubmit={login} sx={{ mt: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Email values={values} setValues={setValues} />
                            </Grid>
                            <Grid item xs={12}>
                                <Password values={values} setValues={setValues} validation id="password" label="パスワード" />
                            </Grid>
                        </Grid>
                        <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                        >
                            サインイン
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <RouterLink to="/signup">
                                    {"アカウントがありませんか？ サインアップへ"}
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
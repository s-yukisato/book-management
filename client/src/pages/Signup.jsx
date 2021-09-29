import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UserName from '../components/UserName';
import Email from '../components/Email';
import Password from '../components/Password';
import Copyright from '../components/Copyright';

import { usePost } from '../hooks/usePost'

const theme = createTheme();

const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const url = 'http://localhost:3001/api/v1/user/signup'
    const to = '/dashboard'
    const [error, handleSubmit] = usePost(url, values, to)

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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        サインアップ
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            サインアップ
                        </Button>
                        <Typography variant="body2" color="error" sx={{ textAlign: 'center', m: 1 }}>{error}</Typography>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <RouterLink to="/signin">
                                    すでにアカウントがありますか？ サインインへ
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
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Password from '../components/Password';
import Email from '../components/Email';
import Copyright from '../components/Copyright';

import { usePost } from '../hooks/usePost';

const theme = createTheme();

export default function SignIn() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const url = 'http://localhost:3001/api/v1/user/signin'
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
                        サインイン
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Email values={values} setValues={setValues} />
                            </Grid>
                            <Grid item xs={12}>
                                <Password values={values} setValues={setValues} />
                            </Grid>
                        </Grid>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            sx={{ mt: 2 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            サインイン
                        </Button>
                        <FormHelperText error={error}>{error}</FormHelperText>
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
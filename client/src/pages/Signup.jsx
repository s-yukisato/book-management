<<<<<<< Updated upstream
import * as React from 'react';
=======
import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import axios from 'axios';
>>>>>>> Stashed changes

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
<<<<<<< Updated upstream
import Link from '@mui/material/Link';
=======
>>>>>>> Stashed changes
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Email from '../components/Email';
import Password from '../components/Password';
<<<<<<< Updated upstream


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/s-yukisato/book-management">
                github page
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
=======
import Copyright from '../components/Copyright';
>>>>>>> Stashed changes

const theme = createTheme();

const SignUp = () => {
<<<<<<< Updated upstream
    const [values, setValues] = React.useState({
=======
    const [values, setValues] = useState({
>>>>>>> Stashed changes
        firstName: '',
        lastName: '',
        email: '',
        password: '',
<<<<<<< Updated upstream
        showPassword: false,
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        if (values) {
            // axios.post('https://localhost:3000/')
        }
=======
    })
    const handleSubmit = async () => {
        await axios.post('http://localhost:3001/api/v1/user', values)
            .then(response => response)
>>>>>>> Stashed changes
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
<<<<<<< Updated upstream
=======
        console.log(values)
>>>>>>> Stashed changes
    };

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
                        Sign up
                    </Typography>
<<<<<<< Updated upstream
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
=======
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
>>>>>>> Stashed changes
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
<<<<<<< Updated upstream
=======
                                    onChange={handleChange("firstName")}
>>>>>>> Stashed changes
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
<<<<<<< Updated upstream
=======
                                    onChange={handleChange("lastName")}
>>>>>>> Stashed changes
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Email values={values} setValues={setValues} />
                            </Grid>
                            <Grid item xs={12}>
<<<<<<< Updated upstream
                                <Password values={values} setValues={setValues} handleChange={handleChange} />
=======
                                <Password values={values} setValues={setValues} />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                            variant="contained"
=======
                            onClick={handleSubmit}
                            variant="contained"
                            disabled={values}
>>>>>>> Stashed changes
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
<<<<<<< Updated upstream
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
=======
                                <RouterLink to="/login">
                                    Already have an account? Sign in
                                </RouterLink>
>>>>>>> Stashed changes
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
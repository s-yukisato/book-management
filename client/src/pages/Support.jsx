import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Email from '../components/Email';

import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';

import AppBar from '../components/AppBar2';
import Footer from '../components/Footer';
import Navi from '../components/Navi';

import { ReactComponent as QuestionLogo } from '../assets/undraw_Questions_re_1fy7.svg'

const Support = () => {
    const [values, setValues] = useState({
        userName: '',
        email: '',
        contents: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3001/api/v1/contact'
        await axios.post(url, values)
            .then(response => console.log(response))
            .catch(err => console.error(err))
        history.push("/thanks")
    };

    return (
        <>
            <AppBar />
            <Grid container>
                <Grid
                    container
                    width="250px"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        borderRight: '2px solid #f5f0ec',
                        bgcolor: "#FCFAF9"
                    }}
                >
                    <Navi />
                </Grid>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    p={2}
                    sm
                >
                    <Grid item sx={{ textAlign: 'center', m: 3 }}>
                        <Typography variant="h4" color="inherit">
                            お困りですか?
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        justifyContent="space-evenly"
                        alignItems="center"
                        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                    >
                        <Grid item>
                            <QuestionLogo width="90%" height="90%" />
                        </Grid>
                        <Grid item sx={{ minWidth: "360px", mb: 2 }}>
                            <Box component="form" onSubmit={handleSubmit}>
                                <Box sx={{ mx: 1, my: 3 }}>
                                    <TextField
                                        name="userName"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="ユーザー名"
                                        onClick={handleChange('userName')}
                                        autoFocus
                                    />
                                </Box>
                                <Box sx={{ mx: 1, my: 3 }}>
                                    <Email values={values} setValues={setValues} />
                                </Box>
                                <Box sx={{ mx: 1, my: 3 }}>
                                    <TextareaAutosize
                                        minRows={5}
                                        style={{ width: '100%', borderRadius: 18, outline: 'none', fontSize: '1rem', padding: '1em' }}
                                        onClick={handleChange('contents')}
                                    />
                                </Box>
                                <Box sx={{ m: 2, textAlign: 'center' }}>
                                    <Fab type="submit" variant="extended" color="primary">
                                        <SendIcon />
                                        送信する
                                    </Fab>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Footer />
            </Box>
        </>
    )
}

export default Support;
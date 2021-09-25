import { useState } from 'react'

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Email from '../components/Email';

import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';

import Navi from '../components/Navi';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

import { ReactComponent as QuestionLogo } from '../assets/undraw_Questions_re_1fy7.svg'

const Support = () => {
    const [values, setValues] = useState({
        userName: '',
        email: '',
        contents: '',
    })
    // const handleSubmit = async () => {
    //     await axios.post('http://localhost:3001/api/v1/user', values)
    //         .then(response => response)
    // };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (values) {
    //         // axios.post('https://localhost:3000/')
    //     }
    // };

    return (
        <>
            <AppBar />
            <Grid container>
                <Grid container sm={2}>
                    <Navi />
                </Grid>
                <Grid container sm={10}>
                    <Grid item sm={12} sx={{ textAlign: 'center', m: 3 }}>
                        <Typography variant="h3" color="inherit">
                            お困りですか?
                        </Typography>
                    </Grid>
                    <Grid item sm sx={{ borderRadius: 16, p: 2, bgcolor: 'background.paper' }}>
                        <QuestionLogo width="90%" height="90%" />
                    </Grid>
                    <Grid item sm sx={{ borderRadius: 16, p: 2, bgcolor: 'background.paper' }}>
                        <Box>
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
                                <Fab variant="extended" color="primary">
                                    <SendIcon />
                                    送信する
                                </Fab>
                            </Box>
                        </Box>
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
import { useState } from 'react';
import axios from 'axios';
import {API_URI} from '../../config';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Email from '../../components/FormParts/Email';
import UserName from '../../components/FormParts/UserName';
import Contents from '../../components/FormParts/Contents';

import SendIcon from '@mui/icons-material/Send';

import { ReactComponent as QuestionLogo } from '../../assets/undraw_Questions_re_1fy7.svg';

import { useRedirect } from '../../hooks/useRedirect';


const Content = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        contents: '',
    });

    const { toThanksPage } = useRedirect();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${API_URI}/api/v1/message`
        await axios.post(url, values)
            .then(response => console.log(response))
            .catch(err => console.error(err))
            .finally(() => toThanksPage());
    };
    return (
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
                            <UserName values={values} setValues={setValues} />
                        </Box>
                        <Box sx={{ mx: 1, my: 3 }}>
                            <Email values={values} setValues={setValues} />
                        </Box>
                        <Box sx={{ mx: 1, my: 3 }}>
                            <Contents values={values} setValues={setValues} />
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
    )
}

export default Content;
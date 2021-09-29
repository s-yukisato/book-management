import { useHistory } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { ReactComponent as ThanksLogo } from '../assets/undraw_Super_thank_you_re_f8bo.svg'

const Thanks = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/")
    }
    return (
        <>
            <Grid container direction="column" spacing={2} sx={{ my: 3, width: "90vw" }}>
                <Grid item sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Box>
                        <ThanksLogo width="80%" height="80%" />
                    </Box>
                    <Box sx={{ mx: 1, my: 3 }}>
                        <Typography variant="h4">ありがとうございました。</Typography>
                        <Button onClick={handleClick}>ホームへ戻る</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Thanks;
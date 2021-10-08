import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ReactComponent as ThanksLogo } from '../assets/undraw_Super_thank_you_re_f8bo.svg';

import { useRedirect } from '../hooks/useRedirect';

const Thanks = () => {
    const { toHomePage } = useRedirect();
    
    return (
        <>
            <Grid container direction="column" spacing={2} sx={{ my: 3, width: "90vw" }}>
                <Grid item sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Box>
                        <ThanksLogo width="80%" height="80%" />
                    </Box>
                    <Box sx={{ mx: 1, my: 3 }}>
                        <Typography variant="h4">ありがとうございました。</Typography>
                        <Button onClick={toHomePage}>ホームへ戻る</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Thanks;
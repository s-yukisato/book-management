import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ReactComponent as ThanksLogo } from '../assets/undraw_Super_thank_you_re_f8bo.svg';

import { useRedirect } from '../hooks/useRedirect';

const Thanks = () => {
    const { toHomePage } = useRedirect();

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                spacing={2}
                minHeight="100vh"
            >
                <Grid item>
                    <ThanksLogo width="80%" height="80%" />
                </Grid>
                <Grid item sx={{ mx: 1, my: 3 }}>
                    <Typography variant="h4">ありがとうございました。</Typography>
                    <Button onClick={toHomePage}>ホームへ戻る</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Thanks;
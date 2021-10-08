import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ReactComponent as NotFoundLogo } from '../assets/undraw_page_not_found_su7k.svg';

import { useRedirect } from '../hooks/useRedirect';


const Error = () => {
    const { toHomePage } = useRedirect();

    return (
        <>
            <Button
                onClick={toHomePage}
                startIcon={<ArrowBackIcon />}
                sx={{ position: "fixed", top: "30px", left: "20px" }}
            >ホームページへ</Button>
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
                    <NotFoundLogo width="80%" height="80%" />
                </Grid>
                <Grid item sx={{ mx: 1, my: 3 }}>
                    <Typography variant="inherit" my={3}>ページが見つかりません</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Error;
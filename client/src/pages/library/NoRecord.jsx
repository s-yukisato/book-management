import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ReactComponent as BookLoverLogo } from '../../assets/undraw_book_lover_mkck.svg';

import { useRedirect } from '../../hooks/useRedirect';

const NoRecord = () => {
    const { toHomePage } = useRedirect();

    return (
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
                <BookLoverLogo width="240px" height="120px" />
            </Grid>
            <Grid item sx={{ mx: 1, my: 3 }}>
                <Typography variant="h6">本棚に登録しましょう。</Typography>
                <Button onClick={toHomePage}>探しに行く</Button>
            </Grid>
        </Grid>
    )
}

export default NoRecord;
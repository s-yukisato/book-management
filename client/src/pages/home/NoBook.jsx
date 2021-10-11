import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ReactComponent as VoidLogo } from '../../assets/undraw_void_3ggu.svg';


const NoBook = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={2}
            minHeight="100vh"
            sx={{ display: { xs: 'block', sm: 'flex' } }}
        >
            <Grid item>
                <VoidLogo width="240px" height="120px" />
            </Grid>
            <Grid item sx={{ mx: 1, my: 3 }}>
                <Typography variant="h6" m={3}>お探しの書籍は見つかりませんでした</Typography>
            </Grid>
        </Grid>
    )
}

export default NoBook;
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ReactComponent as VoidLogo } from '../../assets/undraw_void_3ggu.svg';

const NoBook = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{ display: { xs: 'block', sm: 'flex' } }}
        >
            <VoidLogo width="240px" height="120px" />
            <Typography variant="h6" m={3}>お探しの書籍は見つかりませんでした</Typography>
        </Grid>
    )
}

export default NoBook;
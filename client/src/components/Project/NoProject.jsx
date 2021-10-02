import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ReactComponent as EmptyLogo } from '../../assets/undraw_empty_street_sfxm.svg';

const NoProject = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{ display: { xs: 'block', sm: 'flex' } }}
        >
            <EmptyLogo width="240px" height="120px" />
            <Typography variant="h6" m={3}>プロジェクトを作成しましょう</Typography>
        </Grid>
    )
}

export default NoProject;
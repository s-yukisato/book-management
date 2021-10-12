import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ReactComponent as EmptyLogo } from '../../assets/undraw_empty_street_sfxm.svg';

const NoProject = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={2}
            minHeight="82vh"
        >
            <Grid item>
                <EmptyLogo width="240px" height="120px" />
            </Grid>
            <Grid item sx={{ mx: 1, my: 3 }}>
                <Typography variant="h6" m={3}>プロジェクトを作成しましょう</Typography>
            </Grid>
        </Grid>
    )
}

export default NoProject;
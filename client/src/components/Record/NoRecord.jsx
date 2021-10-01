import { useHistory } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ReactComponent as BookLoverLogo } from '../../assets/undraw_book_lover_mkck.svg';

const NoRecord = () => {
    const history = useHistory();

    const renderHandler = () => {
        history.push("/")
    }

    return (
        <Grid
            item
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{ display: { xs: 'block', sm: 'flex' } }}
        >
            <Box>
                <BookLoverLogo width="80%" height="80%" />
            </Box>
            <Box sx={{ mx: 1, my: 3 }}>
                <Typography variant="h6">本棚に登録しましょう。</Typography>
                <Button onClick={renderHandler}>探しに行く</Button>
            </Box>
        </Grid>
    )
}

export default NoRecord;
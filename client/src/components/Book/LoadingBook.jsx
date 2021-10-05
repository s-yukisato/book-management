import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';


const LoadingBook = () => {
  return (
    <Grid item>
      <Card sx={{ width: 210, height: 280, mb: 1, p: 2 }}>
        <Skeleton variant="rectangular" width={180} height={130} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="70%" />
        </Box>
      </Card>
    </Grid>
  )
};

export default LoadingBook;
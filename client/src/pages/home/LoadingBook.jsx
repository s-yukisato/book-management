import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';


const LoadingBook = React.memo(() => {
  return (
    <Grid item>
      <Card sx={{
        width: 210,
        height: 280,
        m: 1, p: 2,
        boxShadow: 2,
        bgcolor: "transparent",
        cursor: "inherit"
      }}>
        <Skeleton variant="rectangular" width={180} height={130} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="70%" />
        </Box>
      </Card>
    </Grid>
  )
});

export default LoadingBook;
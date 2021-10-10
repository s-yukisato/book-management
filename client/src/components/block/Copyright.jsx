import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = React.memo((props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/s-yukisato/book-management">
                TeeLog
            </Link>{' '}
            {2021}
            {'.'}
        </Typography>
    );
}, () => true);

export default Copyright;
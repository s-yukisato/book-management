import React from 'react';

import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';

import CloseIcon from '@mui/icons-material/Close';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const Snackbar = ({ isOpen, setIsOpen, message }) => {
    const close = (event, reason) => {
        if (reason === 'clickaway') return;
        
        setIsOpen(false);
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={close}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <div>
            <MuiSnackbar
                open={isOpen}
                autoHideDuration={5000}
                onClose={close}
                action={action}
            >
                <Alert onClose={close} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </MuiSnackbar>
        </div>
    );

};

export default Snackbar;
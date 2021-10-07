import React, { useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';

import CloseIcon from '@mui/icons-material/Close';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
  });


export function useSnackbar() {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true)

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

    const component = ({ message }) => {
        return (
            <div>
                <Snackbar
                    open={isOpen}
                    autoHideDuration={5000}
                    onClose={close}
                    action={action}
                >
                    <Alert onClose={close} severity="success" sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        );
    }

    return { component, open, close };
}
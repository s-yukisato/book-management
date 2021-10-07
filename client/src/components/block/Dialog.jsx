import React from 'react';

import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});


const Dialog = ({ isOpen, close, title, content, action }) => {
    console.log("dailog rendereee")
    return (
        <MuiDialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={close}
        >
            <DialogTitle>{title}</DialogTitle>
            <Divider />
            <DialogContent>{content}</DialogContent>
            <Divider />
            <DialogActions>{action}</DialogActions>
        </MuiDialog>
    )
};

export default Dialog;
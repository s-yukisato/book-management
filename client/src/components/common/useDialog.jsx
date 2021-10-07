import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});


export function useDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);

    const component = React.memo(({ title, content, action }) => {
        console.log("dailog rendereee")
        return (
            <Dialog
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
            </Dialog>
        )
    })

    return { component, open, close }
};
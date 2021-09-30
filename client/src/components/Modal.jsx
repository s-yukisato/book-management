import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';

import RegistrationForm from './RegistrationForm';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});


export default function AlertDialogSlide({ book, open, setOpen, setRegistered }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{book.title}</DialogTitle>
                <Divider />
                <DialogContent>
                    <RegistrationForm setModalOpen={setOpen} setRegistered={setRegistered} book={book} />
                </DialogContent>
            </Dialog>
        </>
    );
}
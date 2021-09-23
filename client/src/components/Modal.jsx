import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';

import RegistrationForm from './RegistrationForm';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});


export default function AlertDialogSlide({ book, open, setOpen }) {
    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRegister = () => {
        setOpen(false);
    }

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
                    <RegistrationForm book={book} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRegister}>登録</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
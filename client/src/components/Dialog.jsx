import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';


const DialogComponent = ({ values, open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };
    const { title, content, actions } = values;

    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <Divider />
                <DialogContent>{content}</DialogContent>
                <DialogActions>{actions}</DialogActions>
            </Dialog>
        </>
    );
}

export default DialogComponent


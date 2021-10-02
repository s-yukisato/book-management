import Snackbar from '@mui/material/Snackbar';


const Snackbars = ({ open, setOpen, message }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={message}
            />
        </>
    );
};

export default Snackbars;
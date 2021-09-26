import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';

import { ReactComponent as AuthenticationLogo } from '../assets/undraw_authentication_fsn5.svg'


export default function AlertDialogSlide({open, setOpen}) {
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickSignIn = () => {
        setOpen(false);
        history.push('/signin')
    }

    const handleClickSignUp = () => {
        setOpen(false);
        history.push('/signup')
    }

    return (
        <>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>このサービスはログインが必要です</DialogTitle>
                <Divider />
                <DialogContent>
                    <AuthenticationLogo width="80%" height="80%" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickSignIn}>サインイン</Button>
                    <Button onClick={handleClickSignUp}>サインアップ</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
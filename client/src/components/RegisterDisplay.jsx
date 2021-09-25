import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';

import LightTooltip from './LightTooltip';



const RegisterDisplay = ({ registered, register, unregister, open, handleClose }) => {

    return (
        <>
            {registered ? (
                <LightTooltip title="お気に入りを解除する">
                    <IconButton onClick={unregister}>
                        <PlaylistAddCheckIcon color="primary" />
                    </IconButton>
                </LightTooltip>
            ) : (
                <LightTooltip title="本棚に登録する">
                    <IconButton onClick={register}>
                        <AddIcon color="primary" />
                    </IconButton>
                </LightTooltip>
            )}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" color="error">
                    注意してください。
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        登録内容がすべて消えてしまいます。
                        よろしいですか？
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>戻る</Button>
                    <Button onClick={handleClose} color="error">削除する</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RegisterDisplay;
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';

import LightTooltip from './LightTooltip';
import Modal from './Modal';
import Dialog from './Dialog';

import { ReactComponent as AuthenticationLogo } from '../assets/undraw_authentication_fsn5.svg'


const MediaCard = ({ book, registeredList, user }) => {
    const history = useHistory();

    const [registered, setRegistered] = useState(registeredList.includes(book.isbn));

    const [open, setOpen] = useState(false);
    const [dialog, setDialog] = useState(false);

    const register = () => {
        if (user) {
            setOpen(true);
        } else {
            setDialog(true);
        }
    }

    const unregister = () => {
        history.push("/library");
    }

    const redirectSignup = () => {
        history.push('/signup');
    }

    const redirectSignin = () => {
        history.push('/signin');
    }

    const values = {
        title: "このサービスはログインが必要です",
        content: <AuthenticationLogo width="80%" height="80%" />,
        actions: (
            <>
                <Button onClick={redirectSignup}>サインアップ</Button>
                <Button onClick={redirectSignin}>サインイン</Button>
            </>
        )
    }

    return (
        <Card sx={{
            width: 210,
            height: 280,
            mb: 1,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ":hover": {
                boxShadow: 6,
            },
        }}>
            <CardMedia
                component="img"
                image={book.largeImageUrl}
                alt="No image"
                sx={{
                    width: 97,
                    height: 130
                }}
            />
            <CardContent>
                <Typography variant="body2" component="div" sx={{
                    height: 40,
                    overflow: 'hidden'
                }}>
                    {book ? book.title : "Not found"}
                </Typography>
            </CardContent>
            <CardActions>
                {registered ? (
                    <LightTooltip title="本棚から削除する">
                        <IconButton onClick={unregister}>
                            <PlaylistAddCheckIcon color="info" />
                        </IconButton>
                    </LightTooltip>
                ) : (
                    <LightTooltip title="本棚に登録する">
                        <IconButton onClick={register}>
                            <AddIcon color="primary" />
                        </IconButton>
                    </LightTooltip>
                )}
                <Modal open={open} setOpen={setOpen} setRegistered={setRegistered} book={book} />
                <Dialog values={values} open={dialog} setOpen={setDialog} />
            </CardActions>
        </Card>
    );
};

export default MediaCard;
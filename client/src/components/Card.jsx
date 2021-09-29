import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';

import LightTooltip from './LightTooltip';
import Modal from './Modal';


const MediaCard = ({ book }) => {
    const history = useHistory();

    const [registered, setRegistered] = useState(false);

    const [open, setOpen] = useState(false);

    const register = () => {
        setOpen(true);
    }

    const unregister = () => {
        history.push("/library");
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
            </CardActions>
        </Card>
    );
};

export default MediaCard;
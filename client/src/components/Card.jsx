import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Modal from './Modal';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));


const MediaCard = ({ book }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [favorited, setFavorited] = React.useState(false);

    const handleChange = () => {
        setFavorited(!favorited)
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
                <Typography gutterBottom variant="body2" component="div" overflow="hidden">
                    {book ? book.title : "Not found"}
                </Typography>
            </CardContent>
            <CardActions>
                <LightTooltip title="本棚に登録する">
                    <IconButton onClick={handleClickOpen}>
                        <AddIcon color="primary" />
                    </IconButton>
                </LightTooltip>
                <Modal open={open} setOpen={setOpen} book={book} />
                <LightTooltip title="詳細を見る">
                    <IconButton>
                        <InfoOutlinedIcon />
                    </IconButton>
                </LightTooltip>
                {favorited ? (
                    <LightTooltip title="お気に入りを解除する">
                        <IconButton onClick={handleChange}>
                            <FavoriteIcon color="error" />
                        </IconButton>
                    </LightTooltip>
                ) : (
                    <LightTooltip title="お気に入り登録">
                        <IconButton onClick={handleChange}>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </LightTooltip>
                )}
            </CardActions>
        </Card>
    );
};

export default MediaCard;
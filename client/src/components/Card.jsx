import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const MediaCard = ({ book }) => {
    return (
        <Card sx={{
            minWidth: 600,
            maxHeight: 250,
            m: 1,
            p: 2,
            display: 'flex',
        }}>
            <CardMedia
                component="img"
                image={book.largeImageUrl}
                alt="No image"
                sx={{
                    pl: 2,
                    p: 1,
                    width: 80,
                    height: 120
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {book ? book.title : "Not found"}
                </Typography>
            </CardContent>
            <CardActions>
                <Fab color="info" size="small">
                    <AddIcon />
                </Fab>
                <Button size="small">本棚に登録する</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default MediaCard;
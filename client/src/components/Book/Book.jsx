import { useState } from 'react';

import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AddIcon from '@mui/icons-material/Add';

import LightTooltip from '../LightTooltip';

import { BookCard } from '../UI/BookCard';


const Book = ({ book, registeredList }) => {
    const [registered, setRegistered] = useState(registeredList.includes(book.isbn));

    const register =() => {}
    const unregister =() =>{}
    return (
        <Grid item>
            <BookCard>
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
                </CardActions>
            </BookCard>
        </Grid>
    )

}

export default Book;
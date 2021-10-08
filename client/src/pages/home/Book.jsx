import React from 'react';

import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import LightTooltip from '../../components/block/LightTooltip';
import { BookCard } from '../../components/UI/BookCard';

import { useRedirect } from '../../hooks/useRedirect';


const Book = React.memo(({ book, registered, index, setTargetIndex }) => {
    const { toLibraryPage } = useRedirect();

    const openDialog = () => setTargetIndex(index);

    return (
        <Grid item>
            <BookCard sx={{ bgcolor: "transparent", ":hover": { boxShadow: 4 } }}>
                <CardMedia
                    component="img"
                    image={book.largeImageUrl}
                    alt="No image"
                    sx={{ width: 97, height: 130 }} />
                <CardContent>
                    <Typography variant="body2" component="div" sx={{ height: 40, overflow: 'hidden' }}>
                        {book ? book.title : "Not found"}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box>
                        <Typography variant="caption">みんなの評価</Typography>
                        <Rating
                            value={parseFloat(book.reviewAverage)}
                            precision={0.1}
                            readOnly />
                    </Box>
                    {registered ? (
                        <LightTooltip title="本棚から削除する">
                            <IconButton onClick={toLibraryPage}>
                                <BookmarkAddedIcon color="success" />
                            </IconButton>
                        </LightTooltip>
                    ) : (
                        <LightTooltip title="本棚に登録する">
                            <IconButton onClick={openDialog}>
                                <AddIcon color="primary" />
                            </IconButton>
                        </LightTooltip>
                    )}
                </CardActions>
            </BookCard>
        </Grid>
    )
})

export default Book;
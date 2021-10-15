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
import { BookCard } from './BookCard';

import { useRedirect } from '../../hooks/useRedirect';


const Book = React.memo(({ book, isRegisteredList, index, setTargetIndex, setActionType }) => {
    const { toLibraryPage } = useRedirect();

    const openDialog = () => {
        setActionType("register");
        setTargetIndex(index);
    }

    const openBookInfo = () => {
        setActionType("info");
        setTargetIndex(index);
    }

    return (
        <Grid item sx={{ position: "relative" }}>
            <BookCard
                onClick={openBookInfo}
                sx={{
                    bgcolor: "transparent",
                    ":hover": { boxShadow: 4 },
                    cursor: "pointer"
                }}
            >
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
                </CardActions>
            </BookCard>
            {isRegisteredList[index] ? (
                <LightTooltip title="本棚から削除する">
                    <IconButton
                        onClick={toLibraryPage}
                        sx={{ position: "absolute", top: "15px", left: "15px", zIndex: 10 }}>
                        <BookmarkAddedIcon color="info" />
                    </IconButton>
                </LightTooltip>
            ) : (
                <LightTooltip title="本棚に登録する">
                    <IconButton
                        onClick={openDialog}
                        sx={{ position: "absolute", bottom: "5px", right: "5px", zIndex: 10 }}>
                        <AddIcon color="primary" />
                    </IconButton>
                </LightTooltip>
            )}
        </Grid>
    )
})

export default Book;
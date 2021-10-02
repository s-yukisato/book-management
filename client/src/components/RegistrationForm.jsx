import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

import { 
    Memo,
    Status,
    RatingPart as Rating,
    Page
} from './FormParts/FormParts'
import { GradientButton } from './UI/Button';

import { useRegisterBook, useRegisterRecord} from '../hooks/useRegister';


const Record = ({ book, setModalOpen, setRegistered }) => {
    const [error, setError] = useState();

    const bookValues = {
        _id: book.isbn,
        title: book.title,
        author: book.author,
        publisher: book.publisherName,
        price: book.itemPrice,
        image: book.largeImageUrl
    };

    const [values, setValues] = useState({
        memo: '',
        status: 'reading',
        rating: 3,
        page: '0',
        book: {
            isbn: book.isbn,
            title: book.title,
            image: book.largeImageUrl
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (book.isbn === "") {
            return setError("これは登録対象外です")
        }
        // const { error: registerBookError } = useRegisterBook(bookValues);

        // if (error) {
        //     return
        // }
        // const { error: registerRecordError } = useRegisterRecord(values);

        // if (registerBookError) {
        //     return setError("登録に失敗しました")
        // }

        if (!error) {
            setModalOpen(false);
            setRegistered(true);
        }
    }

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}><Memo values={values} setValues={setValues} /></Grid>
                    <Grid item xs={12}><Status values={values} setValues={setValues} /></Grid>
                    <Grid item xs={12}><Page values={values} setValues={setValues} /></Grid>
                    <Grid item xs={12}><Rating values={values} setValues={setValues} /></Grid>
                </Grid>
                <GradientButton
                    type="submit"
                    fullWidth
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    登録する
                </GradientButton>
                <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
            </Box>
        </>
    )
}

export default Record
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../config";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
    Memo,
    Status,
    RatingPart as Rating,
    Page
} from '../../components/FormParts/Record';
import Dialog from '../../components/block/Dialog';
import Snackbar from '../../components/block/Snackbar';

import Book from "./Book";

import { useFetchRecordContext } from '../../context/FetchContext';


const initalState = {
    memo: '',
    status: 'reading',
    rating: 3,
    page: '0',
    book: {
        isbn: "",
        title: "",
        image: "",
        pages: 300,
    }
}

const BookList = ({ books }) => {
    const { dataState } = useFetchRecordContext();
    const records = dataState.data;
    // 登録済みの書籍をRecordから探す
    const registeredList = records.length > 0 ? records.map((record) => record.book.isbn) : [];

    const [openDialog, setOpenDialog] = useState(false);
    
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [error, setError] = useState(null);

    const [targetIndex, setTargetIndex] = useState(null);

    // Recordに登録するデータ内容
    const [values, setValues] = useState(initalState);

    useEffect(() => {
        // 初回にダイアログが開かないように
        if (targetIndex == null) return;
        
        // 選択された書籍のデータをbooks配列から参照
        setValues({
            ...values, book: {
                isbn: books[targetIndex].isbn,
                title: books[targetIndex].title,
                image: books[targetIndex].largeImageUrl,
                pages: 300
            }
        })
        setOpenDialog(true);
    }, [targetIndex]);

    const closeDialog = () => {
        setOpenDialog(false);
        setTargetIndex(null);
    };

    const register = async (e) => {
        e.preventDefault();
        // 書籍ではないものは登録できないようにする
        if (values.book.isbn === "") {
            return setError("これは登録対象外です")
        }
        setError(null);

        await axios.post(`${API_URI}/api/v1/record`, values)
            .then(res => res)
            .catch(err => setError(err.message))

        if (error) return setError("登録に失敗しました")

        if (!error) {
            setOpenDialog(false);
            setOpenSnackbar(true);
            setValues(initalState);
        }
    }

    const title = values.book.title;

    const content = (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}><Memo values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Status values={values} setValues={setValues} /></Grid>
                <Grid item xs={12} sm={6}><Page values={values} setValues={setValues} /></Grid>
                {/* <Grid item xs={12} sm={6}><Page values={values} setValues={setValues} /></Grid> */}
                <Grid item xs={12}><Rating values={values} setValues={setValues} /></Grid>
            </Grid>
            <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
        </Box>
    )

    const action = (
        <>
            <Button onClick={closeDialog}>閉じる</Button>
            <Button type="submit" onClick={register}>登録する</Button>
        </>
    )


    return (
        <>
            <Grid
                container
                flex="auto"
                justifyContent='space-evenly'
                spacing={2}
                m="auto"
                sx={{
                    "&:before": {
                        display: "block",
                        content: '""',
                        width: "210px",
                        order: 1
                    },
                    "&:after": {
                        display: "block",
                        content: '""',
                        width: "210px",
                    }
                }}
            >
                {books.map((book, index) => (
                    <Book key={book.isbn} registered={registeredList.includes(book.isbn)} index={index} setTargetIndex={setTargetIndex} book={book} />
                ))}
            </Grid>
            <Dialog isOpen={openDialog} close={closeDialog} title={title} content={content} action={action} />
            <Snackbar isOpen={openSnackbar} setIsOpen={setOpenSnackbar} message="本棚に登録しました" />
        </>
    )
}

export default BookList;
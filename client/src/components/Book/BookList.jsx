import React, { useEffect, useState } from "react";
import axios from "axios";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';

import {
    Memo,
    Status,
    RatingPart as Rating,
    Page
} from '../FormParts/Record';

import { useSnackbar } from '../common/useSnackbar'

import Book from "./Book";

import { useFetchRecordContext } from '../../context/FetchContext';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});


const url = `http://localhost:3001/api/v1`

const BookList = ({ books }) => {
    console.log("boook list")

    const { dataState } = useFetchRecordContext();
    const records = dataState.data

    // 登録済みの書籍をRecordから探す
    const registeredList = records.length > 0 ? records.map((record) => record.book.isbn) : [];


    // ダイアログ用
    const [open, setOpen] = useState(false);

    const [targetIndex, setTargetIndex] = useState(null);

    const [values, setValues] = useState({
        memo: '',
        status: 'reading',
        rating: 3,
        page: '0',
        book: {
            isbn: "",
            title: "",
            image: "",
        }
    });

    useEffect(() => {
        console.log(targetIndex)
        if (targetIndex == null) return;
        setValues({ ...values, book: {
            isbn: books[targetIndex].isbn,
            title: books[targetIndex].title,
            image: books[targetIndex].largeImageUrl
        }})
        setOpen(true);
    }, [targetIndex])


    const handleClose = () => setOpen(false);

    const [error, setError] = useState(null);


    const snackbar = useSnackbar();
    const Snackbar = snackbar.component

    const register = async (e) => {
        e.preventDefault();
        if (values.book.isbn === "") {
            return setError("これは登録対象外です")
        }
        setError(null);

        await axios.post(`${url}/record`, values)
            .then(res => res.json())
            .catch(err => setError(err.message))

        if (error) {
            return setError("登録に失敗しました")
        }

        if (!error) {
            setOpen(false);
            snackbar.open();
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

    const actions = (
        <>
            <Button onClick={handleClose}>閉じる</Button>
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
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>{title}</DialogTitle>
                <Divider />
                <DialogContent>{content}</DialogContent>
                <Divider />
                <DialogActions>{actions}</DialogActions>
            </Dialog>
            <Snackbar message="本棚に登録しました" />
        </>
    )
}

export default BookList;
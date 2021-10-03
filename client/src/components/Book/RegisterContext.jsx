import React, { createContext, useContext, useState } from "react";
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
} from '../FormParts/Register';


const RegisterContext = createContext();

export const useRegisterContext = () => {
    return useContext(RegisterContext);
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export function RegisterProvider({ props, children }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const { book, registeredList } = props;
    const [registered, setRegistered] = useState(registeredList.includes(book.isbn));


    const [error, setError] = useState(null);

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

    const url = `http://localhost:3001/api/v1`

    const register = async (e) => {
        e.preventDefault();
        if (book.isbn === "") {
            return setError("これは登録対象外です")
        }
        setError(null);
        console.log("regiser1")
        await axios.post(`${url}/book`, bookValues)
            .then(res => res.json())
            .catch(err => setError(err.message))
        console.log("regiser2")
        if (error) return;
        await axios.post(`${url}/record`, values)
            .then(res => res.json())
            .catch(err => setError(err.message))
        console.log("regiser2")
        if (error) {
            return setError("登録に失敗しました")
        }

        if (!error) {
            setOpen(false);
            setRegistered(true);
        }
    }

    const title = "登録フォーム"

    const content = (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}><Memo values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Status values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Page values={values} setValues={setValues} /></Grid>
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

    const value = {
        registered,
        handleOpen,

    }

    return (
        <RegisterContext.Provider value={value}>
            {children}
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
        </RegisterContext.Provider>
    )
}



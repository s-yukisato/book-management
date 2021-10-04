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
} from '../FormParts/Register';
import Slider from '../Slider';


const UpdateContext = createContext();

export const useUpdateContext = () => {
    return useContext(UpdateContext);
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export function UpdateProvider({ record, children }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const [error, setError] = useState(null);

    const [values, setValues] = useState({
        memo: record.memo,
        status: record.status,
        rating: record.rating,
        page: record.page,
    });

    const url = `http://localhost:3001/api/v1`

    const update = async (e) => {
        e.preventDefault();

        setError(null);

        if (error) return;

        console.log(values)
        await axios.put(`${url}/record/${record._id}`, values)
            .then(res => console.log(res.data))
            .catch(err => setError(err.message))

        if (error) {
            return setError("登録に失敗しました")
        }

        if (!error) {
            setOpen(false);
        }
    }

    const title = record.book.title;

    const content = (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}><Memo values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Status values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Rating values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Slider values={values} setValues={setValues} /></Grid>
            </Grid>
            <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
        </Box>
    )

    const actions = (
        <>
            <Button onClick={handleClose}>閉じる</Button>
            <Button type="submit" onClick={update}>変更する</Button>
        </>
    )

    const value = {
        handleOpen,
        handleClose,
    }

    return (
        <UpdateContext.Provider value={value}>
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
        </UpdateContext.Provider>
    )
}
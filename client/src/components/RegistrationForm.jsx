import { useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Rating from './Rating';


const Record = ({ book, setModalOpen, setRegistered }) => {
    const [error, setError] = useState(null);

    // const bookValues = {
    //     _id: book.isbn,
    //     title: book.title,
    //     author: book.author,
    //     publisher: book.publisherName,
    //     price: book.itemPrice,
    //     image: book.largeImageUrl
    // };
    const [values, setValues] = useState({
        memo: '',
        status: 'want',
        rating: 3,
        progress: '0',
        book: {
            isbn: book.isbn,
            title: book.title,
            image: book.largeImageUrl
        }
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const url = 'http://localhost:3001/api/v1/'

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (book.isbn === "") {
            return setError("これは登録対象外です")
        }
        setError(false)
        // await axios.post(`${url}book`, bookValues)
        //     .then(res => console.log(res))
        //     .catch(err => setError(true))
        await axios.post(`${url}record`, values)
            .then(res => console.log(res))
            .catch(err => setError(true))

        if (!error) {
            setModalOpen(false);
            setRegistered(true);
        }
    }

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="memo"
                            fullWidth
                            multiline
                            label="メモ"
                            value={values.memo}
                            onChange={handleChange('memo')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="status">状態</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="status"
                                    name="status"
                                    value={values.status}
                                    label="状態"
                                    onChange={handleChange('status')}
                                >
                                    <MenuItem value={"want"}>読みたい</MenuItem>
                                    <MenuItem value={"reading"}>読んでいる</MenuItem>
                                    <MenuItem value={"finished"}>読み終わった</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">読んだページ</InputLabel>
                            <OutlinedInput
                                id="progress"
                                type="number"
                                value={values.progress}
                                onChange={handleChange('progress')}
                                endAdornment={<InputAdornment position="end">/300</InputAdornment>}
                                label="progress"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Rating values={values} setValues={setValues} />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    登録する
                </Button>
                <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
            </Box>
        </>
    )
}

export default Record
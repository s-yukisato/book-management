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

import Rating from '../components/Rating';


const Record = ({ book }) => {
    const bookValues = {
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        price: book.itemPrice,
        image: book.largeImageUrl
    };
    const [values, setValues] = useState({
        memo: '',
        status: '',
        rating: 3,
        progress: '2',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values)
    };

    const url = 'http://localhost:3001/api/v1/'

    const handleSubmit = async () => {
        let bookId;
        await axios.post(`${url}book`, bookValues)
            .then(res => bookId = res.data)
            .catch(err => console.error(err))
        console.log(bookId)
        await axios.post(`${url}record`, { ...values, book: bookId, user: "614ff37b54f23a0274fde6b9" })
            .then(res => console.log(res))
            .catch(err => console.error(err))
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
            </Box>
        </>
    )
}

export default Record
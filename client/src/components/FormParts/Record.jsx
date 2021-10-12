import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { usePageValidate } from '../../hooks/useValidate';


export const Memo = ({ values, setValues }) => {
    const handleChange = (e) => {
        setValues({ ...values, "memo": e.target.value });
    };

    return (
        <TextField
            id="memo"
            name="memo"
            label="メモ"
            value={values.memo}
            fullWidth
            multiline
            rows={4}
            placeholder="例: 1章が面白かった"
            onChange={handleChange}
        />
    )
}

export const Status = ({ values, setValues }) => {
    const handleChange = (e) => {
        setValues({ ...values, "status": e.target.value });
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="status">読書状況</InputLabel>
            <Select
                id="status"
                name="status"
                label="読書状況"
                value={values.status}
                onChange={handleChange}
            >
                <MenuItem value={"wanted"}>読みたい</MenuItem>
                <MenuItem value={"reading"}>読んでいる</MenuItem>
                <MenuItem value={"read"}>読み終わった</MenuItem>
            </Select>
        </FormControl>
    )
}

export const Page = ({ values, setValues }) => {
    const { error, message, validate } = usePageValidate()

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({ ...values, "page": post });
        validate(post)
    };

    return (
        <TextField
            id="page"
            type="number"
            variant="outlined"
            fullWidth
            value={values.page}
            label="読み終わったページ数"
            error={error}
            helperText={message}
            onChange={handleChange}
        />
    )
}

export const PagesOfBook = ({ values, setValues }) => {
    const { error, message, validate } = usePageValidate()

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({ ...values, book: { ...values.book, pages: post } });
        validate(post)
    };
    return (
        <TextField
            id="pages-of-book"
            type="number"
            variant="outlined"
            fullWidth
            value={values.book.pages}
            label="書籍のページ数"
            error={error}
            helperText={message}
            onChange={handleChange}
        />
    )
}

export const RatingPart = ({ values, setValues }) => {
    const handleChange = (e) => {
        setValues({ ...values, "rating": parseInt(e.target.value) });
    };
    return (
        <>
            <Typography variant="body2">評価 {values.rating}</Typography>
            <Rating
                value={values.rating}
                precision={1}
                onChange={handleChange} />
        </>
    )
}
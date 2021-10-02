import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


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
    const handleChange = (e) => {
        setValues({ ...values, "page": e.target.value });
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="page">ページ数</InputLabel>
            <OutlinedInput
                id="page"
                type="number"
                name="page"
                label="ページ数"
                value={values.page}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end">/300</InputAdornment>}
            />
        </FormControl>
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
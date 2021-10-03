import TextField from '@mui/material/TextField';


export const Title = ({ values, setValues }) => {
    const handleChange = (e) => {
        setValues({ ...values, "title": e.target.value });
    };

    return (
        <TextField
            id="title"
            label="タイトル"
            value={values.title}
            fullWidth
            variant="standard"
            onChange={handleChange}
        />
    )
}

export const Author = ({ values, setValues }) => {
    const handleChange = (e) => {
        setValues({ ...values, "author": e.target.value });
    };

    return (
        <TextField
            id="author"
            label="著者"
            value={values.author}
            fullWidth
            variant="standard"
            onChange={handleChange}
        />
    )
}

export const Isbn = ({ values, setValues }) => {
    const handleChange = (e) => {
        setValues({ ...values, "isbn": e.target.value });
    };

    return (
        <TextField
            id="isbn"
            label="ISBN"
            value={values.isbn}
            fullWidth
            variant="standard"
            onChange={handleChange}
        />
    )
}
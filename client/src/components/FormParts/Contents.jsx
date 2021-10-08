import TextField from "@mui/material/TextField";

export const Contents = ({ values, setValues }) => {
    const handleChange = (e) => {
        setValues({ ...values, "contents": e.target.value });
    };

    return (
        <TextField
            id="contents"
            name="contents"
            label="お問い合わせ内容"
            value={values.contents}
            fullWidth
            multiline
            rows={4}
            onChange={handleChange}
        />
    )
}

export default Contents;
import TextField from '@mui/material/TextField'

import { useEmailValidate } from '../hooks/usePostValidate';

const Email = ({ values, setValues }) => {
    const [error, validateInput] = useEmailValidate()

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({...values, "email": post});
        validateInput(post)
    };

    return (
        <TextField
            required
            id="email"
            variant="outlined"
            fullWidth
            value={values.email}
            label="メールアドレス"
            error={error}
            helperText={error}
            onChange={handleChange}
        />
    )
}

export default Email;
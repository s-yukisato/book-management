import TextField from '@mui/material/TextField'

import { useEmailValidate } from '../../hooks/useValidate';

const Email = ({ values, setValues }) => {
    const { error, message, validate } = useEmailValidate()

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({ ...values, "email": post });
        validate(post)
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
            helperText={message}
            onChange={handleChange}
        />
    )
}

export default Email;
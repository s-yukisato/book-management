import { useState } from 'react';

import TextField from '@mui/material/TextField';

const ConfirmPassword = ({ values, setValues }) => {
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        const post = e.target.value;
        setValues({ ...values, "confirmPassword": post });
    };

    const handleCheck = () => {
        if (!values.confirmPassword) return;
        setError(false);
        if (values.password !== values.confirmPassword) {
            setError(true);
        }
    }

    return (
        <TextField
            required
            id="confirmPassword"
            variant="outlined"
            type="password"
            fullWidth
            value={values.confirmPassword}
            label="確認用パスワード"
            error={error}
            onBlur={handleCheck}
            helperText={error && "パスワードと一致しません"}
            onChange={handleChange}
        />
    )
}

export default ConfirmPassword;
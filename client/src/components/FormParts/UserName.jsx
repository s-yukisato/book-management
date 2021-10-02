import TextField from '@mui/material/TextField'

import { useUserNameValidate } from '../../hooks/useValidate';

const UserName = ({ values, setValues }) => {
    const { error, message, validate } = useUserNameValidate()

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({ ...values, "name": post });
        validate(post)
    };

    return (
        <TextField
            required
            id="name"
            variant="outlined"
            fullWidth
            value={values.name}
            label="ユーザー名"
            error={error}
            helperText={message}
            onChange={handleChange}
        />
    )
}

export default UserName;
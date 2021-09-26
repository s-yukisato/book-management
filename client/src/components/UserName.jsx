import TextField from '@mui/material/TextField'

import { useUserNameValidate } from '../hooks/usePostValidate';

const UserName = ({ values, setValues }) => {
    const [error, validateInput] = useUserNameValidate()

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({...values, "name": post});
        validateInput(post)
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
            helperText={error}
            onChange={handleChange}
        />
    )
}

export default UserName;
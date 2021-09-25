<<<<<<< Updated upstream
import * as React from 'react';

import TextField from '@mui/material/TextField'

const Email = ({ values, setValues }) => {
    const inputRef = React.useRef(null);
    const [inputError, setInputError] = React.useState(false);

    const handleChange = () => {
        if (inputRef.current) {
            const ref = inputRef.current;
            if (!ref.validity.valid) {
                setInputError(true);
            } else {
                setInputError(false);
            }
        }
=======
import TextField from '@mui/material/TextField'

import { useEmailValidate } from '../hooks/usePostValidate';

const Email = ({ values, setValues }) => {
    const [error, validateInput] = useEmailValidate()

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({...values, "email": post});
        validateInput(post)
>>>>>>> Stashed changes
    };

    return (
        <TextField
            required
<<<<<<< Updated upstream
            fullWidth
            id="email"
            error={inputError}
            inputProps={{ pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/ }}
            inputRef={inputRef}
            defaultValue=""
            label="Email Address"
            variant="outlined"
            helperText={inputRef?.current?.validationMessage}
=======
            id="email"
            variant="outlined"
            fullWidth
            value={values.email}
            label="メールアドレス"
            error={error}
            helperText={error}
>>>>>>> Stashed changes
            onChange={handleChange}
        />
    )
}

export default Email;
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
    };

    return (
        <TextField
            required
            fullWidth
            id="email"
            error={inputError}
            inputProps={{ pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/ }}
            inputRef={inputRef}
            defaultValue=""
            label="Email Address"
            variant="outlined"
            helperText={inputRef?.current?.validationMessage}
            onChange={handleChange}
        />
    )
}

export default Email;
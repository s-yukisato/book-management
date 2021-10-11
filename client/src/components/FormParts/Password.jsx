import { useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { usePasswordValidate } from '../../hooks/useValidate';


const Password = ({ values, setValues, validation, id, label }) => {
    const [showPassword, setShowPassword] = useState(false)
    const { error, message, validate } = usePasswordValidate();

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({ ...values, [id]: post })
        if (validation) validate(post);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl required fullWidth variant="outlined">
            <InputLabel htmlFor={id} error={error}>{label}</InputLabel>
            <OutlinedInput
                id={id}
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                error={error}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
            <FormHelperText error={error}>{message}</FormHelperText>
        </FormControl>
    )
}

export default Password;
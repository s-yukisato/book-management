import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { usePasswordValidate } from '../hooks/usePostValidate';


const Password = ({ values, setValues }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, validateInput] = usePasswordValidate();

    const handleChange = (e) => {
        const post = e.target.value;
        setValues({ ...values, 'password': post })
        validateInput(post)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl required fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" error={error}>Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                error={error}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
            <FormHelperText error={error}>{error}</FormHelperText>
        </FormControl>
    )
}

export default Password;


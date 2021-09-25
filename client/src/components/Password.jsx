<<<<<<< Updated upstream
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
=======
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
>>>>>>> Stashed changes
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

<<<<<<< Updated upstream

const Password = ({ values, setValues, handleChange }) => {
    

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
=======
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
>>>>>>> Stashed changes
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl required fullWidth variant="outlined">
<<<<<<< Updated upstream
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
=======
            <InputLabel htmlFor="outlined-adornment-password" error={error}>Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                error={error}
>>>>>>> Stashed changes
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
<<<<<<< Updated upstream
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
=======
                            {showPassword ? <VisibilityOff /> : <Visibility />}
>>>>>>> Stashed changes
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
<<<<<<< Updated upstream
=======
            <FormHelperText error={error}>{error}</FormHelperText>
>>>>>>> Stashed changes
        </FormControl>
    )
}

export default Password;


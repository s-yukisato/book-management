import { useState } from 'react';

export const useRegister = (initialState = false) => {
    const [registered, setRegistered] = useState(initialState);
    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };

    const register = () => {
        setRegistered(true);
    }

    const unregister = () => {
        setOpen(true)
    }

    return [registered, register, unregister, open, handleClose];
}

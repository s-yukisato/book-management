import * as React from 'react';

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


export default function InputAdornments({ book }) {
    const [values, setValues] = React.useState({
        title: '',
        author: '',
        price: '',
        publisher: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    id="outlined-read-only-input"
                    label="タイトル"
                    defaultValue={book ? book.title : "未登録"}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ m: 1 }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="著者"
                    defaultValue={book ? book.author : "未登録"}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ m: 1 }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="出版社"
                    defaultValue={book ? book.publisherName : "未登録"}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ m: 1 }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="出版日"
                    defaultValue={book ? book.salesDate : "未登録"}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ m: 1 }}
                />
                <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">価格</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={book.itemPrice}
                        onChange={handleChange('price')}
                        startAdornment={<InputAdornment position="start">¥</InputAdornment>}
                        label="price"
                    />
                </FormControl>
            </div>
            
        </Box>
    );
}
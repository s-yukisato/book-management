import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

const Access = () => {
    const [books, setBooks] = useState([]);
    const getBookData = () => {
        axios.get('http://localhost:3001/api')
            .then(response => setBooks(response.data))
    }
    useEffect(() => {
        getBookData();
    }, [])
    return (
        <div>
            <h1>Library</h1>
            {books.map(book => (
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card book={book} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Box>
            ))}
        </div>
    )
}

export default Access;
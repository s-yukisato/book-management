import { useState, useEffect } from 'react';
import axios from 'axios';

import Skeleton from './Skeleton';
import Card from './Card';

import Grid from '@mui/material/Grid';

const ContentList = () => {
    const [books, setBooks] = useState([]);
    const [loadingCompleted, setLoadingCompleted] = useState(false);


    useEffect(() => {
        const getBookData = async () => {
            await axios.get('http://localhost:3001/api')
                .then(res => {
                    setBooks(res.data)
                })
            setLoadingCompleted(true);
        };
        getBookData();
    }, [])

    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', p: 2, m: 1 }}>
                {loadingCompleted ? (
                    books.map((book, index) => (
                        <Grid item sm sx={{ mb: 1, mr: 1 }}>
                            <Card key={index} book={book} />
                        </Grid>
                    ))) : Array.from(new Array(30)).map(index => (
                        <Grid item sm sx={{ mb: 1, mr: 1 }}>
                            <Skeleton key={index} />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}

export default ContentList;
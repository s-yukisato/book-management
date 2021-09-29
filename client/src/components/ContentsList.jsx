import Grid from '@mui/material/Grid';

import Skeleton from './Skeleton';
import Card from './Card';

import { useFetch } from '../hooks/useFetch'

const ContentList = () => {
    const url = 'http://localhost:3001/api/data'
    const [books, completed] = useFetch(url);

    return (
        <>
            <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', m: 'auto', width: "90vw" }}>
                {completed ? (
                    books.map((book, index) => (
                        <Grid item key={index}>
                            <Card book={book} />
                        </Grid>
                    ))) : Array.from(new Array(30)).map(index => (
                        <Grid item key={index} >
                            <Skeleton />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}

export default ContentList;
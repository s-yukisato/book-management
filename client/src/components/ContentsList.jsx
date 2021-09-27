import Grid from '@mui/material/Grid';

import Skeleton from './Skeleton';
import Card from './Card';

import { useFetch } from '../hooks/useFetch'

const ContentList = () => {
    const url = 'http://localhost:3001/api/data'
    const [books, completed] = useFetch(url);

    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                {completed ? (
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
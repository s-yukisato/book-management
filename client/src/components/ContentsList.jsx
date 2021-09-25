import Grid from '@mui/material/Grid';

import Skeleton from './Skeleton';
import Card from './Card';

import { useFetch } from '../api/books'


const ContentList = () => {
    const [books, loadingCompleted] = useFetch();

    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
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
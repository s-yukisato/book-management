import Grid from '@mui/material/Grid';

import Skeleton from './Skeleton';
import Card from './Card';

import { useFetch } from '../hooks/useFetch';
import { useFetchRecordContext } from '../context/FetchContext';
import { useAuthContext } from '../context/AuthContext'

const ContentList = () => {
    const url = 'http://localhost:3001/api/data'
    const [books, completed] = useFetch(url);

    const { user } = useAuthContext();

    const { dataState } = useFetchRecordContext();
    const records = dataState.data

    const registeredList = records.length > 0 ? records.map((record) => record.book.isbn): [];

    return (
        <>
            <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', m: 'auto', width: "90vw" }}>
                {completed ? (
                    books.map((book, index) => (
                        <Grid item key={index}>
                            <Card book={book} registeredList={registeredList} user={user} />
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
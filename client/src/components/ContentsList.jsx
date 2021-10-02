import Grid from '@mui/material/Grid';

import Skeleton from './Skeleton';
import Card from './Card';

import { useFetch } from '../hooks/useFetch';
import { useFetchRecordContext } from '../context/FetchContext';
import { useAuthContext } from '../context/AuthContext';

const url = 'http://localhost:3001/api/data'

const ContentList = () => {
    const { data: books, status } = useFetch(url);
    console.log(books, status)

    const { user } = useAuthContext();

    const { dataState } = useFetchRecordContext();
    const records = dataState.data

    const registeredList = records.length > 0 ? records.map((record) => record.book.isbn) : [];

    return (
        <>
            <Grid
                container
                justifyContent='space-evenly'
                spacing={2} sx={{ m: 'auto', width: "90vw" }}>
                {status === "fetched" && (
                    books.map(book => (
                        <Grid item key={book.title}>
                            <Card book={book} registeredList={registeredList} user={user} />
                        </Grid>
                    )))}
                {(status === "fetching" || status === "idle") && Array.from(new Array(30)).map(index => (
                    <Grid item key={index} >
                        <Skeleton />
                    </Grid>
                ))}
                {status === "error" && <>現在メンテナンス中です</>}
            </Grid>
        </>
    )
}

export default ContentList;
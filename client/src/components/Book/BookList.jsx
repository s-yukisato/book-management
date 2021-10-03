import Grid from '@mui/material/Grid';

import Book from "./Book";

import { useAuthContext } from '../../context/AuthContext';
import { useFetchRecordContext } from '../../context/FetchContext';

const BookList = ({ books }) => {
    const { user } = useAuthContext();

    const { dataState } = useFetchRecordContext();
    const records = dataState.data

    const registeredList = records.length > 0 ? records.map((record) => record.book.isbn) : [];
    return (
        <Grid
            container
            flex="auto"
            justifyContent='space-evenly'
            spacing={2}
            m="auto"
        >
            {books.map(book => <Book book={book} registeredList={registeredList} user={user} />)}
        </Grid>
    )
}

export default BookList;
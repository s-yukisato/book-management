import Grid from '@mui/material/Grid';

import Book from "./Book";

import { useAuthContext } from '../../context/AuthContext';
import { useFetchRecordContext } from '../../context/FetchContext';
import { RegisterProvider } from './RegisterContext';

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
            sx={{
                "&:before": {
                    display: "block",
                    content: '""',
                    width: "210px",
                    order: 1
                },
                "&:after": {
                    display: "block",
                    content: '""',
                    width: "210px",
                }
            }}
        >
            {books.map(book => (
                <RegisterProvider props={{ book, registeredList }}>
                    <Book key={book.isbn} book={book} user={user} />
                </RegisterProvider>
            ))}
        </Grid>
    )
}

export default BookList;
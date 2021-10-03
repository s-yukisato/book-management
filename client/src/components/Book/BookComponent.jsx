import Grid from '@mui/material/Grid';

import BookList from './BookList';
import LoadingBook from './LoadingBook';
import NoBook from './NoBook';

import Pagination from './Pagination';

const BookComponent = ({ books, currentPage, setCurrentPage }) => {
    const status = "fetched"
    return (
        <>
            {status === "fetched" && (
                books.length > 0 ? (
                    <>
                        <BookList books={books} />
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </>
                ) : <NoBook />
            )}
            {(status === "fetching" || status === "idle") && Array.from(new Array(30)).map(index => (
                <Grid item key={index} >
                    <LoadingBook />
                </Grid>
            ))}
            {status === "error" && <>現在メンテナンス中です</>}
        </>
    )
}

export default BookComponent;
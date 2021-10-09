import React from 'react';

import Grid from '@mui/material/Grid';

import BookList from './BookList';
import LoadingBook from './LoadingBook';
import NoBook from './NoBook';

import Pagination from './Pagination';

const Container = React.memo(({ books, loading, currentPage, setCurrentPage, maxPage }) => {
    return (
        <>
            {!loading ? (
                books ? (
                    <>
                        <BookList books={books} loading={loading} />
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage} />
                    </>
                ) : <NoBook />
            ) : (
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
                    {Array.from(new Array(30)).map((_, index) => (
                        <LoadingBook key={index} />
                    ))}
                </Grid>
            )}
        </>
    )
})

export default Container;
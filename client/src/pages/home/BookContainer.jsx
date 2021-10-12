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
                    columnSpacing={2}
                    rowSpacing={2}
                    sx={{
                        "&:before": {
                            display: "block",
                            content: '""',
                            width: "210px",
                            m: 1,
                            order: 1
                        },
                        "&:after": {
                            display: "block",
                            content: '""',
                            width: "210px",
                            m: 1
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
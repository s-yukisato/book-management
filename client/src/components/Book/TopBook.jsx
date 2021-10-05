import { useState, useEffect } from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

import MenuWrapper from '../MenuWrapper';
import BookComponent from './BookComponent';

import { Search, SearchIconWrapper, StyledInputBase } from '../UI/SearchBar'

import { Title, Author, Isbn } from '../FormParts/Search';


const TopBook = () => {
    const [books, setBooks] = useState([]);
    const [maxCount, setMaxCount] = useState();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        title: "",
        author: "",
        isbn: "",
    });

    const [currentPage, setCurrentPage] = useState(1);

    const resetValues = () => {
        setValues({ title: "", author: "", isbn: "" });
    }

    const url = "http://localhost:3001/api/data"

    const handleClick = async () => {
        setLoading(true);
        const anchor = document.querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
        const { data } = await axios.post(url, { values, currentPage });
        setBooks(data.items);
        setMaxCount(data.maxCount);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const { data } = await axios.post(url, { values, currentPage });
            setBooks(data.items);
            setMaxCount(data.maxCount);
            setLoading(false);
        }
        fetchData();
    }, [currentPage]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            console.log('Fetching data')
            const { data } = await axios.get(url);
            setBooks(data.items);
            setMaxCount(data.maxCount);
            setLoading(false);
        }

        fetchData();
    }, [])


    const SearchForm = (
        <>
            <Box
                sx={{
                    my: 2, pl: 3,
                    borderRight: 1, borderColor: 'divider',
                    position: "fixed", top: 70, left: 5, right: 5,
                    width: "200px", minHeight: "100vh"
                }}
            >
                <Typography variant="h6">検索結果 {maxCount}件</Typography>
                <Box my={2}><Title values={values} setValues={setValues} /></Box>
                <Box my={2}><Author values={values} setValues={setValues} /></Box>
                <Box my={2}><Isbn values={values} setValues={setValues} /></Box>
                <Box my={2} sx={{ textAlign: "end" }}><Button onClick={resetValues}>リセット</Button></Box>
                <Box my={2} sx={{ textAlign: "center" }}>
                    <Button onClick={handleClick} variant="outlined" startIcon={<SearchIcon />}>
                        検索！
                    </Button>
                </Box>
            </Box>
        </>
    )

    const MobileSearch = (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={values.title}
                />
            </Search>
        </>
    )


    return (
        <>
            <MenuWrapper
                menu={SearchForm}
                mobileMenu={MobileSearch}
                contents={<BookComponent
                    books={books}
                    loading={loading}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    maxPage={Math.min(100, Math.floor(parseInt(maxCount)/30))} />} />
        </>
    )
}

export default TopBook;
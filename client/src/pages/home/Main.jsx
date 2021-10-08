import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';

import MenuWrapper from '../../components/container/MenuWrapper';
import BookContainer from './BookContainer';

import { Search, SearchIconWrapper, StyledInputBase } from '../../components/UI/SearchBar'

import { Title, Author, Isbn } from '../../components/FormParts/Search';

import Copyright from '../../components/block/Copyright';

const fetchUrl = `${API_URI}/api/data`;


const initalValue = {
    title: "",
    author: "",
    isbn: "",
}

const TopBook = () => {
    const [books, setBooks] = useState([]);
    const [maxCount, setMaxCount] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            console.log('Fetching data')
            const { data } = await axios.get(fetchUrl);
            setBooks(data.items);
            setMaxCount(data.maxCount);
            setLoading(false);
        }

        fetchData();
    }, [])

    const [values, setValues] = useState(initalValue);

    const [currentPage, setCurrentPage] = useState(1);

    const resetValues = () => setValues(initalValue);

    const backToTop = () => {
        const anchor = document.querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }

    const handleClickSearchButton = async () => {
        backToTop();
        setLoading(true);

        const { data } = await axios.post(fetchUrl, { values, currentPage });
        setBooks(data.items);
        setMaxCount(data.maxCount);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const { data } = await axios.post(fetchUrl, { values, currentPage });
            setBooks(data.items);
            setMaxCount(data.maxCount);
            setLoading(false);
        }
        fetchData();
    }, [currentPage]);


    const SearchForm = (
        <>
            <Box
                sx={{
                    my: 2, px: 2,
                    borderRight: 1, borderColor: 'divider',
                    position: "fixed", top: 70, left: 5,
                    width: "200px", minHeight: "70vh"
                }}
            >
                <Typography variant="h6" my={2}>ヒット {maxCount}件</Typography>
                <Box my={2}><Title values={values} setValues={setValues} /></Box>
                <Box my={2}><Author values={values} setValues={setValues} /></Box>
                <Box my={2}><Isbn values={values} setValues={setValues} /></Box>
                <Box my={2} sx={{ textAlign: "end" }}><Button onClick={resetValues}>リセット</Button></Box>
                <Box my={2} sx={{ textAlign: "center" }}>
                    <Button onClick={handleClickSearchButton} variant="outlined" startIcon={<SearchIcon />}>
                        検索！
                    </Button>
                </Box>
            </Box>
        </>
    )


    const MobileSearch = (
        <>
            <Search>
                <SearchIconWrapper onClick={handleClickSearchButton} sx={{ cursor: "pointer" }}>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                >
                    <Title values={values} setValues={setValues} />
                </StyledInputBase>
            </Search>
        </>
    );


    return (
        <>
            <MenuWrapper
                menu={SearchForm}
                mobileMenu={MobileSearch}
                contents={<BookContainer
                    books={books}
                    loading={loading}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    maxPage={Math.min(100, Math.floor(parseInt(maxCount) / 30))} />} />
            <Copyright sx={{ p: 2, bgcolor: '#E3CDC1' }} />
        </>
    )
}

export default TopBook;
import { useState, useEffect } from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

import MenuWrapper from '../MenuWrapper';
import BookComponent from './BookComponent';
import Search from '../Search';

import { Title, Author, Isbn } from '../FormParts/Search';


const TopBook = () => {
    const [books, setBooks] = useState([]);

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
        const params = `&title=${values.title}&author=${values.author}&isbn=${values.isbn}`;
        const anchor = document.querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
        // const { data } = await axios.post(url, params);
        // setBooks(data);
        console.log(params);

    }

    useEffect(() => {
        const params = `&title=${values.title}&author=${values.author}&isbn=${values.isbn}&page=${currentPage}`;
        // const fetchData = async () => {
        //     const { data } = await axios.post(url, params);
        //     setBooks(data);
        // }
        // fetchData();
        console.log(params)
    }, [currentPage]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(url);
            setBooks(data);
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
                <Typography variant="h6">検索バー</Typography>
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


    return (
        <MenuWrapper
            menu={SearchForm}
            mobileMenu={<Search />}
            contents={<BookComponent books={books} currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
    )
}

export default TopBook
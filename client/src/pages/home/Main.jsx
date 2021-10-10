import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';

import MenuWrapper from '../../components/container/MenuWrapper';
import BookContainer from './BookContainer';

import { Title, Author, Isbn } from '../../components/FormParts/Search';
import Search from '../../components/block/Search';
import Copyright from '../../components/block/Copyright';


const fetchUrl = `${API_URI}/api/data`;

const initalValue = {
    title: "",
    author: "",
    isbn: "",
}

const TopBook = () => {
    const [books, setBooks] = useState([]);

    const [loading, setLoading] = useState(false);
    // 検索する入力データ
    const [values, setValues] = useState(initalValue);
    // 取得したデータの数 ページ数を計算するために使用
    const [maxCount, setMaxCount] = useState();
    // ページネーションの現在の位置
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const { data } = await axios.get(fetchUrl);
            setBooks(data.items);
            setMaxCount(data.maxCount);
            setLoading(false);
        }

        fetchData();
    }, [])

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
        setMaxCount(0);
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
            <Grid container justifyContent="center">
                <Grid item flex={3}>
                    <Search values={values} setValues={setValues} />
                </Grid>
                <Grid item flex={1}>
                    <Button onClick={handleClickSearchButton} sx={{ color: "white" }}>検索</Button>
                </Grid>
            </Grid>
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
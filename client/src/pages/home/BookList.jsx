import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../config";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ReactComponent as AuthenticationLogo } from '../../assets/undraw_authentication_fsn5.svg';

import {
    Memo,
    Status,
    RatingPart as Rating,
    Page,
    PagesOfBook
} from '../../components/FormParts/Record';
import Dialog from '../../components/block/Dialog';
import Snackbar from '../../components/block/Snackbar';

import Book from "./Book";

import { useAuthContext } from '../../context/AuthContext';
import { useFetchRecordContext } from '../../context/FetchContext';
import { useRedirect } from '../../hooks/useRedirect';


const initialState = {
    memo: '',
    status: 'reading',
    rating: 3,
    page: '0',
    book: {
        isbn: "",
        title: "",
        image: "",
        pages: 300,
    }
}

const initialBookInfo = {
    title: "",
    author: "",
    publisher: "",
    image: "",
    price: "",
    salesDate: "",
}

const BookList = ({ books }) => {
    // ログインしていない場合の処理用
    const { user } = useAuthContext();
    const { toSignInPage, toSignUpPage } = useRedirect();

    // ユーザーのRecordデータ
    const { dataState } = useFetchRecordContext();

    const [isRegisteredList, setIsRegisteredList] = useState(Array(books.length).fill(false));

    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogInfo, setOpenDialogInfo] = useState(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [error, setError] = useState(null);

    const [targetIndex, setTargetIndex] = useState(null);
    const [actionType, setActionType] = useState(null);

    // Recordに登録するデータ内容
    const [values, setValues] = useState(initialState);

    const [bookInfo, setBookInfo] = useState(initialBookInfo);

    useEffect(() => {
        if (dataState.isLoading) return;
        const records = dataState.data;
        // 登録済みの書籍をRecordから探す
        const registeredList = records.length > 0 ? records.map((record) => record.book.isbn) : [];
        setIsRegisteredList(books.map(book => registeredList.includes(book.isbn)))
    }, [dataState, books])

    useEffect(() => {
        // 初回にダイアログが開かないように
        if (targetIndex == null) return;

        if (actionType === "register") {
            // 選択された書籍のデータをbooks配列から参照
            setValues({
                ...values, book: {
                    isbn: books[targetIndex].isbn,
                    title: books[targetIndex].title,
                    image: books[targetIndex].largeImageUrl,
                    pages: 300
                }
            })
            setOpenDialog(true);
        } else {
            setBookInfo({
                title: books[targetIndex].title,
                author: books[targetIndex].author,
                publisher: books[targetIndex].publisherName,
                image: books[targetIndex].largeImageUrl,
                price: books[targetIndex].itemPrice,
                salesDate: books[targetIndex].salesDate,
            })
            setOpenDialogInfo(true);
        }

    }, [targetIndex]);

    const closeDialog = () => {
        setOpenDialog(false);
        setOpenDialogInfo(false);
        setTargetIndex(null);
    };

    const register = async (e) => {
        e.preventDefault();
        // 書籍ではないものは登録できないようにする
        if (values.book.isbn === "") {
            return setError("これは登録対象外です")
        }
        setError(null);

        await axios.post(`${API_URI}/api/v1/record`, values)
            .then(res => res)
            .catch(err => setError(err.message))

        if (error) return setError("登録に失敗しました")

        if (!error) {
            setOpenDialog(false);

            setOpenSnackbar(true);

            setValues(initialState);
            // 登録済みリストに追加
            setIsRegisteredList(isRegisteredList.map((item, index) => index === targetIndex ? true : item));
            setTargetIndex(null);
        }
    }

    // ======================= 登録用 ================================
    const title = values.book.title;

    const content = (
        <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}><Memo values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Status values={values} setValues={setValues} /></Grid>
                <Grid item xs={12} sm={6}><Page values={values} setValues={setValues} /></Grid>
                <Grid item xs={12} sm={6}><PagesOfBook values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Rating values={values} setValues={setValues} /></Grid>
            </Grid>
            <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
        </Box>
    )

    const action = (
        <>
            <Button onClick={closeDialog}>閉じる</Button>
            <Button type="submit" onClick={register}>登録する</Button>
        </>
    )
    // ====================================================================

    const authAction = (
        <>
            <Button onClick={toSignUpPage}>サインアップ</Button>
            <Button onClick={toSignInPage}>サインイン</Button>
        </>
    )

    const infoContent = (
        <>
            <Box display="flex" justifyContent="center" mb={2} minWidth="370px" maxWidth="680px">
                <Box component="img"
                    src={bookInfo.image}
                    alt="No image"
                    sx={{ width: 97, height: 130, display: "block" }} />
            </Box>


            <Divider textAlign="left"><Chip color="info" label="タイトル" /></Divider>
            <Typography align="right" my={2} pr={4}>{bookInfo.title}</Typography>

            <Divider textAlign="left"><Chip color="info" label="著者" /></Divider>
            <Typography align="right" my={2} pr={4}>{bookInfo.author ? bookInfo.author : "情報がありません"}</Typography>

            <Divider textAlign="left"><Chip color="info" label="出版社" /></Divider>
            <Typography align="right" my={2} pr={4}>{bookInfo.publisher}</Typography>

            <Divider textAlign="left"><Chip color="info" label="価格" /></Divider>
            <Typography align="right" my={2} pr={4}>¥ {bookInfo.price}</Typography>

            <Divider textAlign="left"><Chip color="info" label="発売日" /></Divider>
            <Typography align="right" mt={2} pr={4}>{bookInfo.salesDate}</Typography>
        </>
    )

    return (
        <>
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
                        m: 1,
                    }
                }}
            >
                {books.map((book, index) => (
                    <Book
                        key={book.isbn}
                        isRegisteredList={isRegisteredList}
                        index={index}
                        setTargetIndex={setTargetIndex}
                        setActionType={setActionType}
                        book={book} />
                ))}
            </Grid>
            {user ? (
                <Dialog isOpen={openDialog} close={closeDialog} title={title} content={content} action={action} />
            ) : (
                <Dialog
                    isOpen={openDialog}
                    close={closeDialog}
                    title={"このサービスはログインが必要です"}
                    content={<AuthenticationLogo width="80%" height="80%" />}
                    action={authAction} />
            )}
            <Dialog isOpen={openDialogInfo} close={closeDialog} title={title} content={infoContent} />
            <Snackbar isOpen={openSnackbar} setIsOpen={setOpenSnackbar} message="本棚に登録しました" />
        </>
    )
};

export default BookList;
import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidV4 } from "uuid";
import { API_URI } from '../../config';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Stepper from './Stepper';
import { useRedirect } from '../../hooks/useRedirect';


const formatDate = (date) => {
    var y = date.getFullYear();
    var m = ('00' + (date.getMonth() + 1)).slice(-2);
    var d = ('00' + date.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
};

const date = new Date();
date.setDate(date.getDate() + 7);
const OneWeekLater = formatDate(date);


const Main = () => {
    const [values, setValues] = useState({
        goal: "",
        books: [],
        deadline: OneWeekLater
    });

    const { toProjectsPage, toProjectReplace } = useRedirect();

    const createProject = async () => {
        const id = uuidV4();

        const postData = {
            _id: id,
            title: values.goal,
            document: '',
            status: "uncompleted",
            books: values.books,
            deadline: values.deadline
        }

        await axios.post(`${API_URI}/api/v1/project`, postData)
            .then(res => toProjectReplace(id))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Button
                onClick={toProjectsPage}
                startIcon={<ArrowBackIcon />}
                sx={{ position: "fixed", top: "30px", left: "20px" }}
            >プロジェクト一覧へ戻る</Button>
            <Toolbar />
            <Box sx={{ textAlign: "center", mx: { xs: 2, sm: 14 }, my: 4 }}>
                <Stepper values={values} setValues={setValues} create={createProject} />
            </Box>
        </>
    )
};

export default Main;;
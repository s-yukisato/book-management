import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidV4 } from "uuid";
import { API_URI } from '../config';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Stepper from '../components/CreateProject/Stepper';

import { useRedirect } from '../components/common/useRedirect';


const formatDate = (date) => {
    var y = date.getFullYear();
    var m = ('00' + (date.getMonth() + 1)).slice(-2);
    var d = ('00' + date.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
};

const date = new Date();
date.setDate(date.getDate() + 7);
const OneWeekLater = formatDate(date)

const NewProject = () => {
    const [values, setValues] = useState({
        goal: "",
        books: [],
        deadline: OneWeekLater
    });

    const { toProjectsPage, toProject } = useRedirect();

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
            .then(res => toProject(id))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Button onClick={toProjectsPage} startIcon={<ArrowBackIcon />} sx={{ position: "fixed", top: "30px", left: "20px" }}>プロジェクト一覧へ戻る</Button>
            <Toolbar />
            <Box sx={{ pt: 3, width: { xs: "90vw", sm: "100%" } }}>
                <Stepper values={values} setValues={setValues} create={createProject} />
            </Box>
        </>
    )
};

export default NewProject;
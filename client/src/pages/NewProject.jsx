import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidV4 } from "uuid";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Stepper from '../components/CreateProject/Stepper';

import { formatDate } from '../hooks/useDate';


const NewProject = () => {
    const history = useHistory();

    const today = formatDate(new Date());

    const [values, setValues] = useState({
        goal: "",
        books: [],
        deadline: today
    });

    const handleClick = () => {
        history.replace("/projects")
    }

    const createProject = async () => {
        const id = uuidV4();
        const url = "http://localhost:3001/api/v1/project";
        const postData = {
            _id: id,
            title: values.goal,
            document: '',
            status: "uncompleted",
            books: values.books,
            deadline: values.deadline
        }
        await axios.post(url, postData)
            .then(response => history.replace(`/project/${id}`))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Button onClick={handleClick} startIcon={<ArrowBackIcon />} sx={{ position: "fixed", top: "30px", left: "20px" }}>プロジェクト一覧へ戻る</Button>
            <Toolbar />
            <Box sx={{ pt: 3, width: { xs: "90vw", sm: "100%" } }}>
                <Stepper values={values} setValues={setValues} create={createProject} />
            </Box>
        </>
    )
};

export default NewProject;
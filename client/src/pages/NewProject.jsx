import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidV4 } from "uuid";

import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import AppBar from '../components/AppBar';
import Stepper from '../components/Stepper';

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
            books: values.books,
            deadline: values.deadline
        }
        await axios.post(url, postData)
            .then(response => history.push(`/project/${id}`))
            .catch(err => console.log(err))
    }

    return (
        <>
            <AppBar />
            <Button onClick={handleClick} startIcon={<ArrowBackIcon />} sx={{ position: "fixed", top: "70px", left: "20px" }}>プロジェクト一覧へ戻る</Button>
            <Stepper values={values} setValues={setValues} create={createProject} />
        </>
    )
};

export default NewProject;
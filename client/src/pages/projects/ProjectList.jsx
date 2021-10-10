import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URI } from '../../config';

import Grid from '@mui/material/Grid';

import Project from './Project';
import Snackbar from '../../components/block/Snackbar';

const ProjectList = ({ projects, setProjects, filteredProjects }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState("");

    const [targetIndex, setTargetIndex] = useState(null);
    const [actionType, setActionType] = useState(null);

    const statusChange = async () => {
        let value;
        if (projects[targetIndex].status === "uncompleted") {
            value = { status: "completed" }
        } else {
            value = { status: "uncompleted" }
        }

        await axios.put(`${API_URI}/api/v1/project/status/${projects[targetIndex]._id}`, value)
            .then(res => res)
            .catch(err => console.error(err))
        setProjects(projects.map((item) => {
            if (item._id === projects[targetIndex]._id) {
                return { ...item, status: value.status }
            }
            return item
        }))

        const message = value.status === "uncompleted" ? "取り組み中" : "完了済み"
        setMessage(`「${message}」に変更しました`)
        setOpenSnackbar(true);
        setTargetIndex(null);
    }

    const deleteProject = async () => {
        await axios.delete(`${API_URI}/api/v1/project/${projects[targetIndex]._id}`)
            .then(res => res)
            .catch(err => console.error(err))

        setProjects(projects.filter(el => el._id !== projects[targetIndex]._id))
        setMessage(`削除しました`)
        setOpenSnackbar(true);
        setTargetIndex(null);
    }

    useEffect(() => {

        if (actionType === "delete") {
            deleteProject();
        } else if (actionType === "statusChange") {
            statusChange();
        }
        setActionType(null);
    }, [targetIndex]);

    return (
        <>
            <Grid
                container
                justifyContent="center"
                my={3}
                flex="auto"
                sx={{
                    "&:before": {
                        display: "block",
                        content: '""',
                        width: "200px",
                        m: 1,
                        order: 1
                    },
                    "&:after": {
                        display: "block",
                        content: '""',
                        width: "200px",
                        m: 1
                    }
                }}
            >
                {filteredProjects.map((project, index) => (
                    <Project
                        project={project}
                        index={index}
                        setTargetIndex={setTargetIndex}
                        setActionType={setActionType} />
                ))}
            </Grid>
            <Snackbar isOpen={openSnackbar} setIsOpen={setOpenSnackbar} message={message} />
        </>
    )
}

export default ProjectList
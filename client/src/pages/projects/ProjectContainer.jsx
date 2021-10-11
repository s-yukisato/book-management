import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import ProjectList from './ProjectList';
import NoProject from './NoProject';

import { useFetchProjectContext } from '../../context/FetchContext';
import { useRedirect } from '../../hooks/useRedirect';

const ProjectComponent = ({ state, setStateCount }) => {
    const { dataState } = useFetchProjectContext();

    const [projects, setProjects] = useState([]);

    const [filteredProjects, setFilteredProjects] = useState([]);

    const { toCreateProjectPage } = useRedirect();


    useEffect(() => {
        if (!dataState) return;
        setProjects(dataState.data)
    }, [dataState])


    useEffect(() => {
        if (state === "all") setFilteredProjects(projects);
        else setFilteredProjects(projects.filter((record) => record.status === state));

        const lenUncompleted = projects.filter((record) => record.status === "uncompleted").length;
        const lenCompleted = projects.filter((record) => record.status === "completed").length;
        setStateCount({ all: projects.length, uncompleted: lenUncompleted, completed: lenCompleted });
    }, [state, projects, setStateCount])


    return (
        <>
            {filteredProjects.length > 0 ? (
                <ProjectList
                    projects={projects}
                    setProjects={setProjects}
                    filteredProjects={filteredProjects}
                />
            ) : <NoProject />}
            <Box sx={{ position: "fixed", bottom: 50, right: 50, }}>
                <Fab onClick={toCreateProjectPage} size="large"
                    sx={{ color: "#FFFFFF", bgcolor: "#FF7066", ":hover": { bgcolor: "#F15B47" } }}
                >
                    <AddIcon />
                </Fab>
            </Box>
        </>
    )
}

export default ProjectComponent;
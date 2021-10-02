import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import ProjectList from './ProjectList';
import NoProject from './NoProject';

import { useFetchProjectContext } from '../../context/FetchContext';

const ProjectComponent = ({ state }) => {
    const { dataState } = useFetchProjectContext();

    const [projects, setProjects] = useState([]);

    const [filteredProjects, setFilteredProjects] = useState([]);

    const history = useHistory();

    const handleClick = () => {
        history.push("/projects/new");
    }


    const filterHandler = () => {
        switch (state) {
            case "uncompleted":
                setFilteredProjects(projects.filter((project) => project.status === "wanted"));
                break;
            case "completed":
                setFilteredProjects(projects.filter((project) => project.status === "reading"));
                break;
            default:
                setFilteredProjects(projects);
                break;
        }
    };

    useEffect(() => {
        console.log('Year!')
        setProjects(dataState.data)
        console.log(dataState.data)
    }, [dataState])

    useEffect(() => {
        console.log("filter")
        filterHandler()
        console.log(state)
    }, [projects, state])

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
                <Fab onClick={handleClick} size="large" sx={{ color: "#FFFFFF", bgcolor: "#FF7066", ":hover": { bgcolor: "#F15B47" } }}>
                    <AddIcon />
                </Fab>
            </Box>
        </>
    )
}

export default ProjectComponent;
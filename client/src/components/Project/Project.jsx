import { useHistory } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Card';

const Project = ({ project, projects, setProjects }) => {
    const history = useHistory();

    const openHandler = (id) => () => {
        history.push(`/project/${id}`);
    }

    const completedHandler = () => {
        setProjects(projects.map((item) => {
            if (item._id === project._id) {
                return { ...item, status: "completed" }
            }
            return item
        }))
    }

    const deleteHandler = () => {
        setProjects(projects.filter(el => el._id !== project._id))
    }

    return (
        <Grid item>
            <Paper sx={{
                width: 200,
                height: 200,
                p: 3,
                display: "flex",
                flexFlow: "column",
                textAlign: "start",
                justifyContent: "space-between",
                ":hover": {
                    boxShadow: 6,
                    cursor: "pointer"
                }
            }} onClick={openHandler(`${project._id}`)}>
                <Typography variant="body2">{project.title}</Typography>
                <Box>
                    <Typography variant="body2" align="right">{project.updatedAt.slice(0, 10)}</Typography>
                    <Typography variant="body2" align="right">{project.updatedAt.slice(11, 16)}</Typography>
                </Box>
            </Paper>
        </Grid>
    )

}

export default Project;
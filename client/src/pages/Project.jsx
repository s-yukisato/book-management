import { useHistory } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Card';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import AppBar from '../components/AppBar';

import { useFetchProjectContext } from '../context/FetchContext';

import { ReactComponent as EmptyLogo } from '../assets/undraw_empty_street_sfxm.svg'

const Project = () => {
    const { dataState } = useFetchProjectContext();
    const projects = dataState.data;

    const history = useHistory();

    const handleClick = () => {
        history.push("/projects/new");
    };

    const handleOpenProject = (id) => () => {
        history.push(`/project/${id}`);
    }

    return (
        <>
            <AppBar />
            <Grid container spacing={3} sx={{ justifyContent: "space-evenly", my: 3, mx: 'auto', width: "90vw" }}>
                {projects.length > 0 ? projects.map(project => (
                    <Grid item key={project._id}>
                        <Paper sx={{
                            width: 200,
                            height: 200,
                            p: 3,
                            display: "flex",
                            flexFlow: "column",
                            justifyContent: "space-between",
                            ":hover": {
                                boxShadow: 6,
                            }
                        }} onClick={handleOpenProject(`${project._id}`)}>
                            <Typography variant="body2">{project.title}</Typography>
                            <Box>
                                <Typography variant="body2" align="right">{project.updatedAt.slice(0, 10)}</Typography>
                                <Typography variant="body2" align="right">{project.updatedAt.slice(11, 16)}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                )) : (
                    <Grid item sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box>
                            <EmptyLogo width="80%" height="80%" />
                        </Box>
                        <Box sx={{ mx: 1, my: 3 }}>
                            <Typography variant="h6">プロジェクトを作成しましょう</Typography>
                        </Box>
                    </Grid>
                )}
            </Grid>

            <Box sx={{ position: "fixed", bottom: 50, right: 50, }}>
                <Fab onClick={handleClick} size="large" sx={{ color: "#FFFFFF", bgcolor: "#FF7066", ":hover": { bgcolor: "#F15B47" } }}>
                    <AddIcon />
                </Fab>
            </Box>
        </>
    )
};

export default Project;
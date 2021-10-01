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
            <Grid
                container
                textAlign="center"
                alignContent="flex-start"
                mx="auto"
                my={3}
                width="90vw"
                spacing={3}
            >
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
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ display: { xs: 'block', sm: 'flex' } }}
                    >
                        <Box>
                            <EmptyLogo width="240px" height="120px" />
                        </Box>
                        <Box sx={{ m: 3 }}>
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
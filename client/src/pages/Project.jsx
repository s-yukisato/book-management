import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import AppBar from '../components/AppBar';

import { useFetch } from '../hooks/useFetch';

import { ReactComponent as EmptyLogo } from '../assets/undraw_empty_street_sfxm.svg'

const Project = () => {
    const projects = useFetch();

    return (
        <>
            <AppBar />
            <Container>
                {projects ? projects.map(project => (
                    <Grid container>
                        <Grid item sm key={project.id}>
                            <Box>
                                <Typography variant="body2">{project.name}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                )) : (
                    <EmptyLogo width="60%" height="60%" />
                )}
            </Container>
        </>
    )
};

export default Project;
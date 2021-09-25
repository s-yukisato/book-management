import { useHistory } from 'react-router-dom'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import AppBar from '../components/AppBar';

import { useFetch } from '../hooks/useFetch';

import { ReactComponent as EmptyLogo } from '../assets/undraw_empty_street_sfxm.svg'

const Project = () => {
    const projects = useFetch();

    const history = useHistory();

    const handleClick = () => {
        history.push("/projects/new");
    }

    return (
        <>
            <AppBar />
            <Container>
                {projects !== [] ? projects.map(project => (
                    <Grid container>
                        <Grid item sm key={project._id}>
                            <Box>
                                <Typography variant="body2">{project._id}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                )) : (
                    <>
                        <EmptyLogo width="80%" height="80%" />
                        <Typography variant="h6">プロジェクトを作成しましょう</Typography>
                    </>
                )}
            </Container>
            <Box sx={{position: "absolute", bottom: 50, right: 50, }}>
                <IconButton onClick={handleClick} color="primary">
                    <AddIcon size="large"/>
                </IconButton>
            </Box>
        </>
    )
};

export default Project;
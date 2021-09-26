import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import AppBar from '../components/AppBar';

import Dialog from '../components/Dialog';

import { useFetch } from '../hooks/useFetch';
import { useAuth } from '../hooks/useAuth';

import { ReactComponent as EmptyLogo } from '../assets/undraw_empty_street_sfxm.svg'

const Project = () => {
    const url = 'https://localhost:3001/api/v1/document'
    const [projects, completed] = useFetch(url);
    console.log(projects, completed)

    const [open, setOpen] = useState(false);

    const [user, error] = useAuth();

    const history = useHistory();

    const handleClick = () => {
        console.log(user, error)
        // if (error == null) {
        //     setOpen(true);
        // } else {
        history.push("/projects/new");
        // }
    }

    return (
        <>
            <AppBar />
            <Container>
                {projects.length > 0 ? projects.map(project => (
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
            <Dialog open={open} setOpen={setOpen} />
            <Box sx={{ position: "absolute", bottom: 50, right: 50, }}>
                <IconButton onClick={handleClick} color="primary">
                    <AddIcon size="large" />
                </IconButton>
            </Box>
        </>
    )
};

export default Project;
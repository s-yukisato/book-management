import Grid from '@mui/material/Grid';

import Project from './Project';

const ProjectList = ({ projects, setProjects, filteredProjects }) => {
    return (
        <Grid
            container
            justifyContent="space-evenly"
            my={3}
            spacing={3}
            flex="auto"
        >
            {filteredProjects.map(project => (
                <Project key={project._id} project={project} projects={projects} setProjects={setProjects} />
            ))}
        </Grid>
    )
}

export default ProjectList
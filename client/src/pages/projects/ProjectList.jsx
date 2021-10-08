import Grid from '@mui/material/Grid';

import Project from './Project';

const ProjectList = ({ projects, setProjects, filteredProjects }) => {
    return (
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
                    m:1
                }
            }}
        >
            {filteredProjects.map(project => (
                <Project key={project._id} project={project} projects={projects} setProjects={setProjects} />
            ))}
        </Grid>
    )
}

export default ProjectList
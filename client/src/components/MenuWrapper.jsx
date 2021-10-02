import Grid from '@mui/material/Grid';

import AppBar from './AppBar2';


const MenuWrapper = ({ menu, mobileMenu, contents }) => {
    return (
        <>
            <AppBar menu={mobileMenu} />
            <Grid container width="100vw">
                <Grid
                    container
                    width="180px"
                    sx={{ display: { xs: 'none', sm: 'block' }, }}
                >
                    {menu}
                </Grid>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    p={2}
                    xs
                >
                    {contents}
                </Grid>
            </Grid>
        </>
    )
}

export default MenuWrapper;
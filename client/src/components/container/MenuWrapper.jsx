import Grid from '@mui/material/Grid';

import Header from './Header';


const MenuWrapper = ({ menu, mobileMenu, contents }) => {
    return (
        <>
            <Header menu={mobileMenu} />
            <Grid container>
                <Grid
                    container
                    width="200px"
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
};

export default MenuWrapper;
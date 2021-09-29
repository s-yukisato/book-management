import AppBar from '../components/AppBar';
import ContentsList from '../components/ContentsList';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

import Box from '@mui/material/Box';

const Home = () => {
    return (
        <>
            <AppBar />
            <ContentsList />
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <Pagination />
            </Box>
            <Footer />
        </>
    )
}

export default Home;
import AppBar from '../components/AppBar';
import ContentsList from '../components/ContentsList';
import Pagination from '../components/Pagination';
import Box from '@mui/material/Box';


const Home = () => {
    return (
        <>
            <AppBar />
            <ContentsList />
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination />
            </Box>
        </>
    )
}

export default Home;
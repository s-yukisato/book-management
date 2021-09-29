import Chart from '../components/Chart';
import AppBar from '../components/AppBar';
import Box from '@mui/material/Box';


const Dashboard = () => {
    return (
        <>
            <AppBar />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vh', height: '80vh'}}>
                <Chart />
            </Box>
        </>
    )
}

export default Dashboard;
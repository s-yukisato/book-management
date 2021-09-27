import Selection from '../components/Selection'
// import Chart from '../components/Chart'
import Box from '@mui/material/Box';

const Dashboard = () => {
    return (
        <>
            {/* グラフ読んだ本の冊数 月ごとに集計 */}
            {/* <Chart /> */}
            <Box sx={{width: "100%"}}>
                <Selection />
            </Box>
        </>
    )
}

export default Dashboard;
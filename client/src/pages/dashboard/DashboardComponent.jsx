// import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Chart from './Chart';

// import { useFetchRecordContext } from '../../context/FetchContext';

const DashboardComponent = ({ state }) => {
    // const { dataState } = useFetchRecordContext();

    // const [data, setData] = useState([]);

    // const [filteredData, setFilteredData] = useState([]);

    // useEffect(() => {
    //     console.log('Year!')
    //     const records = dataState.data
    //     const data = records.map(item => item.createdAt)
    //     setData(data)
    // }, [dataState])

    return (
        <Grid item>
            <Box sx={{ width: { xs: "90vw", sm: "62vw" }, minWidth: "100px", minHeight: "200px" }}>
                <Chart />
            </Box>
        </Grid>
    )
}

export default DashboardComponent;
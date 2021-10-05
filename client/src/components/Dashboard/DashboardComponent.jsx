import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Chart from './Chart';

import { useFetchRecordContext } from '../../context/FetchContext';

const DashboardComponent = ({ state }) => {
    const { dataState } = useFetchRecordContext();

    const [data, setData] = useState([]);

    // const [filteredData, setFilteredData] = useState([]);


    const filterHandler = () => {
        // switch (state) {
        //     case "week":
        //         setFilteredData(record.filter((Dashboard) => Dashboard.status === "wanted"));
        //         break;
        //     case "month":
        //         setFilteredDashboards(Dashboards.filter((Dashboard) => Dashboard.status === "reading"));
        //         break;
        //     default:
        //         setFilteredDashboards(Dashboards);
        //         break;
        // }
    };

    useEffect(() => {
        console.log('Year!')
        const records = dataState.data
        const data = records.map(item => item.createdAt)
        setData(data)
    }, [dataState])

    useEffect(() => {
        console.log("filter")
        filterHandler()
        console.log(data)
    }, [data, state])

    return (
        <Grid item>
            <Box sx={{ width: { xs: "90vw", sm: "62vw" }, minWidth: "100px", minHeight: "200px" }}>
                <Chart />
            </Box>
        </Grid>
    )
}

export default DashboardComponent;
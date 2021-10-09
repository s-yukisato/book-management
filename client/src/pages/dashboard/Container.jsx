import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Chart from './Chart';

import { useFetchRecordContext } from '../../context/FetchContext';


const formatDate = (date) => {
    var y = date.getFullYear();
    var m = ('00' + (date.getMonth() + 1)).slice(-2);
    var d = ('00' + date.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
};

const formatMonth = (date) => {
    var y = date.getFullYear();
    var m = ('00' + (date.getMonth() + 1)).slice(-2);
    return (y + '-' + m);
};

const WeekDict = {}
for (let i of [...Array(7).keys()]) {
    const date = new Date();
    date.setDate(date.getDate() - 6 + i);
    WeekDict[formatDate(date)] = []
}

const MonthDict = {}
for (let i of [...Array(30).keys()]) {
    const date = new Date();
    date.setDate(date.getDate() - 29 + i);
    MonthDict[formatDate(date)] = []
}

const YearDict = {}
for (let i of [...Array(12).keys()]) {
    const date = new Date();
    date.setMonth(i);
    YearDict[formatMonth(date)] = []
}


const DashboardComponent = ({ state }) => {
    const { dataState } = useFetchRecordContext();

    const [records, setRecords] = useState([]);

    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        function toCountDict(dict, array) {
            for (let item of array) {
                let key = item.createdAt.slice(0, 10)
                dict[key] = array.filter(x => x.createdAt.slice(0, 10) === key);
            }
            return dict;
        }
        function toCountPerMonthDict(dict, array) {
            for (let item of array) {
                let key = item.createdAt.slice(0, 7)
                dict[key] = array.filter(x => x.createdAt.slice(0, 7) === key);
            }
            return dict;
        }
        if (state === "week") setEditedData(toCountDict(WeekDict, records));
        else if (state === "month") setEditedData(toCountDict(MonthDict, records));
        else if (state === "year") setEditedData(toCountPerMonthDict(YearDict, records));
    }, [records, state])

    useEffect(() => {
        const records = dataState.data
        setRecords(records)
    }, [dataState])

    return (
        <Grid item flex="auto" width="100%">
            <Box sx={{ mx: 3, my: 4, minWidth: "100px",maxWidth: "500px", minHeight: "200px" }}>
                <Chart recordList={editedData} />
            </Box>
            <Box sx={{ mx: 3, minWidth: "100px", minHeight: "200px" }}>
                {editedData && Object.keys(editedData).map(key => (
                    editedData[key].length > 0 && (
                        <Box my={4}>
                            <Typography mb={1}>{key}</Typography>
                            <Grid container spacing={1}>
                                {editedData[key].map(item => (
                                    <Grid item key={item._id}>
                                        <Box
                                            component="img"
                                            src={item.book.image}
                                            alt="No image"
                                            sx={{
                                                width: 78,
                                                height: 112,
                                                ml: 2,
                                            }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )
                ))}
            </Box>
        </Grid>
    )
}

export default DashboardComponent;
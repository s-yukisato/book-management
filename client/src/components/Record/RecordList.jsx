import React from 'react';

import { TransitionGroup } from 'react-transition-group';

import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';

import Record from "./Record";

import { UpdateProvider } from './UpdateContext';

const RecordList = React.memo(({ records, setRecords, filteredRecords }) => {
    console.log("render list")
    return (
        <Grid
            item
            flex="auto"
            sx={{ my: 3, width: { xs: "80vw", sm: "58vw" } }}
        >
            <TransitionGroup>
                {
                    filteredRecords.map(record => (
                        <Collapse key={record._id}>
                            <UpdateProvider record={record}>
                                <Record record={record} records={records} setRecords={setRecords} />
                            </UpdateProvider>
                        </Collapse>
                    ))
                }
            </TransitionGroup>
        </Grid >
    )
})

export default RecordList;
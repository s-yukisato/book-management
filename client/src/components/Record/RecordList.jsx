import Grid from '@mui/material/Grid';

import Record from "./Record";

const RecordList = ({ records, setRecords, filteredRecords }) => {
    return (
        <Grid
            item
            spacing={2}
            sx={{ my: 3, width: { xs: "80vw", md: "60vw" } }}
        >
            {
                filteredRecords.map(record => (
                    <Record key={record._id} record={record} records={records} setRecords={setRecords} />
                ))
            }
        </Grid >
    )
}

export default RecordList;
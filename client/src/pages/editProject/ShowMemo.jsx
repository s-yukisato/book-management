import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import { useFetchRecordContext } from '../../context/FetchContext';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const ShowMemo = ({ projectData }) => {
    const { dataState } = useFetchRecordContext();

    // プロジェクトに登録された書籍のRecord
    const [records, setRecords] = useState([]);

    useEffect(() => {
        if (projectData == null) return;
        // ユーザーの登録したRecordの全て
        const allRecords = dataState.data;
        // プロジェクトに登録された書籍のRecordを本棚から探す
        const selectedBook = allRecords.filter(record => projectData.books.includes(record.book.title));
        setRecords(selectedBook)

    }, [dataState, projectData]);

    // 選択中のタブのインデックス
    const [currentTarget, setCurrentTarget] = useState(0);

    const handleChange = (_, value) => setCurrentTarget(value);


    return (
        <Grid item direction="column" p={2} minWidth={210} sx={{ position: "sticky", top: "70px" }}>
            <Typography variant="h6" sx={{ maxHeight: 40, overflow: 'hidden' }}>{projectData && projectData.title}</Typography>
            <Box sx={{ my: 2, maxWidth: "33vw", bgcolor: '#fafafa', minHeight: "60vh" }}>
                <Tabs
                    value={currentTarget}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    {records.map((item, index) => (
                        <Tab
                            label={<img width="30px" height="48px" src={item.book.image} alt={item.book.title} />}
                            {...a11yProps(index)} />
                    ))}
                </Tabs>
                {records.map((item, index) => (
                    <TabPanel value={currentTarget} index={index}>
                        <Typography variant="body2">あなたのメモ</Typography>
                        <Box sx={{ borderRadius: 4, boxShadow: 2, p: 2, maxHeight: "50vh", overflowY: "scroll", overflowWrap: "break-word" }}>
                            {item.memo ? item.memo : "メモがありません"}
                        </Box>
                    </TabPanel>
                ))}
            </Box>
        </Grid>
    )
};

export default ShowMemo;
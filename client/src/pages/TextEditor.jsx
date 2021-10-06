import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';

import axios from 'axios';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import SaveIcon from '@mui/icons-material/Save';

import AppBar from '../components/AppBar2';

import { useFetchRecordContext } from '../context/FetchContext';

import { API_URI } from '../config'
import { useRedirect } from '../components/common/useRedirect';


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


const TOOLBAR_OPTIONS = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
]

const TextEditor = () => {
    const { id: projectId } = useParams();

    const { toProjectsPage } = useRedirect();

    const [projectData, setProjectData] = useState({});
    const [load, setLoad] = useState(false);

    const { dataState } = useFetchRecordContext();
    const [records, setRecords] = useState([]);

    useEffect(() => {
        if (!load) return;
        console.log(projectData)
        const allRecords = dataState.data;
        const selectedBook = allRecords.filter(record => projectData.books.includes(record.book.title));
        setRecords(selectedBook)
        console.log(selectedBook)
    }, [dataState, load]);

    const [currentTarget, setCurrentTarget] = useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setCurrentTarget(newValue);
    };


    const [result, setReuslt] = useState();
    const [prevContent, setPrevContent] = useState();

    const [quill, setQuill] = useState();

    useEffect(() => {
        if (quill == null) return

        const loadproject = async () => {
            await axios.get(`${API_URI}/api/v1/project/${projectId}`)
                .then(res => {
                    setProjectData(res.data)
                    quill.setContents(res.data.document)
                    quill.enable()
                    setLoad(true);
                })
                .catch(err => toProjectsPage())
        }
        loadproject();

    }, [quill, projectId])

    const handleSave = async () => {
        if (quill == null) return
        const contents = quill.getContents();
        const contentBody = contents.ops[0].insert


        if (prevContent !== contentBody) {
            setReuslt("");
            await axios
                .put(`${API_URI}/api/v1/project/${projectId}`, contents)
                .then((res) => setReuslt("保存しました"))
                .catch((err) => setReuslt("エラーが発生しました"));

            setPrevContent(contentBody);
        } else {
            setReuslt("保存しました");
        }
    }


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q = new Quill(editor,
            {
                theme: "snow",
                modules: {
                    toolbar: TOOLBAR_OPTIONS
                }
            })
        q.disable()
        q.setText('Loading...')
        setQuill(q)
    }, [])

    const menu = (
        <>
            <Box display="flex">
                <Typography variant="h6">{projectData.title}</Typography>
            </Box>
        </>
    )

    return (
        <>
            <AppBar menu={menu} />
            <Grid container width="96vw">
                <Grid item flex={2}>
                    <div className="container" ref={wrapperRef}></div>
                </Grid>
                <Grid item flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Grid item direction="column" p={2} minWidth={210}>
                        <Typography variant="h6" sx={{ maxHeight: 40, overflow: 'hidden' }}>{projectData.title}</Typography>
                        <Box sx={{ my: 2, maxWidth: "33vw", bgcolor: '#fafafa', minHeight: "60vh" }}>
                            <Tabs
                                value={currentTarget}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile
                                aria-label="scrollable force tabs example"
                            >
                                {records.map((item, index) => <Tab label={<img width="30px" height="48px" src={item.book.image} alt={item.book.title} />} {...a11yProps(index)} />)}
                            </Tabs>
                            {records.map((item, index) => (
                                <TabPanel value={currentTarget} index={index}>
                                    <Typography variant="body2">あなたのメモ</Typography>
                                    <Box sx={{ borderRadius: 4, boxShadow: 2, p: 2, maxHeight: "50vh" }}>
                                        {item.memo ? item.memo : "メモがありません"}
                                    </Box>
                                </TabPanel>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                <Typography
                    variant="body2"
                    sx={{ position: "fixed", bottom: "70px", right: "30px" }}
                >{result}</Typography>
                <Button
                    onClick={handleSave}
                    variant="contained"
                    startIcon={<SaveIcon />}
                    sx={{ position: "fixed", bottom: "30px", right: "30px" }}
                >保存</Button>
            </Grid>
        </>
    )
}

export default TextEditor;
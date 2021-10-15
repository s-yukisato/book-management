import { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import SaveIcon from '@mui/icons-material/Save';

import Header from '../../components/container/Header';
import TextEditor from './TextEditor';
import ShowMemo from './ShowMemo';


const Main = () => {
    const [result, setResult] = useState();
    const [isSave, setIsSave] = useState(false);

    const handleClick = () => setIsSave(true);

    const [projectData, setProjectData] = useState(null);

    const menu = projectData && projectData.title;

    return (
        <>
            <Header menu={menu} />
            <Grid container>
                <Grid item flex={2} ml={2} sx={{ width: { xs: "100%", sm: "66%" } }}>
                    <TextEditor isSave={isSave} setIsSave={setIsSave} setProjectData={setProjectData} setResult={setResult} />
                </Grid>
                <Grid item flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <ShowMemo projectData={projectData} />
                </Grid>
                <Typography
                    variant="body2"
                    sx={{ position: "fixed", bottom: "70px", right: "30px" }}
                >{result}</Typography>
                <Button
                    onClick={handleClick}
                    variant="contained"
                    startIcon={<SaveIcon />}
                    sx={{ position: "fixed", bottom: "30px", right: "30px" }}
                >保存</Button>
            </Grid>
        </>
    )
};

export default Main;
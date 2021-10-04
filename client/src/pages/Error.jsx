import { useHistory } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ReactComponent as NotFoundLogo } from '../assets/undraw_page_not_found_su7k.svg';

const Error = () => {
    const history = useHistory();

    const handleClick = () => {
        history.replace("/")
    }
    return (
        <>
            <Button onClick={handleClick} startIcon={<ArrowBackIcon />} sx={{ position: "fixed", top: "30px", left: "20px" }}>ホームページへ</Button>
            <Box textAlign="center">
                <NotFoundLogo width="80%" height="80%" />
                <Typography variant="inherit" my={3}>ページが見つかりません</Typography>
            </Box>
        </>
    )
}

export default Error;
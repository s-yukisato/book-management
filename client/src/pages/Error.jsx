import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ReactComponent as NotFoundLogo } from '../assets/undraw_page_not_found_su7k.svg';

import { useRedirect } from '../hooks/useRedirect';


const Error = () => {
    const { toHomePage } = useRedirect();

    return (
        <>
            <Button onClick={toHomePage} startIcon={<ArrowBackIcon />} sx={{ position: "fixed", top: "30px", left: "20px" }}>ホームページへ</Button>
            <Box textAlign="center">
                <NotFoundLogo width="80%" height="80%" />
                <Typography variant="inherit" my={3}>ページが見つかりません</Typography>
            </Box>
        </>
    )
}

export default Error;
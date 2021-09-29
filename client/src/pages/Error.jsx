import Typography from '@mui/material/Typography';

import { ReactComponent as NotFoundLogo } from '../assets/undraw_page_not_found_su7k.svg';

const Error = () => {
    return (
        <>
            <NotFoundLogo width="80%" height="80%"/>
            <Typography variant="inherit">ページが見つかりません</Typography>
        </>
    )
}

export default Error;
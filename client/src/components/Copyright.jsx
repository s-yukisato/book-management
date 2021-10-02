import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/s-yukisato/book-management">
                teelog
            </Link>{' '}
            {2021}
            {'.'}
        </Typography>
    );
}

export default Copyright;
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const BookCard = styled(Card)({
    width: 210,
    height: 280,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ":hover": {
        boxShadow: 6,
    },
})
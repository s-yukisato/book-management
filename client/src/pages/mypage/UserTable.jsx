import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Typography } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#A0937D",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
        backgroundColor: "rgba(249, 243, 223, 0.6)",
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
});


function createData(id, attributes, action) {
    return { id, attributes, action };
}

const header = [
    "属性",
    "登録情報",
    "ボタン"
]

const rows = [
    createData('name', 'ユーザー名', '変更'),
    createData('email', 'メールアドレス', '変更'),
    createData('password', 'パスワード', '変更'),
];


export default function Tables({ user, handleClick }) {
    return (
        <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center', width: "auto" }}>
            <Table sx={{ width: { xs: "90vw", sm: '80vw' } }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {header.map(item => <StyledTableCell>{item}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.attributes}>
                            <StyledTableCell>
                                {row.attributes}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {user && user[row.id]}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Button
                                    onClick={handleClick(row.id)}
                                    color="inherit"
                                    sx={{
                                        boxShadow: "inset -2px 2px 2px rgb(249, 243, 223)",
                                        ":hover": {
                                            background: "linear-gradient(to top, #fdfbfb 0%, #F3F0D7 100%)"
                                        }
                                    }}>
                                    <Typography>{row.action}</Typography>
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
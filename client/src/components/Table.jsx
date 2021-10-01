import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';

import { useAuthContext } from '../context/AuthContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id, attributes, action) {
    return { id, attributes, action };
}

const rows = [
    createData('name', 'ユーザー名', '編集する'),
    createData('email', 'メールアドレス', '編集する'),
    createData('password', 'パスワード', '編集する'),
];


export default function CustomizedTables() {
    const { user } = useAuthContext();

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleClick = (prop) => (e) => {
        console.log(prop)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: '80vw' }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>属性</StyledTableCell>
                        <StyledTableCell>登録情報</StyledTableCell>
                        <StyledTableCell>編集ボタン</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={row.attributes}>
                            <StyledTableCell>
                                {row.attributes}
                            </StyledTableCell>
                            <StyledTableCell align="left">{user[row.id]}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button variant="outlined" color="inherit" onClick={handleClick(row.attributes)} startIcon={<EditIcon />}>
                                    {row.action}
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
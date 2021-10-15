import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Selection from './Selection';

import { ReactComponent as GoalLogo } from '../../assets/undraw_stepping_up_g6oo.svg';
import { ReactComponent as ChooseLogo } from '../../assets/undraw_Choose_re_7d5a.svg';
import { ReactComponent as TimeLogo } from '../../assets/undraw_time_management_30iu.svg';


const steps = ['目標設定', '書籍選択', '期日設定', '最終確認'];

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

function createData(id, attributes) {
    return { id, attributes };
}

const rows = [
    createData('goal', '目標'),
    createData('books', '書籍'),
    createData('deadline', '期日'),
];


export default function HorizontalLinearStepper({ values, setValues, create }) {
    const [activeStep, setActiveStep] = useState(0);
    const [error, setError] = useState(null);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if (values.goal) setError(null)
    };

    const handleNext = () => {
        if (!values.goal) return setError('この項目は必須です')
        setError(null)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length - 1) {
            create();
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <>
            <Stepper activeStep={activeStep}>
                {steps.map(label => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {(
                <>
                    {activeStep === 0 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <GoalLogo width={200} height={200} />
                            </Box>
                            <TextField
                                variant="standard"
                                id="goal"
                                required
                                label="目標"
                                value={values.goal}
                                onChange={handleChange('goal')}
                                inputProps={{ minLength: 1 }}
                                error={error}
                                autoFocus
                                sx={{ minWidth: 300, maxWidth: 680 }}
                            />
                            <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
                        </Box>
                    )}
                    {activeStep === 1 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', my: 2 }} >
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <ChooseLogo width={200} height={200} />
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Selection values={values} setValues={setValues} />
                            </Box>
                        </Box>
                    )}
                    {activeStep === 2 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', my: 3 }} >
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <TimeLogo width={200} height={200} />
                            </Box>
                            <TextField
                                variant="standard"
                                required
                                id="deadline"
                                label="期日"
                                type="date"
                                value={values.deadline}
                                onChange={handleChange('deadline')}
                                autoFocus
                                sx={{ minWidth: 300, maxWidth: 680 }}
                            />
                        </Box>
                    )}
                    {activeStep === steps.length - 1 && (
                        <Box my={3}>
                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>属性</StyledTableCell>
                                            <StyledTableCell>登録情報</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <StyledTableRow key={row.attributes}>
                                                <StyledTableCell>
                                                    {row.attributes}
                                                </StyledTableCell>
                                                <StyledTableCell align="left">
                                                    {row.id === "books" ? (
                                                        <ul>
                                                            {values[row.id].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    ) : values[row.id]}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 16, display: "flex" }}
                        >
                            戻る
                        </Button>

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? '作成する' : '次へ'}
                        </Button>
                    </Box>
                </>
            )}
        </>
    );
}
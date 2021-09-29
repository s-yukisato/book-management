import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Selection from './Selection';

import { ReactComponent as GoalLogo } from '../assets/undraw_stepping_up_g6oo.svg';
import { ReactComponent as ChooseLogo } from '../assets/undraw_Choose_re_7d5a.svg';
import { ReactComponent as TimeLogo } from '../assets/undraw_time_management_30iu.svg';

const steps = ['目標設定', '書籍選択', '期日設定', '最終確認'];


export default function HorizontalLinearStepper({ values, setValues, create }) {
    const [activeStep, setActiveStep] = useState(0);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values)
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length - 1) {
            create();
        }
        console.log(values)
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
                                autoFocus
                            />
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
                            />
                        </Box>
                    )}
                    {activeStep === steps.length - 1 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Grid item sm={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>プロジェクト名</Typography>
                                    <Typography>{values.goal}</Typography>
                                </Grid>
                                <Grid item sm={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>書籍</Typography>
                                    <Typography>{values.items}</Typography>
                                </Grid>
                                <Grid item sm={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>期日</Typography>
                                    <Typography>{values.deadline}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            戻る
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? '作成する' : '次へ'}
                        </Button>
                    </Box>
                </>
            )}
        </>
    );
}
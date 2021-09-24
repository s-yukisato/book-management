import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ReactComponent as GoalLogo } from '../assets/undraw_stepping_up_g6oo.svg';
import { ReactComponent as ThinkingLogo } from '../assets/undraw_Organizing_projects_0p9a.svg';
import { ReactComponent as TimeLogo } from '../assets/undraw_time_management_30iu.svg';

const steps = ['目標設定', 'アイテム選択', '予定日設定'];
const today = new Date().format('YYYY-MM-DD')

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box sx={{ width: '100%' }}>
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
            {activeStep === steps.length ? (
                <>
                    <Redirect to="/project/new" />
                </>
            ) : (
                <>
                    {activeStep === 0 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }} >
                            <GoalLogo width={200} height={200} />
                            <TextField
                                variant="standard"
                                autoComplete="fname"
                                name="目標"
                                required
                                fullWidth
                                id="goal"
                                label="目標"
                                autoFocus
                            />
                        </Box>
                    )}
                    {activeStep === 1 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }} >
                            <ThinkingLogo width={200} height={200} />
                            <TextField
                                variant="standard"
                                autoComplete="fname"
                                name="アイテム"
                                required
                                fullWidth
                                id="item"
                                label="アイテム"
                                autoFocus
                            />
                        </Box>
                    )}
                    {activeStep === 2 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }} >
                            <TimeLogo width={200} height={200} />
                            <TextField
                                variant="standard"
                                autoComplete="fname"
                                name="期日"
                                required
                                fullWidth
                                id="deadline"
                                label="期日"
                                type="date"
                                defaultValue={today}
                                autoFocus
                            />
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
        </Box>
    );
}
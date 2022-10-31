import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Request Creation",
    description:"11/01/2022"
  },
  {
    label: "BU Head Approval",
    description:"12/01/2022"
  },
  {
    label: "TAG Review",
    description:"12/01/2022"
  },
  {
    label: "Assign TAG Member",
    description:"13/01/2022"
  },  
  {
    label: "Request Closed",
    description:"12/02/2022"
  }
];

export default function RecruitmentTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const status = true;

  // useEffect = () => {
  //   if (status == true) {
  //     handleNext();
  //   }
  // };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>{step.description}</StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}
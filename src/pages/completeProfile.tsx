import { Box,  Grid, Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import ProductBox from "../components/addProject/productBox";
import CustomButton from "../components/addProject/button";
import CustomText from "../components/addProject/customText";
import Future from "../components/Future/future";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {FiUser } from "react-icons/fi";
import SalesTargetInput from "../components/addProject/salesTargetInput";

function CompleteProfile() {
  const { nextStep, reset, activeStep } = useSteps({
    initialStep: 1,
  });

  const steps = [
    { label: "Complete profile", icon: FiUser },
    { label: "Add Project", icon: FiUser },
    { label: "Set Sales Target", icon: FiUser },
  ];

  console.log(activeStep);
  return (
    <>
      <Navbar />
      <Flex
        sx={{
          marginTop: "40px",
        }}
        justifyContent="space-around"
      >
        <Box width="10%">
          {/* <StepsTimeline/> */}
          <Steps size="sm" orientation="vertical" activeStep={activeStep}>
            {steps.map(({ label }, index) => (
              <Step width="100%" label={label} key={label}></Step>
            ))}
          </Steps>
        </Box>
        {/* Complete Profile Screen*/}
        <Box
          sx={{
            width: "60%",
            py: "60px",
            backgroundColor: "white",
          }}
        >
          {activeStep === 1 ? (
            <CustomText
              clr="black"
              headText=" Add New Project to Sell"
              subText="Based on your location, you are eligible to sell these projcts"
            />
          ) : activeStep === 2 ? (
            <CustomText
              clr="black"
              headText=" Now, let’s set your target"
              subText="We ask all realtors to hold themselves accountable when it comes to hitting their sales target. Because our marketplace rewards results and not activity, we seek to help you meet your monthly targets."
            />
          ) : (
            <CustomText
              clr="green"
              headText="Congratulations"
              subText="Your Dashboard has been Launched."
            />
          )}

          {activeStep === 1 ? (
            <Grid
              sx={{
                width: "60%",
                margin: "auto",
                backgroundColor: "white",
                marginTop: "80px",
                marginBottom: "80px",
              }}
              gap={5}
              gridTemplateColumns="30% 30% 30%"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <ProductBox commission="4% commission" />
              <ProductBox commission="3% commission" />
              <ProductBox commission="$12,000 commission" />
            </Grid>
          ) : activeStep === 2 ? (
            <SalesTargetInput />
          ) : null}

          {activeStep === 1 ? (
            <>
              <CustomButton
                onClick={nextStep}
                color="white"
                text="Add Now"
                backColor="#CFCFCF"
              />
              <CustomButton
                onClick={nextStep}
                color="black"
                text="I,ll add it later"
                backColor="white"
              />
            </>
          ) : activeStep === 2 ? (
            <CustomButton
              onClick={nextStep}
              color="white"
              text="Launch my Dashboard"
              backColor="#3f8cff"
            />
          ) : (
            <CustomButton
              onClick={reset}
              color="white"
              text="RESET"
              backColor="#3f8cff"
            />
          )}
        </Box>

        {/* futureBox */}

    {  activeStep === 1 ? 
    <Future mainText="Based on the location, number of sales and experiance, we have decided that you are eligibile to sell these new projects listed on the left."
        subText="Want to sell something else?"
        anchor="tell us why"
        support =""
        />
    :
    <Future mainText="We don’t judge you based on your answers, we judge you based on your numbers. We use your answers to help you meet your monthly target."
    subText="You can always change your answers later in your"
    anchor="settings"
    support="We have support and resources for you."
    
    />
    }
      </Flex>
    </>
  );
}

export default CompleteProfile;

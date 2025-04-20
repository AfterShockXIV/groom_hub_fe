import React, { useState } from "react";
import Layout from "../components/Layout"; // นำเข้า Layout
import { useNavigate } from "react-router-dom";
import RegisStep1 from "../components/Register/StepOne"; // นำเข้า regisStep1
import RegisStep2 from "../components/Register/StepTwo"; // นำเข้า regisStep2
const RegisterPage = () => {
  const [nextStep, setNextStep] = useState("step1");
  function checkemitData(step , data) {
    console.log("emitData", step , data);
    // setNextStep = data;
    setNextStep(step);
  }
  return (
    <Layout showFooter={true}>
      {nextStep === "step1" && (
        <RegisStep1 emitData={checkemitData}></RegisStep1>
      )}

      {nextStep === "step2" && (
        <RegisStep2 emitData={checkemitData}></RegisStep2>
      )}

    
    </Layout>
  );
};

export default RegisterPage;

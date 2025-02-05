import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

const App = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#e0e0e0]">
            {step === 1 && <StepOne nextStep={nextStep} formData={formData} setFormData={setFormData} />}
            {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />}
            {step === 3 && <StepThree prevStep={prevStep} formData={formData} />}
        </div>
    );
};

export default App;
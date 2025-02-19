import React from "react";

const ProgressBar = ({ step }) => {
    const progress = (step / 3) * 100;

    return (
        <div className="h-[10px] bg-gray-100 rounded-[10px] mb-[20px]  overflow-hidden relative shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px-10px_#ffffff] ">
          <div
            className="h-[100%] w-[0] bg-[#6c63ff] rounded-[10px]  duration-[width_0.3s_ease]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
    );
};

const StepThree = ({ prevStep, formData }) => {
    return (
        <div className="max-w-[500px] w-[90%] p-[20px] bg-[#e0e0e0] rounded-[20px] shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff]">
            <ProgressBar step={3} />
            <p className="text-center text-[#6c63ff] mb-[10px]">Step 3 of 3</p>
            <h2 className="text-center text-[#333] text-2xl font-semibold m-[10px_0]">Review Your Details</h2>
            <p className="m-[10px_0]"><strong>First Name:</strong> {formData.firstname}</p>
            <p className="m-[10px_0]"><strong>Last Name:</strong> {formData.lastname}</p>
            <p className="m-[10px_0]"><strong>Email:</strong> {formData.email}</p>
            <p className="m-[10px_0]"><strong>Phone Number:</strong> {formData.phonenumber}</p>
            <p className="m-[10px_0]"><strong>Shipment Type:</strong> {formData.shipmentType}</p>
            <p className="m-[10px_0]"><strong>Weight:</strong> {formData.weight} kg</p>
            <p className="m-[10px_0]"><strong>Estimated Price:</strong> ${formData.price}</p>

            <div className="mt-4 flex justify-between">
                <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded-md cursor-pointer">Back</button>
                <button onClick={() => alert("Booking Confirmed!")} className="bg-green-600 text-white p-2 rounded-md cursor-pointer">Confirm</button>
            </div>
        </div>
    );
};

export default StepThree;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    shipmentType: yup.string().required("Select a shipment type"),
    weight: yup.number().positive("Weight must be positive").required("Weight is required"),
});

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

const pricingRates = { air: 10, sea: 5, road: 3 };

const StepTwo = ({ nextStep, prevStep, formData, setFormData }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ defaultValues: formData, resolver: yupResolver(schema) });

    const [price, setPrice] = useState(0);

    const shipmentType = watch("shipmentType", formData.shipmentType || "air");
    const weight = watch("weight", formData.weight || 0);

    useEffect(() => {
        setPrice(weight * (pricingRates[shipmentType] || 0));
    }, [shipmentType, weight]);

    const onSubmit = (data) => {
        setFormData({ ...formData, ...data, price });
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-[90%] p-[20px] bg-[#e0e0e0] rounded-[20px] shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff]">
        <ProgressBar step={1} />
        <p className="text-center text-[#6c63ff] mb-[10px]">Step 2 of 3</p>
        <h2 className='text-center text-[#333] text-2xl font-semibold m-[10px_0]'>SHIPPING PRICE & TAG</h2>
            <label className="block">Shipment Type:</label>
            <select {...register("shipmentType")} className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]">
                <option value="air">Air</option>
                <option value="sea">Sea</option>
                <option value="road">Road</option>
            </select>
            <p className="text-red-500">{errors.shipmentType?.message}</p>

            
            <input type="number" {...register("weight")} placeholder="Weight" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.weight?.message}</p>

            <p className="mt-3 text-[16px] text-[#333]"><strong>Estimated Price: </strong>${price}</p>

            <div className="mt-4 flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 rounded-md cursor-pointer">Back</button>
                <button type="submit" className="bg-[#6c63ff] cursor-pointer text-white p-2 rounded-md">Next</button>
            </div>
        </form>
    );
};

export default StepTwo;

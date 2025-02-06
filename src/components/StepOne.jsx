import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    firstname: yup.string().required("FirstName is required"),
    lastname: yup.string().required("LastName is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phonenumber: yup.string().required("PhoneNumber is required"),
});

// w-full bg-gray-300 rounded-full h-2.5 mb-4
// bg-[#6c63ff] h-2.5 rounded-full transition-all duration-300style={{ width: `${progress}%` }}

const ProgressBar = ({step}) => {
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

const StepOne = ({ nextStep, formData, setFormData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: formData, resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        setFormData({ ...formData, ...data });
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-[90%] p-[20px] bg-[e0e0e0] rounded-[20px] shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff]">
            <ProgressBar step={0} />
            <p className="text-center text-[#6c63ff] ">Step 1 of 3</p>
            <h2 className="text-center text-[#333] text-2xl font-semibold m-[10px_0]">CUSTOMER INFORMATION</h2>
            <input {...register("firstname")} placeholder="First Name" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.firstname?.message}</p>

            <input {...register("lastname")} placeholder="Last Name" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.lastname?.message}</p>

            
            <input type="email" {...register("email")} placeholder="Email" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.email?.message}</p>

            
            <input {...register("phonenumber")} placeholder="Phone Number" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.phonenumber?.message}</p>


            <button type="submit" className="mt-4 w-[100%] p-[12px] bg-[#6c63ff] text-[white] border-none rounded-[10px] text-[16px] cursor-pointer shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff] hover:bg-[#5a5ae6] transition-all duration-[0.3s_ease]">Next</button>
        </form>
    );
};

export default StepOne;

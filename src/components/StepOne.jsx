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
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-[90%] p-[20px] bg-[#e0e0e0] rounded-[20px] shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff]">
            <h2 className="text-center text-[#333] text-2xl font-semibold m-[10px_0]">CUSTOMER INFORMATION</h2>
            <input {...register("firstname")} placeholder="First Name" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.firstname?.message}</p>

            <input {...register("lastname")} placeholder="Last Name" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.lastname?.message}</p>

            
            <input type="email" {...register("email")} placeholder="Email" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.email?.message}</p>

            
            <input {...register("phonenumber")} placeholder="Phone Number" className="w-[100%] p-[12px] m-[10px_0] rounded-[10px] border-none bg-[e0e0e0] shadow-[inset_5px_5px_10px_#bebebe,_inset_-5px_-5px_10px_#ffffff] text-[#333] text-[16px]" />
            <p className="text-red-500">{errors.phonenumber?.message}</p>


            <button type="submit" className="mt-4 w-[100%] p-[12px] bg-[#6c63ff] text-[white] border-none rounded-[10px] text-[16px] cursor-pointer shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff] hover:bg-[#5a5ae6]">Next</button>
        </form>
    );
};

export default StepOne;

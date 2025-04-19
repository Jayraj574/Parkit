import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from '../api-client';

export type RegisterFormData={
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    confirmpassword:string;
}

const Register =()=>{

    const{register , watch , handleSubmit, formState:{errors} }=useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register,{
        onSuccess:()=>{
            console.log("registration succesfull");
        },
        onError:(error:Error)=>{
            console.log(error);
        }
    });

    const onSubmit = handleSubmit((data)=>{
        mutation.mutate(data);
    })

    return <form className="flex flex-col gap-5 p-10" onSubmit={onSubmit}>
        <h2 className="text-4xl font-bold ">Create An Account</h2>
        <div className="flex flex-col md:flex-row gap-5">
            <label className="text-gray-700 text-3xl font-semibold">First Name
                <input className="border rounded w-full py-1 px-2 font-normal"
                {...register("firstName",{required:"This field is required"})}></input>
                {errors.firstName && (
                    <span className="text-red-500">{errors.firstName.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-3xl font-semibold">Last Name
                <input className="border rounded w-full py-1 px-2 font-normal"
                {...register("lastName",{required:"This field is required"})}></input>
                {errors.lastName && (
                    <span className="text-red-500">{errors.lastName.message}</span>
                )}
            </label>
        </div>
        <label className="text-gray-700 text-3xl font-semibold">Email
                <input className="border rounded w-full py-1 px-2 font-normal"
                {...register("email",{required:"This field is required"})}></input>
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
        </label>
        <label className="text-gray-700 text-3xl font-semibold">Password
            <input type="password" className="border rounded w-full py-1 px-2 font-normal" 
                {...register("password",
                    {required:"This field is required", 
                    minLength:{
                        value:6,
                        message:"Minimum 6 character password required"}})}>
            </input>
            {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                )}
        </label>
        <label className="text-gray-700 text-3xl font-semibold">Confirm Password
            <input type="password" className="border rounded w-full py-1 px-2 font-normal"
                {...register("confirmpassword",
                {validate:(val)=>{
                    if(!val){
                        return "This Field is required"
                    }
                    else if(watch("password")!== val){
                        return "your Passwords do not match"
                    }
                }})}>
            </input>
            {errors.confirmpassword && (
                    <span className="text-red-500">{errors.confirmpassword.message}</span>
                )}
        </label>
        <span>
            <button type="submit" className="text-3xl bg-orange-300 text-white rounded-2xl p-4 ml-4" > Create Account</button>
        </span>
        
    </form>
}

export default Register;
import {Heading} from "../components/Heading.tsx";
import {Link, useNavigate} from "react-router-dom";
import {InputField} from "../components/InputField.tsx";
import {Button} from "../components/Button.tsx";
import {Thought} from "../components/Thought.tsx";
import {SignupInputs} from "@radheyyyy/common";
import {useState} from "react";
import  axios from "axios";

export default function Signup(){
    const navigate=useNavigate();
    const [Inputs,set]=useState<SignupInputs>({
        name:"",
        email:"",
        password:""
    })
    return(
        <div className='h-screen w-full flex'>
            <div className='w-[50%] h-screen flex justify-center items-center'>
                <div className='px-10 py-4 w-[70%] '>
                    <Heading title={"Create an account"}/>
                    <div className='text-gray-500 ml-5 mb-5'>Already have an account?&nbsp;<Link className='underline'
                                                                                                 to={'/signin'}>Login</Link>
                    </div>
                    <InputField type={"text"} n={"username"} placeholder={"Enter your username"} onChange={(e: { target: { value: any; }; })=>{set({...Inputs,name:e.target.value})}}/>
                    <InputField type={"text"} n={"Email"} placeholder={"for@example.com"} onChange={(e:any)=>{set({...Inputs,email:e.target.value})}}/>
                    <InputField type={"password"} n={"Password"} placeholder={""} onChange={(e:any)=>{set({...Inputs,password:e.target.value})}}/>
                   <Button click={"Sign Up"} onclick={async ()=>{
                        const res=await axios.post("https://backend.radheydevx.workers.dev/medium/ver1/user/signup",Inputs);
                       alert(res.data);
                       if(res.data==="Sign up success" || res.data==="Please Login"){
                           navigate('/signin')
                       }
                   }}/>
                </div></div>
            <div className='flex justify-center items-center w-[50%] bg-gray-300'>
                <div className='px-12'><Thought
                    thought={"The customer service I received was exceptional. The support team went above and beyond to address my concerns."}
                    author={"Julis WinnField"} prof={"CEO, Acme Inc."}/></div>
            </div>
            </div>
    )
}
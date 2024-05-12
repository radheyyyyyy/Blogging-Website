import {useState} from "react";
import {SigninInputs} from "@radheyyyy/common";
import {Heading} from "../components/Heading.tsx";
import {Link, useNavigate} from "react-router-dom";
import {InputField} from "../components/InputField.tsx";
import {Button} from "../components/Button.tsx";
import axios from "axios";
import {Thought} from "../components/Thought.tsx";
export function Signin(){
    const navigate=useNavigate();
    const [Inputs,set]=useState<SigninInputs>({
        email:"",
        password:""
    })
            return(
            <div className='h-screen w-full flex'>
                <div className='w-[50%] h-screen flex justify-center items-center'>
                    <div className='px-10 py-4 w-[70%] '>
                        <Heading title={"Enter your credentials to access your account"}/>
                        <div className='text-gray-500 ml-5 mb-5'>Don't have an account?&nbsp;<Link className='underline'
                                                                                                     to={'/signup'}>Sign up</Link>
                        </div>
                        <InputField type={"text"} n={"Email"} placeholder={"for@example.com"} onChange={(e:any)=>{set({...Inputs,email:e.target.value})}}/>
                        <InputField type={"password"} n={"Password"} placeholder={""} onChange={(e:any)=>{set({...Inputs,password:e.target.value})}}/>
                        <Button click={"Log in"} onclick={async ()=>{
                            const res=await axios.post("https://backend.radheydevx.workers.dev/medium/ver1/user/login",Inputs);
                            localStorage.setItem("token",res.data.token);
                           if(res.data.token) navigate('/blog');
                           else alert(res.data)

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
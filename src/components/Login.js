import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("requested");

        try{
             const res=await axios.post("http://localhost:4000/api/auth/login",{
                email:email,
                password:password
             })

             console.log(res);

              if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);

        toast.success("Login successful!");
        
        navigate("/");

      } else {
        toast.error(res.data.message || "Login failed");
      }
        }

        catch(err){
           toast.error(err.response?.data?.message || "Login failed!", { position: "top-center" });
        }
    }

  return (

<div className="flex flex-col items-center justify-center h-screen">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
     
      <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
    </form>
  </div>
</div>


  )
}

export default Login;

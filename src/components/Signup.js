import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Signup() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(name,email,password);

        try{
             const response=await axios.post("http://localhost:4000/api/auth/register",{
                name:name,
                email:email,
                password:password,
                role:role
             });

             console.log(response);

                if (response.status === 200) {
        toast.success("User created successfully!", { autoClose: 2000 });
        setTimeout(() => navigate("/login"), 2000);
      }
        }

        catch(error){
            const errorMsg =
        error.response?.data?.message || "❌ Signup failed. Please try again.";
      console.error("Signup Error:", errorMsg); // Log error in console
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
        }
    }

  return (
    <div className='mt-10'>

<form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account   
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Name
                </label>
                <input placeholder="JohnDoe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </div>

               <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Email
                </label>
                <input placeholder="JohnDoe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>

              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
        
            <div>
            <label className="block text-sm font-medium text-gray-700">Sign up as</label>
            <select
              name="role"
              value={role}
              onChange={(e)=>{setRole(e.target.value)}}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
                
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Create an account
              </button>
            
          </div>
        </div>
      </form>
    
      
    </div>
  )
}

export default Signup

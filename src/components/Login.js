import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ragiBg from "../assets/ragi-bg.mp4";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success("Welcome back 🌾");
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch {
      toast.error("Login failed");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={ragiBg} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2a1e17]/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

        <div className="max-w-md w-full bg-[#3a2a22]/80 backdrop-blur-xl 
                        border border-[#5a4338] rounded-3xl p-8 shadow-2xl">

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#f5efe9]">
              Welcome Back
            </h1>
            <p className="text-sm text-[#d6c6bb] mt-2">
              Pure nutrition, honestly crafted
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#2a1e17]/80 border border-[#6b4f40]
                         text-[#f5efe9] rounded-xl px-4 py-3
                         focus:outline-none focus:ring-1 focus:ring-[#a27c63]"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#2a1e17]/80 border border-[#6b4f40]
                         text-[#f5efe9] rounded-xl px-4 py-3
                         focus:outline-none focus:ring-1 focus:ring-[#a27c63]"
              required
            />

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-xl font-semibold
                         bg-[#a27c63] text-[#2a1e17]
                         hover:bg-[#8e6952] transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-center text-[#ccb9ac] mt-6">
            Stone-ground · Sustainable · Traceable
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;

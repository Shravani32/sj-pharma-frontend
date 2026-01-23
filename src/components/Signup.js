import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", {
        name,
        email,
        password,
        role,
      });
      toast.success("Welcome to the RagiPure family 🌾");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#2a1e17] text-[#f5efe9] flex">

      {/* LEFT – BRAND STORY */}
      <div className="hidden lg:flex w-1/2 px-20 items-center">
        <div>
          <p className="tracking-[0.3em] text-[#cfae9b] text-sm uppercase">
            Join the Legacy
          </p>

          <h1 className="mt-6 text-5xl font-serif leading-tight">
            More Than Food.<br />
            <span className="italic text-[#d4a373]">It’s a Tradition.</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-300 max-w-md">
            When you sign up, you’re not just creating an account.
            You’re becoming part of a grain that fed generations.
          </p>

          <div className="mt-10 flex gap-6 text-sm tracking-widest">
            <span className="border-b border-[#a27c63] pb-1">PURE</span>
            <span className="border-b border-[#a27c63] pb-1">SLOW</span>
            <span className="border-b border-[#a27c63] pb-1">HONEST</span>
          </div>
        </div>
      </div>

      {/* RIGHT – SIGNUP PANEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 mt-20">
        <div className="w-full max-w-md bg-[#3a2a22] border border-[#5a4338]
                        rounded-[2.5rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          <h2 className="text-3xl font-serif mb-6">Create Your Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#241812] border border-[#6b4f40]
                         rounded-xl px-4 py-3 text-[#f5efe9]
                         focus:outline-none focus:ring-1 focus:ring-[#d4a373]"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#241812] border border-[#6b4f40]
                         rounded-xl px-4 py-3 text-[#f5efe9]"
              required
            />

            <input
              type="password"
              placeholder="Choose Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#241812] border border-[#6b4f40]
                         rounded-xl px-4 py-3 text-[#f5efe9]"
              required
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-[#241812] border border-[#6b4f40]
                         rounded-xl px-4 py-3 text-[#f5efe9]"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>

            <button
              type="submit"
              className="w-full mt-6 py-3 bg-[#d4a373]
                         text-[#2a1e17] font-semibold tracking-widest
                         rounded-full hover:bg-[#c8965f] transition"
            >
              JOIN RAGIPURE
            </button>
          </form>

          <p className="mt-6 text-sm text-neutral-400">
            Already part of us?{" "}
            <Link to="/login" className="text-[#d4a373] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

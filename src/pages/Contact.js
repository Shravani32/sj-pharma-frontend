import { useState } from "react";
import MapSection from "../components/MapSection";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. We’ll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-[#0b0a08] text-[#f5f3ef]">

      {/* HERO */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#d4a373]">
            Contact
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-serif">
            Let’s Start a{" "}
            <span className="italic text-[#d4a373]">Conversation</span>
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-400">
            Questions, bulk orders, partnerships or simple curiosity —
            we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="p-16 rounded-[3rem] bg-[#13110e] border border-white/10"
          >
            <h2 className="text-3xl font-serif mb-10">
              Write to Us
            </h2>

            <div className="grid gap-6">
              {[
                { name: "name", placeholder: "Your Name" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Phone (optional)" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type || "text"}
                  name={field.name}
                  value={form[field.name]}
                  onChange={onChange}
                  placeholder={field.placeholder}
                  className="bg-transparent border-b border-white/20 py-3 outline-none placeholder:text-neutral-500 focus:border-[#d4a373] transition"
                  required={field.name !== "phone"}
                />
              ))}

              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Your message"
                rows={4}
                className="bg-transparent border-b border-white/20 py-3 outline-none placeholder:text-neutral-500 focus:border-[#d4a373] transition resize-none"
                required
              />

              <button
                type="submit"
                className="mt-8 self-start px-10 py-4 rounded-full tracking-widest font-semibold bg-[#d4a373] text-black hover:bg-[#c8965f] transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>

          {/* INFO + MAP */}
          <div className="flex flex-col justify-between gap-14">

            <div className="p-14 rounded-[3rem] bg-[#13110e] border border-white/10">
              <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
                REACH US
              </h3>

              <p className="mt-6 text-neutral-400">
                info@ragipure.com
              </p>
              <p className="mt-2 text-neutral-400">
                +91 98765 43210
              </p>
            </div>

            <div className="rounded-[3rem] overflow-hidden border border-white/10 h-64">
              <MapSection />
            </div>

            {/* AUTH CTA (subtle, not salesy) */}
            <div className="flex gap-6">
              <Link
                to="/login"
                className="px-8 py-3 rounded-full border border-white/20 hover:border-[#d4a373] transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 rounded-full border border-white/20 hover:border-[#d4a373] transition"
              >
                Signup
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

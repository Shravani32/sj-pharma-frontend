import { useState } from "react";
import MapWithPlaceholder from "../components/MapSection";
import MapSection from "../components/MapSection";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We will contact you soon.\n\n" + JSON.stringify(form, null, 2));
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="py-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-gray-700">Have questions or want to place an order?</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 grid md:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="p-6 border rounded-lg grid gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="border rounded px-3 py-2" required />
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className="border rounded px-3 py-2" required />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border rounded px-3 py-2" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows={5} className="border rounded px-3 py-2" required />
            <button className="px-4 py-2 bg-[color:var(--leaf)] text-white rounded">Send</button>
          </form>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Reach Us</h3>
            <p className="text-sm text-gray-700 mt-2">Email: info@ragipure.com</p>
            <p className="text-sm text-gray-700">Phone: +91-98765 43210</p>
            <div className="h-52 mt-4 bg-gray-100 border rounded flex items-center justify-center text-gray-500 text-sm">
              Map Placeholder

              <div>
                 <MapSection/>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
              <Link to='/login'><button className="bg-blue-500 p-3 rounded-md text-center text-white font-bold " >Login</button></Link>
              
              <Link to='/signup'><button className="bg-green-500 p-3 rounded-md text-center text-white font-bold">Signup</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}

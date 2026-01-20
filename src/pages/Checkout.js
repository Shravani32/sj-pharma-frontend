import { useState } from "react";
import { api } from "../lib/api";

export default function Checkout({ cart, clearCart, onPlaced }) {
  const [addr, setAddr] = useState({ name:"", phone:"", line1:"", city:"", state:"", pincode:"" });

  async function placeOrder(){
    try {
      const items = cart.map(i => ({ productId: i._id, quantity: i.quantity }));
      const order = await api("/orders", { method:"POST", auth:true, body: { items, address: addr } });
      clearCart(); onPlaced?.(order);
    } catch (e) { alert(e.message); }
  }

  const total = cart.reduce((s,i)=>s+i.price*i.quantity,0);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-4xl px-4 grid md:grid-cols-2 gap-8">
        <div className="p-5 border rounded bg-white">
          <h2 className="font-semibold mb-3">Shipping Address</h2>
          {["name","phone","line1","city","state","pincode"].map(k=>(
            <input key={k} placeholder={k} value={addr[k]||""}
              onChange={e=>setAddr({...addr,[k]:e.target.value})}
              className="w-full mb-2 border rounded px-3 py-2" />
          ))}
        </div>
        <div className="p-5 border rounded bg-white">
          <h2 className="font-semibold mb-3">Order Summary</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {cart.map(i => <li key={i._id}>{i.quantity} × {i.name} — {i.flavor} = ₹{i.quantity*i.price}</li>)}
          </ul>
          <div className="mt-4 font-bold">Total: ₹{total}</div>
          <button onClick={placeOrder} className="mt-4 px-5 py-2 bg-green-600 text-white rounded w-full">Place Order</button>
          <p className="text-xs text-gray-500 mt-2">(* Cash/Card/UPI collection can be off-platform or integrate Razorpay later.)</p>
        </div>
      </div>
    </section>
  );
}

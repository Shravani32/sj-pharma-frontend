import { useEffect, useState } from "react";
import { api } from "../lib/api";

const statuses = ["Pending","Processing","Shipped","Delivered","Cancelled"];

export default function AdminOrders(){
  const [orders,setOrders] = useState([]);

  async function load(){ setOrders(await api("/orders/admin", { auth:true })); }
  useEffect(()=>{ load().catch(e=>alert(e.message)); },[]);

  async function updateStatus(id,status){
    try{ await api(`/orders/${id}/status`, { method:"PATCH", auth:true, body:{ status } }); load(); }
    catch(e){ alert(e.message); }
  }

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold mb-6">All Orders (Admin)</h1>
        <div className="overflow-x-auto bg-white border rounded">
          <table className="min-w-[800px] w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 border">Order</th>
                <th className="p-3 border">Customer</th>
                <th className="p-3 border">Items</th>
                <th className="p-3 border">Total</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o=>(
                <tr key={o._id}>
                  <td className="p-3 border">#{o._id.slice(-6)}<div className="text-xs text-gray-500">{new Date(o.createdAt).toLocaleString()}</div></td>
                  <td className="p-3 border">{o.customer?.name}<div className="text-xs text-gray-500">{o.customer?.email}</div></td>
                  <td className="p-3 border">{o.items.map(i=>`${i.quantity}× ${i.product?.flavor}`).join(", ")}</td>
                  <td className="p-3 border font-semibold">₹{o.totalAmount}</td>
                  <td className="p-3 border">{o.status}</td>
                  <td className="p-3 border">
                    <select defaultValue={o.status} onChange={(e)=>updateStatus(o._id, e.target.value)} className="border rounded px-2 py-1">
                      {statuses.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

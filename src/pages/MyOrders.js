import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function MyOrders(){
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    const loadOrders = () => {
      api("/orders/my", { auth:true }).then(setOrders).catch(e=>alert(e.message));
    };
    loadOrders();
    // Auto-refresh every 5 seconds to show status updates from admin
    const interval = setInterval(loadOrders, 5000);
    return () => clearInterval(interval);
  },[]);

  const getStatusColor = (status) => {
    switch(status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Processing": return "bg-blue-100 text-blue-800";
      case "Shipped": return "bg-purple-100 text-purple-800";
      case "Delivered": return "bg-green-100 text-green-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>
        {orders.length===0 ? <p className="text-gray-600">No orders yet.</p> : (
          <div className="grid gap-4">
            {orders.map(o=>(
              <div key={o._id} className="p-4 border rounded bg-white shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">Order #{o._id.slice(-6)}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(o.status)}`}>
                    {o.status}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-2">{new Date(o.createdAt).toLocaleString()}</div>
                <div className="text-sm text-gray-700 mb-3 border-t pt-2">
                  {o.items.map(i => `${i.quantity}× ${i.product?.name} (${i.product?.flavor})`).join(", ")}
                </div>
                <div className="mt-3 font-bold text-lg">₹{o.totalAmount}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

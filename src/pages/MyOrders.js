import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function MyOrders(){
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const loadOrders = async () => {
      try {
        const ordersData = await api("/orders/my", { auth: true });
        console.log("Orders data:",ordersData)
        setOrders(ordersData);
      } catch(e) {
        alert(e.message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
    // Auto-refresh orders every 5 seconds to show status updates from admin
    const interval = setInterval(loadOrders, 5000);
    return () => clearInterval(interval);
  },[navigate]);

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

  if(loading) {
    return <section className="py-10"><div className="text-center">Loading...</div></section>;
  }

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>
        {orders.length === 0 ? (
          <div className="bg-white border rounded-lg p-6 text-center text-gray-600">
            <p>No orders yet.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {orders.map(o => (
              <div key={o._id} className="p-4 border rounded bg-white shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-lg">Order #{o._id.slice(-6)}</div>
                    <div className="text-xs text-gray-500">{new Date(o.createdAt).toLocaleString()}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(o.status)}`}>
                    {o.status}
                  </div>
                </div>
                <div className="border-t pt-3 mb-3">
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-2">Items:</div>
                    {o.items.map((i, idx) => (
                      <div key={idx} className="text-gray-600">
                        {i.quantity}× {i.product?.name} ({i.product?.flavor})
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-bold text-lg">₹{o.totalAmount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

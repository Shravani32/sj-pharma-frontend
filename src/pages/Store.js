import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Store({ onAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => { api("/products").then(setProducts).catch(e=>alert(e.message)); }, []);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold mb-6">Order Ragi Malt</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p._id} className="p-5 border rounded-xl bg-white shadow-sm">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">Flavor: {p.flavor}</p>
              <p className="text-green-700 font-bold mt-1">₹{p.price}</p>
              <button
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded"
                onClick={() => onAdd({ ...p, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

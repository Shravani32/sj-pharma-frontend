import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CreateOrder() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    line1: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    // fetch available products
    axios.get("http://localhost:4000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
    
   console.log("Products:",products);
  const handleOrder = async () => {
    if (!selectedProduct) {
      toast.error("Please select a product");
      return;
    }

    const orderData = {
      items: [
        {
          productId: selectedProduct._id,
          quantity,
          unitPrice: selectedProduct.price,
        },
      ],
      totalAmount: quantity * selectedProduct.price,
      address,
    };

    try {
        const token=localStorage.getItem("token")
        console.log("token:",token);
      await axios.post("http://localhost:4000/api/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Order placed successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Place Your Order</h1>

      {/* Product Select */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Product</label>
        <select
          className="w-full border rounded p-2"
          onChange={(e) =>
            setSelectedProduct(products.find(p => p._id === e.target.value))
          }
        >
          <option value="">-- Choose Flavor --</option>
          {products.map(p => (
            <option key={p._id} value={p._id}>
              {p.name} ({p.flavor}) - ₹{p.price}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Quantity</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Address Form */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Delivery Address</h2>
        {["name", "phone", "line1", "city", "state", "pincode"].map(field => (
          <input
            key={field}
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={address[field]}
            onChange={(e) =>
              setAddress({ ...address, [field]: e.target.value })
            }
            className="w-full border rounded p-2 mb-2"
          />
        ))}
      </div>

      {/* Total */}
      {selectedProduct && (
        <p className="text-lg font-semibold mb-4">
          Total: ₹{quantity * selectedProduct.price}
        </p>
      )}

      {/* Submit Button */}
      <button
        onClick={handleOrder}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
}

export default CreateOrder;

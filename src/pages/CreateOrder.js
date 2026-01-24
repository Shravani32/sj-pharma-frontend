import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateOrder() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]); // [{productId, product, quantity}, ...]
  const [step, setStep] = useState(1); // 1: flavor/qty, 2: address/checkout
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    line1: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [savedAddress, setSavedAddress] = useState(null);
  const [useSavedAddress, setUseSavedAddress] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      toast.info("Admins can only manage orders");
      navigate("/orders", { replace: true });
      return;
    }

    // fetch available flavors (products) and load any saved address
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        // keep only first 5 flavors
        setProducts(res.data.slice(0, 5));
      })
      .catch((err) => console.error(err));

    const stored = localStorage.getItem("savedAddress");
    if (stored) {
      const parsed = JSON.parse(stored);
      setSavedAddress(parsed);
      setAddress(parsed);
      setUseSavedAddress(true);
    }
  }, [navigate]);

  const handleAddToCart = () => {
    if (!selectedProduct) {
      toast.error("Please choose a flavor");
      return;
    }
    if (quantity < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }

    // Check if product already in cart
    const existingItem = cart.find((item) => item.productId === selectedProduct._id);
    if (existingItem) {
      // Update quantity
      setCart(
        cart.map((item) =>
          item.productId === selectedProduct._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Add new item
      setCart([...cart, { productId: selectedProduct._id, product: selectedProduct, quantity }]);
    }

    toast.success("Added to cart!");
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const handleUpdateCartQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart(
      cart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleNext = () => {
    if (cart.length === 0) {
      toast.error("Please add at least one flavor to your cart");
      return;
    }
    setStep(2);
  };

  const navigate=useNavigate();

  const handleOrder = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const orderData = {
      items: cart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      address,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:4000/api/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem("savedAddress", JSON.stringify(address));
      toast.success("Order placed successfully!");
      setCart([]);
      setStep(1);
      navigate("/my-orders");
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order");
    }
  };

  const total = cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Place Your Order</h1>

      <div className="flex items-center gap-2 text-sm">
        <span
          className={`rounded-full px-3 py-1 ${
            step === 1 ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          1. Add flavors
        </span>
        <span>→</span>
        <span
          className={`rounded-full px-3 py-1 ${
            step === 2 ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          2. Checkout
        </span>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          {/* Add to Cart Section */}
          <div className="border rounded p-4 bg-gray-50">
            <h2 className="font-semibold mb-4">Select Flavor & Quantity</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Choose Flavor</label>
                <select
                  className="w-full border rounded p-2"
                  value={selectedProduct?._id || ""}
                  onChange={(e) =>
                    setSelectedProduct(
                      products.find((p) => p._id === e.target.value)
                    )
                  }
                >
                  <option value="">-- Select Flavor --</option>
                  {products.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.name} ({p.flavor}) - ₹{p.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full border rounded p-2"
                />
              </div>

              {selectedProduct && (
                <p className="text-sm text-gray-600">
                  Subtotal: ₹{quantity * selectedProduct.price}
                </p>
              )}

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Cart Items */}
          {cart.length > 0 && (
            <div className="border rounded p-4">
              <h2 className="font-semibold mb-4">Cart ({cart.length} item{cart.length !== 1 ? 's' : ''})</h2>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded"
                  >
                    <div className="flex-1">
                      <p className="font-medium">
                        {item.product.name} ({item.product.flavor})
                      </p>
                      <p className="text-sm text-gray-600">₹{item.product.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleUpdateCartQuantity(
                            item.productId,
                            Number(e.target.value)
                          )
                        }
                        className="w-16 border rounded p-1 text-center"
                      />
                      <p className="w-24 text-right font-medium">
                        ₹{item.quantity * item.product.price}
                      </p>
                      <button
                        onClick={() => handleRemoveFromCart(item.productId)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4">
                <p className="text-lg font-semibold text-right">Total: ₹{total}</p>
              </div>
            </div>
          )}

          {/* Proceed Button */}
          {cart.length > 0 && (
            <button
              onClick={handleNext}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-medium"
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          {/* Order Summary */}
          <div className="border rounded p-4 bg-gray-50">
            <h2 className="font-semibold mb-3">Order Summary</h2>
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.productId} className="flex justify-between text-sm">
                  <span>
                    {item.product.name} ({item.product.flavor}) × {item.quantity}
                  </span>
                  <span className="font-medium">₹{item.quantity * item.product.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Saved Address Option */}
          {savedAddress && (
            <label className="flex items-center gap-2 text-sm">
              <input
                aria-label="use saved address"
                type="checkbox"
                checked={useSavedAddress}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setUseSavedAddress(checked);
                  setAddress(
                    checked
                      ? savedAddress
                      : {
                          name: "",
                          phone: "",
                          line1: "",
                          city: "",
                          state: "",
                          pincode: "",
                        }
                  );
                }}
              />
              Use saved address
            </label>
          )}

          {/* Address Form */}
          <div>
            <h2 className="font-semibold mb-2">Delivery Address</h2>
            {["name", "phone", "line1", "city", "state", "pincode"].map(
              (field) => (
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
              )
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="w-1/3 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={handleOrder}
              className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 font-medium"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateOrder;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import Process from "./pages/Process";
import Benefits from "./pages/Benefits";
import Recipe from "./pages/Recipe";
import Sustainability from "./pages/Sustainability";
import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/AdminOrders";
import CreateOrder from "./pages/CreateOrder";

function App() {
  const role = localStorage.getItem("role");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/process" element={<Process />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/sustainability" element={<Sustainability />} />
        {/* <Route path="/my-orders" element={<MyOrders />} /> */}
        <Route path="/orders" element={role==="admin" ? <AdminOrders /> :<MyOrders/>} />
        <Route path="/create-order" element={<CreateOrder />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;

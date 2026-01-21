// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div className="text-2xl font-bold text-blue-600">
//             MyWebsite
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center justify-center">
//             <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
//             <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
//             <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
//             <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Signup</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 focus:outline-none"
//             >
//               ☰
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2">
//           <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
//           <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
//           <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
//           <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
//           <Link to="/signup" className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Signup</Link>
//         </div>
//       )}
//     </nav>
//   );
// }


import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const getLinks = (role, token) => {
  const baseLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/process", label: "Process" },
    { to: "/benefits", label: "Benefits" },
    { to: "/recipes", label: "Recipes" },
    { to: "/sustainability", label: "Sustainability" },
    { to: "/contact", label: "Contact" },
  ];

  if (token) {
    if (role === "admin") {
      baseLinks.push({ to: "/orders", label: "All Orders" });
    } else {
      baseLinks.push({ to: "/create-order", label: "Create Order" });
      baseLinks.push({ to: "/my-orders", label: "My Orders" });
    }
  }

  return baseLinks;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  const links = getLinks(role, token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[color:var(--leaf)]"></div>
          <span className="font-bold text-lg tracking-wide">Amrut Ragi Malt</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) =>
                `text-sm font-medium hover:text-[color:var(--leaf)] ${isActive ? "text-[color:var(--leaf)]" : "text-gray-700"}`
              }>
              {l.label}
            </NavLink>
          ))}
          {token ? (
            <div className="relative ml-6">
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-[color:var(--leaf)] flex items-center justify-center text-white font-medium hover:shadow-lg transition"
                title={userName}
              >
                {userName?.charAt(0)?.toUpperCase() || "U"}
              </button>
              
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-xl py-3 z-50">
                  {/* Profile Info */}
                  <div className="px-4 py-3 border-b flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--leaf)] flex items-center justify-center text-white text-lg font-medium">
                      {userName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-900">{userName || "User"}</div>
                      <div className="text-xs text-gray-600">{userEmail || "user@example.com"}</div>
                    </div>
                  </div>

                  {/* Role info */}
                  {role === "admin" && (
                    <div className="px-4 py-2 text-xs font-semibold text-[color:var(--leaf)] bg-[color:var(--leaf)]/5">
                      👨‍💼 ADMIN
                    </div>
                  )}

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium border-t mt-2"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login"
                className={({isActive}) =>
                  `text-sm font-medium hover:text-[color:var(--leaf)] ${isActive ? "text-[color:var(--leaf)]" : "text-gray-700"}`
                }>
                Login
              </NavLink>
              <NavLink to="/signup"
                className={({isActive}) =>
                  `text-sm font-medium px-3 py-1 rounded-lg ${isActive ? "bg-[color:var(--leaf)] text-white" : "text-gray-700 hover:text-[color:var(--leaf)]"}`
                }>
                Signup
              </NavLink>
            </>
          )}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 border rounded">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <nav className="mx-auto max-w-7xl px-4 py-3 grid gap-3">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[color:var(--leaf)]">
                {l.label}
              </NavLink>
            ))}
            {token ? (
              <>
                <div className="py-2 px-2 bg-gray-50 rounded-lg mb-2">
                  <div className="font-semibold text-sm text-gray-900">{userName || "User"}</div>
                  <div className="text-xs text-gray-600">{userEmail || "user@example.com"}</div>
                  {role === "admin" && <div className="text-xs font-semibold text-[color:var(--leaf)] mt-1">👨‍💼 Admin</div>}
                </div>
                {role !== "admin" && (
                  <NavLink to="/my-orders" onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-700 hover:text-[color:var(--leaf)]">
                    My Profile & Orders
                  </NavLink>
                )}
                <button
                  onClick={handleLogout}
                  className="text-left text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-[color:var(--leaf)]">
                  Login
                </NavLink>
                <NavLink to="/signup" onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-[color:var(--leaf)]">
                  Signup
                </NavLink>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

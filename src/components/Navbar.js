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
    role === "admin"
      ? baseLinks.push({ to: "/orders", label: "All Orders" })
      : baseLinks.push(
          { to: "/create-order", label: "Create Order" },
          { to: "/my-orders", label: "My Orders" }
        );
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
    localStorage.clear();
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Transparent glass bar */}
      <div className="backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#d4a373] text-black font-bold flex items-center justify-center">
              A
            </div>
            <span className="font-serif tracking-wide text-[#f5f3ef]">
              Amrut Ragi Malt
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition ${
                    isActive
                      ? "text-[#d4a373]"
                      : "text-[#f5f3ef] hover:text-[#d4a373]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            {token ? (
              <div className="relative ml-6">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-10 h-10 rounded-full bg-[#d4a373] text-black font-semibold flex items-center justify-center"
                >
                  {userName?.charAt(0)?.toUpperCase() || "U"}
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-72 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="px-5 py-4 border-b border-white/10 flex gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#d4a373] text-black font-semibold flex items-center justify-center">
                        {userName?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                      <div>
                        <div className="text-sm text-white">
                          {userName || "User"}
                        </div>
                        <div className="text-xs text-neutral-400">
                          {userEmail || "user@email.com"}
                        </div>
                      </div>
                    </div>

                    {role === "admin" && (
                      <div className="px-5 py-2 text-xs tracking-widest text-[#d4a373]">
                        ADMIN
                      </div>
                    )}

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-3 text-sm text-red-400 hover:bg-white/5"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-5 ml-6">
                <NavLink
                  to="/login"
                  className="text-sm text-[#f5f3ef] hover:text-[#d4a373]"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-5 py-2 rounded-full border border-[#d4a373] text-[#d4a373] text-sm hover:bg-[#d4a373] hover:text-black transition"
                >
                  Signup
                </NavLink>
              </div>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#f5f3ef] text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden backdrop-blur-xl border-t border-white/10">
          <nav className="px-6 py-6 grid gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[#f5f3ef] hover:text-[#d4a373]"
              >
                {l.label}
              </NavLink>
            ))}
            {token ? (
              <button
                onClick={handleLogout}
                className="text-red-400 text-sm mt-4"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" className="text-[#f5f3ef]">
                  Login
                </NavLink>
                <NavLink to="/signup" className="text-[#f5f3ef]">
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

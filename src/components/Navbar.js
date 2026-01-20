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


import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/benefits", label: "Benefits" },
  { to: "/recipes", label: "Recipes" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" },
  { to: "/create-order", label: "Create Order" },
  { to: "/orders", label: "Profile" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[color:var(--leaf)]"></div>
          <span className="font-bold text-lg tracking-wide">Amrut Ragi Malt</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) =>
                `text-sm font-medium hover:text-[color:var(--leaf)] ${isActive ? "text-[color:var(--leaf)]" : "text-gray-700"}`
              }>
              {l.label}
            </NavLink>
          ))}
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
          </nav>
        </div>
      )}
    </header>
  );
}

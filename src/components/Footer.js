import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-[color:var(--leaf)]"></div>
            <span className="font-bold">RagiPure</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            From farm to cup—nutritious, honest, fully traceable Ragi Malt.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/process" className="hover:underline">Manufacturing Process</Link></li>
            <li><Link to="/benefits" className="hover:underline">Health Benefits</Link></li>
            <li><Link to="/recipes" className="hover:underline">Recipes</Link></li>
            <li><Link to="/sustainability" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Certifications</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>FSSAI Registered</li>
            <li>ISO 22000 (Food Safety)</li>
            <li>Organic (where applicable)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-700">info@ragipure.com</p>
          <p className="text-sm text-gray-700">+91-98765 43210</p>
          <Link to="/contact" className="inline-block mt-3 px-4 py-2 border rounded hover:bg-gray-50">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RagiPure. All rights reserved.
      </div>
    </footer>
  );
}

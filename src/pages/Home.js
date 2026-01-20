import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import RecipeCard from "../components/RecipeCard";

const steps = [
  "Raw Grain Selection",
  "Cleaning & Sorting",
  "Soaking & Sprouting",
  "Drying",
  "Roasting",
  "Grinding",
  "Packaging",
];

const recipes = [
  { title: "Ragi Malt Classic Drink", blurb: "A warm, comforting beverage." },
  { title: "Ragi Cookies", blurb: "Crisp, fibre-rich snacks for all ages." },
  { title: "Ragi Porridge", blurb: "Baby-friendly & nutrient-dense." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="From Farm to Your Cup — 100% Natural Ragi Malt"
        subtitle="Traceable sourcing, hygienic processing, and a wholesome product you can trust."
        ctaPrimary={
          <Link
            to="/process"
            className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
          >
            Explore Process
          </Link>
        }
        ctaSecondary={
          <Link
            to="/contact"
            className="px-6 py-3 border border-green-600 rounded-full text-green-700 hover:bg-green-50 transition"
          >
            Enquire Now
          </Link>
        }
      />

      {/* About Section */}
      <Section
        title="What is Ragi Malt?"
        subtitle="A traditional millet-based mix rich in calcium, iron, and fibre."
        className="bg-gray-50"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="h-64 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-U9Z-pF8ww4qGQIPjhg-vL5I31YtWoZMXcA&s"
              alt="Ragi Malt"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed text-gray-700">
              Ragi Malt is a minimally processed, sprouted finger millet blend. We
              source high-quality grains and maintain strict hygiene protocols.
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Gluten-free and diabetes-friendly (low GI)</li>
              <li>High in calcium for bone health</li>
              <li>Iron-rich for blood health</li>
              <li>High dietary fibre for satiety and digestion</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Manufacturing Process */}
      <Section
        title="Manufacturing Snapshot"
        subtitle="Transparent, step-by-step processing."
        className="bg-white"
      >
        <div className="grid md:grid-cols-7 gap-4">
          {steps.map((s, i) => (
            <div
              key={s}
              className="p-4 border border-gray-200 rounded-lg text-center bg-gray-50 shadow-sm hover:border-green-400 hover:shadow-md transition"
            >
              <div className="text-xs text-gray-500">Step {i + 1}</div>
              <div className="font-medium text-gray-800 mt-1">{s}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/process"
            className="inline-block px-6 py-3 border border-green-600 rounded-full text-green-700 hover:bg-green-50 transition"
          >
            See Full Process
          </Link>
        </div>
      </Section>

      {/* Recipes */}
      <Section
        title="Featured Recipes"
        subtitle="Delicious ways to enjoy Ragi Malt."
        className="bg-gray-50"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transform hover:scale-[1.02] transition"
            >
              <RecipeCard recipe={r} />
            </div>
          ))}
        </div>
      </Section>

      {/* Sustainability */}
      <Section
        title="Sustainability"
        subtitle="Eco-friendly packaging, farmer partnerships, and zero-waste practices."
        className="bg-white"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {["Eco Packaging", "Local Farmers", "Quality Certifications"].map(
            (t) => (
              <div
                key={t}
                className="p-6 border border-gray-200 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-3 text-lg font-bold">
                  ✓
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{t}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Brief highlight about {t.toLowerCase()}.
                </p>
              </div>
            )
          )}
        </div>
      </Section>
    </>
  );
}

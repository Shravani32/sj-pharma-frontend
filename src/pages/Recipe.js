import RecipeCard from "../components/RecipeCard";

const allRecipes = [
  { title: "Ragi Malt Classic Drink", blurb: "Warm, lightly sweet, deeply nourishing." },
];

export default function Recipe() {
  return (
    <div className="bg-[#0b0a08] text-[#f5f3ef]">

      {/* HERO */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#d4a373]">
            Recipes
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-serif">
            Simple Rituals,<br />
            <span className="italic text-[#d4a373]">Timeless Nutrition</span>
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-400">
            Discover gentle, nourishing ways to enjoy ragi malt — crafted
            for balance, warmth and daily wellness.
          </p>
        </div>
      </section>

      {/* RECIPE GRID */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-14">
            {allRecipes.map((r) => (
              <div
                key={r.title}
                className="rounded-[3rem] bg-[#13110e] border border-white/10 p-6"
              >
                <RecipeCard recipe={r} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

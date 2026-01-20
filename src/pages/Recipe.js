import Section from "../components/Section";
import RecipeCard from "../components/RecipeCard";

const allRecipes = [
  { title: "Ragi Malt Classic Drink", blurb: "Warm, lightly sweet, nourishing." },
];

export default function Recipe() {
  return (
    <>
      <section className="py-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Recipe</h1>
          <p className="mt-3 text-gray-700">Explore delicious ideas with Ragi Malt.</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {allRecipes.map(r => <RecipeCard key={r.title} recipe={r} />)}
        </div>
      </Section>
    </>
  );
}

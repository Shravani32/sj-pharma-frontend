export default function RecipeCard({ recipe }) {
  return (
    <article className="border rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="h-40 bg-gray-100"></div>
      <div className="p-4">
        <h3 className="font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{recipe.blurb}</p>
        <button className="mt-3 text-sm underline">View Recipe</button>
      </div>
    </article>
  );
}

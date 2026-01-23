export default function RecipeCard({ recipe }) {
  return (
    <div className="flex flex-col h-full">
      <div className="h-48 rounded-[2rem] bg-[#0b0a08] border border-white/10 mb-6" />

      <h3 className="text-xl font-semibold tracking-wide">
        {recipe.title}
      </h3>

      <p className="mt-3 text-sm text-neutral-400">
        {recipe.blurb}
      </p>

      <button className="mt-auto pt-6 text-sm tracking-widest text-[#d4a373] hover:underline">
        VIEW RECIPE
      </button>
    </div>
  );
}

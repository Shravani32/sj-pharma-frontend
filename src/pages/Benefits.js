const benefits = [
  { title: "Bone Health", desc: "Exceptionally high calcium content supports bone density and strength." },
  { title: "Digestive Health", desc: "Rich dietary fibre aids gut health and long-lasting satiety." },
  { title: "Diabetes Friendly", desc: "Naturally low glycemic index helps regulate blood sugar levels." },
  { title: "Iron Rich", desc: "Contributes to healthy haemoglobin formation and energy levels." },
  { title: "Gluten Free", desc: "A gentle alternative for gluten-sensitive diets." },
];

export default function Benefits() {
  return (
    <div className="bg-[#0b0a08] text-[#f5f3ef]">

      {/* HERO */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#d4a373]">
            Health Benefits
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-serif">
            Nutrition That{" "}
            <span className="italic text-[#d4a373]">Endures</span>
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-400">
            Ragi is more than a grain. Its nutritional profile has sustained
            generations — supported by both tradition and modern science.
          </p>
        </div>
      </section>

      {/* BENEFIT CARDS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-10 rounded-[2.5rem] bg-[#13110e] border border-white/10"
              >
                <div className="h-12 w-12 rounded-full border border-[#d4a373]/40 mb-6" />
                <h3 className="font-semibold tracking-wide">
                  {b.title}
                </h3>
                <p className="mt-4 text-sm text-neutral-400">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION COMPARISON */}
      <section className="py-28 bg-[#100f0d]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center">
            Nutritional Comparison
          </h2>

          <p className="mt-6 text-neutral-400 text-center">
            Approximate values per 100g of grain.
          </p>

          <div className="mt-16 overflow-x-auto">
            <table className="min-w-[720px] w-full border border-white/10 text-sm">
              <thead>
                <tr className="bg-[#13110e]">
                  <th className="p-4 border border-white/10 text-left">Nutrient</th>
                  <th className="p-4 border border-white/10 text-left">Ragi</th>
                  <th className="p-4 border border-white/10 text-left">Wheat</th>
                  <th className="p-4 border border-white/10 text-left">Rice</th>
                </tr>
              </thead>
              <tbody className="text-neutral-400">
                <tr>
                  <td className="p-4 border border-white/10">Calcium (mg)</td>
                  <td className="p-4 border border-white/10">~344</td>
                  <td className="p-4 border border-white/10">~30</td>
                  <td className="p-4 border border-white/10">~10</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">Fibre (g)</td>
                  <td className="p-4 border border-white/10">~11</td>
                  <td className="p-4 border border-white/10">~12</td>
                  <td className="p-4 border border-white/10">~1</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">Protein (g)</td>
                  <td className="p-4 border border-white/10">~7</td>
                  <td className="p-4 border border-white/10">~13</td>
                  <td className="p-4 border border-white/10">~7</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">Glycemic Index</td>
                  <td className="p-4 border border-white/10">Low</td>
                  <td className="p-4 border border-white/10">Medium</td>
                  <td className="p-4 border border-white/10">High</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-neutral-500 text-center">
            *Indicative values. Use lab-tested data for packaging & compliance.
          </p>
        </div>
      </section>

    </div>
  );
}

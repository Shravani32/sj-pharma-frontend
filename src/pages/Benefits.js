import Section from "../components/Section";

const benefits = [
  { title: "Bone Health", desc: "Calcium-rich millet supports bone density." },
  { title: "Digestive Health", desc: "High fibre aids gut health and satiety." },
  { title: "Diabetes-Friendly", desc: "Low GI helps manage blood sugar." },
  { title: "Iron-Rich", desc: "Supports haemoglobin formation." },
  { title: "Gluten-Free", desc: "Great alternative for gluten-sensitive." },
];

export default function Benefits() {
  return (
    <>
      <section className="py-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Health Benefits</h1>
          <p className="mt-3 text-gray-700">Science-backed reasons to choose Ragi.</p>
        </div>
      </section>

      <Section title="Nutritional Highlights">
        <div className="grid md:grid-cols-5 gap-6">
          {benefits.map(b => (
            <div key={b.title} className="p-5 border rounded-lg">
              <div className="h-10 w-10 rounded bg-[color:var(--accent)]/10 border mb-3"></div>
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Comparison (per 100g)">
        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 border text-left">Nutrient</th>
                <th className="p-3 border text-left">Ragi</th>
                <th className="p-3 border text-left">Wheat</th>
                <th className="p-3 border text-left">Rice</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border">Calcium (mg)</td><td className="p-3 border">~344</td><td className="p-3 border">~30</td><td className="p-3 border">~10</td></tr>
              <tr><td className="p-3 border">Fibre (g)</td><td className="p-3 border">~11</td><td className="p-3 border">~12</td><td className="p-3 border">~1</td></tr>
              <tr><td className="p-3 border">Protein (g)</td><td className="p-3 border">~7</td><td className="p-3 border">~13</td><td className="p-3 border">~7</td></tr>
              <tr><td className="p-3 border">GI</td><td className="p-3 border">Low</td><td className="p-3 border">Medium</td><td className="p-3 border">High</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">*Values are indicative/approximate; replace with lab-tested numbers for labels.</p>
      </Section>
    </>
  );
}

import Section from "../components/Section";

export default function Sustainability() {
  return (
    <>
      <section className="py-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Sustainability</h1>
          <p className="mt-3 text-gray-700">Better for you, better for the planet.</p>
        </div>
      </section>

      <Section title="Our Commitments">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Eco Packaging</h3>
            <p className="text-sm text-gray-600 mt-1">Recyclable, moisture-barrier pouches; minimal inks.</p>
          </div>
          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Local Farmers</h3>
            <p className="text-sm text-gray-600 mt-1">Fair pricing & long-term procurement partnerships.</p>
          </div>
          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Zero-Waste Ops</h3>
            <p className="text-sm text-gray-600 mt-1">Byproduct reuse & efficient utilities.</p>
          </div>
        </div>
      </Section>
    </>
  );
}

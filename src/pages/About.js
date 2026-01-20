import Section from "../components/Section";

export default function About() {
  return (
    <>
      <section className="py-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Our Story</h1>
          <p className="mt-3 text-gray-700">We started RagiPure with a mission to bring honest, traceable millet foods.</p>
        </div>
      </section>

      <Section title="Mission & Vision">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Mission</h3>
            <p className="mt-2 text-gray-700">Deliver nutrient-dense Ragi Malt with uncompromised safety & taste.</p>
          </div>
          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold">Vision</h3>
            <p className="mt-2 text-gray-700">Champion millet-based wellness for every household.</p>
          </div>
        </div>
      </Section>

      <Section title="Our Facility & QA">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(n => <div key={n} className="h-40 border rounded-lg bg-gray-100" />)}
        </div>
        <ul className="mt-6 list-disc ml-5 text-gray-700">
          <li>FSSAI compliance & batch-wise testing</li>
          <li>HACCP-aligned sanitation protocols</li>
          <li>Lot traceability from farms to packs</li>
        </ul>
      </Section>
    </>
  );
}

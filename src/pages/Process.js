import Section from "../components/Section";

const process = [
  { step: 1, title: "Raw Material Procurement", text: "Partnered farmers, quality checks on arrival." },
  { step: 2, title: "Cleaning & Sorting", text: "Remove stones, dust; optical sorting." },
  { step: 3, title: "Soaking & Sprouting", text: "Controlled hydration and germination for nutrition." },
  { step: 4, title: "Drying", text: "Low-temp drying to preserve enzymes." },
  { step: 5, title: "Roasting", text: "Even roasting for aroma & shelf life." },
  { step: 6, title: "Grinding", text: "Hygienic milling; particle size control." },
  { step: 7, title: "Packaging", text: "Food-grade packs; oxygen/moisture barrier." },
];

export default function Process() {
  return (
    <>
      <section className="py-16 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Manufacturing Process</h1>
          <p className="mt-3 text-gray-700">Transparency at every stage.</p>
        </div>
      </section>

      <Section>
        <ol className="grid md:grid-cols-2 gap-6">
          {process.map(p => (
            <li key={p.step} className="p-5 border rounded-lg">
              <div className="text-xs text-gray-500">Step {p.step}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-700 mt-2">{p.text}</p>
              <div className="h-36 mt-3 bg-gray-100 border rounded" />
            </li>
          ))}
        </ol>

        <div className="mt-10 p-5 border rounded-lg bg-gray-50">
          <h3 className="font-semibold">Hygiene & Quality Control</h3>
          <ul className="list-disc ml-5 text-gray-700 mt-2">
            <li>Sanitation SOPs, PPE, and SSOP monitoring</li>
            <li>Moisture, microbiological, and aflatoxin tests</li>
            <li>Batch coding & recall-ready traceability</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

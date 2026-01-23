const process = [
  { step: 1, title: "Raw Material Procurement", text: "Partnered farmers, rigorous quality checks on arrival." },
  { step: 2, title: "Cleaning & Sorting", text: "Removal of stones, dust and impurities using careful sorting." },
  { step: 3, title: "Soaking & Sprouting", text: "Controlled hydration and germination to enhance nutrition." },
  { step: 4, title: "Drying", text: "Low-temperature drying to protect enzymes and minerals." },
  { step: 5, title: "Roasting", text: "Even stone roasting to develop aroma and shelf stability." },
  { step: 6, title: "Grinding", text: "Hygienic stone grinding with precise particle control." },
  { step: 7, title: "Packaging", text: "Food-grade sealing with moisture and oxygen barriers." },
];

export default function Process() {
  return (
    <div className="bg-[#0b0a08] text-[#f5f3ef]">

      {/* HERO */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#d4a373]">
            Our Process
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-serif">
            From Grain to{" "}
            <span className="italic text-[#d4a373]">Glass</span>
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-400">
            Every stage of our process is intentional. We choose time,
            tradition and discipline over shortcuts.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14">
            {process.map((p) => (
              <div
                key={p.step}
                className="relative p-14 rounded-[3rem] bg-[#13110e] border border-white/10"
              >
                <div className="absolute -top-8 right-8 text-8xl font-serif text-white/5">
                  {p.step}
                </div>

                <h3 className="text-xl font-semibold tracking-wide">
                  {p.title}
                </h3>

                <p className="mt-4 text-neutral-400">
                  {p.text}
                </p>

                <div className="mt-8 h-40 rounded-[2rem] bg-[#0b0a08] border border-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & HYGIENE */}
      <section className="py-28 bg-[#100f0d]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif">Hygiene & Quality Control</h2>

          <p className="mt-6 text-neutral-400">
            Purity is protected through discipline, documentation and testing.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {[
              "Strict sanitation SOPs & PPE compliance",
              "Moisture, microbiological & aflatoxin testing",
              "Batch coding with recall-ready traceability",
            ].map((item) => (
              <div
                key={item}
                className="p-12 rounded-[2.5rem] bg-[#13110e] border border-white/10"
              >
                <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

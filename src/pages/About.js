export default function About() {
  return (
    <div className="bg-[#0b0a08] text-[#f5f3ef]">

      {/* HERO */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#d4a373]">
            Our Story
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-serif leading-tight">
            Food That Honors{" "}
            <span className="italic text-[#d4a373]">Time</span>
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-400">
            RagiPure was born from a quiet rebellion against shortcuts.
            We believe nourishment is earned — through patience, process
            and respect for the grain.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif">Our Philosophy</h2>

          <p className="mt-6 text-neutral-400 max-w-3xl mx-auto">
            Ragi has sustained communities for centuries. We preserve that
            wisdom by choosing slow, natural methods over industrial speed.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {["Purity First", "Slow Processing", "Complete Traceability"].map(
              (item) => (
                <div
                  key={item}
                  className="p-12 rounded-[2.5rem] bg-[#13110e] border border-white/10"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {item}
                  </h3>
                  <p className="mt-4 text-sm text-neutral-400">
                    Every decision is guided by integrity, not efficiency.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-28 bg-[#100f0d]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          <div className="p-14 rounded-[3rem] bg-[#0b0a08] border border-white/10">
            <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
              OUR MISSION
            </h3>
            <p className="mt-6 text-neutral-400">
              To deliver nutrient-rich ragi malt that retains its natural
              goodness through traditional sprouting and stone grinding.
            </p>
          </div>

          <div className="p-14 rounded-[3rem] bg-[#0b0a08] border border-white/10">
            <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
              OUR VISION
            </h3>
            <p className="mt-6 text-neutral-400">
              To make ancient grains relevant again — restoring trust,
              nutrition and mindfulness in everyday diets.
            </p>
          </div>
        </div>
      </section>

      {/* FACILITY & QUALITY */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center">
            Our Facility & Quality
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-14">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-56 rounded-[3rem] bg-[#13110e] border border-white/10"
              />
            ))}
          </div>

          <ul className="mt-20 max-w-3xl mx-auto space-y-5 text-neutral-400">
            <li>• FSSAI compliant processing with batch-level testing</li>
            <li>• HACCP-aligned hygiene & sanitation controls</li>
            <li>• Farm-to-pack lot traceability for every product</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

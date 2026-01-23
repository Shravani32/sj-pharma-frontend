export default function Sustainability() {
  return (
    <div className="bg-[#0b0a08] text-[#f5f3ef]">

      {/* HERO */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#d4a373]">
            Sustainability
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-serif">
            Care Beyond the{" "}
            <span className="italic text-[#d4a373]">Grain</span>
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-400">
            Sustainability for us is not a claim — it is a responsibility.
            From farms to packaging, every choice is made with long-term impact in mind.
          </p>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center">
            Our Commitments
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-14">
            
            <div className="p-12 rounded-[3rem] bg-[#13110e] border border-white/10">
              <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
                ECO-CONSCIOUS PACKAGING
              </h3>
              <p className="mt-6 text-neutral-400">
                Recyclable, moisture-barrier packaging with minimal inks and
                reduced plastic footprint.
              </p>
            </div>

            <div className="p-12 rounded-[3rem] bg-[#13110e] border border-white/10">
              <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
                LOCAL FARM PARTNERSHIPS
              </h3>
              <p className="mt-6 text-neutral-400">
                Long-term relationships with farmers built on fair pricing,
                transparency and respect.
              </p>
            </div>

            <div className="p-12 rounded-[3rem] bg-[#13110e] border border-white/10">
              <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
                ZERO-WASTE OPERATIONS
              </h3>
              <p className="mt-6 text-neutral-400">
                By-product reuse, efficient utilities and continuous reduction
                of operational waste.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="py-32 bg-[#100f0d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif">
            Sustainability Is a Journey
          </h2>

          <p className="mt-6 text-neutral-400">
            We continuously refine our processes to reduce impact — because
            nourishment should never come at the planet’s expense.
          </p>
        </div>
      </section>

    </div>
  );
}

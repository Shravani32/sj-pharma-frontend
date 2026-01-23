import { Link } from "react-router-dom";
import '@google/model-viewer';

export default function Home() {
  return (
    <div className="bg-[#0b0a08] text-[#f5f3ef]">
      
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611095566888-f1446042c8fc?q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-[#0b0a08]" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#d4a373]">
              Ancient Super Grain
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-serif leading-tight">
              Ragi Malt,<br />
              Crafted the{" "}
              <span className="italic text-[#d4a373]">Right Way</span>
            </h1>

            <p className="mt-6 text-lg text-neutral-300 max-w-xl">
              Naturally sprouted, stone-ground ragi malt that preserves nutrition,
              flavour and trust — just as generations intended.
            </p>

            <div className="mt-10 flex gap-6">
              <Link
                to="/process"
                className="px-10 py-4 bg-[#d4a373] text-black font-semibold tracking-widest rounded-full hover:bg-[#c8965f] transition"
              >
                OUR PROCESS
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border border-[#d4a373] rounded-full tracking-widest text-[#d4a373] hover:bg-[#d4a373] hover:text-black transition"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* 3D MODEL */}
          <div className="hidden md:block relative">
            <model-viewer
              src="/spice+scoop+3d+model.glb"
              alt="Ragi scoop 3D model"
              auto-rotate
              rotation-per-second="15deg"
              camera-controls
              disable-zoom
              environment-image="neutral"
              exposure="1.1"
              shadow-intensity="1"
              class="w-full h-[460px] rounded-[3rem]"
              style={{
                background: "transparent",
                filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.55))",
              }}
            ></model-viewer>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif">Why Ragi</h2>
          <p className="mt-6 text-neutral-400 max-w-3xl mx-auto">
            Ragi has nourished civilizations for centuries. We honour that legacy
            by keeping our process slow, natural, and uncompromising.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {["High Calcium", "Low Glycemic Index", "Naturally Gluten Free"].map(
              (item) => (
                <div
                  key={item}
                  className="p-12 rounded-[2.5rem] bg-[#13110e] border border-white/10"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {item}
                  </h3>
                  <p className="mt-4 text-sm text-neutral-400">
                    Preserved through sprouting and gentle stone roasting.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-[#100f0d]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center">
            From Grain to Glass
          </h2>

          <div className="mt-20 grid md:grid-cols-4 gap-10">
            {["Select", "Sprout", "Dry", "Roast", "Grind", "Seal"].map(
              (step, i) => (
                <div
                  key={step}
                  className="relative p-10 rounded-[2rem] bg-[#0b0a08] border border-white/10"
                >
                  <div className="absolute -top-6 right-6 text-7xl font-serif text-white/5">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold tracking-widest">{step}</h4>
                  <p className="mt-4 text-sm text-neutral-400">
                    Executed with precision, patience and care.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif">Our Promise</h2>
          <p className="mt-6 text-neutral-400">
            We don’t chase scale. We chase purity.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-14">
            {["Stone Ground", "Zero Additives", "Ethically Sourced"].map(
              (item) => (
                <div
                  key={item}
                  className="p-14 rounded-[3rem] bg-[#13110e] border border-white/10"
                >
                  <h3 className="tracking-[0.2em] text-sm text-[#d4a373]">
                    {item}
                  </h3>
                  <p className="mt-6 text-sm text-neutral-400">
                    Every batch respects nutrition, people and planet.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-gray-700">{subtitle}</p>
          <div className="mt-6 flex gap-3">
            {ctaPrimary}
            {ctaSecondary}
          </div>
        </div>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIyUAtLUVoFJrKP5gMuGdMtTpkwCpIfqhTA&s" className="p-6 w-11/12 rounded-md"/>
      </div>
    </section>
  );
}

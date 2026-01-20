export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-14 border-t">
      <div className="mx-auto max-w-7xl px-4">
        {title && <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>}
        {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

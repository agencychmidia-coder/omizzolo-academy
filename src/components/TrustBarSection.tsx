const credentials = [
  "Harvard Medical School",
  "IAOMS",
  "ASTMJS",
  "LASTMJS",
  "Colégio Brasileiro de CTBMF",
];

export default function TrustBarSection() {
  return (
    <div className="section-cream border-y border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="eyebrow shrink-0">Credenciais</span>
          {credentials.map((c) => (
            <span
              key={c}
              className="font-display text-sm md:text-base text-[hsl(var(--dark)/0.7)]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

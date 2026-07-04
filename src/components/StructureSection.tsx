const steps = [
  {
    number: "01",
    title: "Imersão Teórica",
    description:
      "Aulas teóricas com fundamentos, princípios iniciais e técnicas nos níveis 1, 2 e 3 em Artroscopia da ATM.",
  },
  {
    number: "02",
    title: "Imersão Prática",
    description:
      "Acompanhamento e participação em consultas ambulatoriais, rotinas pré e pós-operatórias, participação em cirurgias e experiência prática em hospitais locais.",
  },
];

export default function StructureSection() {
  return (
    <section className="section-cream section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Como Funciona</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold">
            Do Fundamento à Prática Cirúrgica
          </h2>
          <p className="mt-4 text-[hsl(var(--dark)/0.7)] leading-relaxed">
            O Fellowship é estruturado em duas imersões integradas — a teoria
            fundamenta a prática, e a prática valida a teoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-lg border border-[hsl(var(--border))] bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--cream))] border-2 border-[hsl(var(--gold-dark))] font-display text-lg font-semibold text-[hsl(var(--gold-dark))]">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-[hsl(var(--dark)/0.7)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

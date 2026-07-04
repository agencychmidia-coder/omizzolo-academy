const stats = [
  { value: "+30", label: "Cirurgiões formados em turmas anteriores" },
  { value: "100%", label: "Das turmas com prática em centro cirúrgico real" },
  { value: "2", label: "Programas — Fellowship e Mentorship" },
];

export default function PreviousClassesSection() {
  return (
    <section className="section-dark section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow-on-dark">Turmas Anteriores</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold text-[hsl(var(--cream))]">
            Quem Já Passou pelo Programa
          </h2>
          <p className="mt-4 text-[hsl(var(--cream)/0.7)] leading-relaxed">
            Programa consolidado, com turmas formadas em prática real de
            centro cirúrgico.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-lg border border-[hsl(var(--gold)/0.18)] bg-[hsl(var(--dark-soft))] p-8"
            >
              <p className="font-display text-4xl font-semibold text-[hsl(var(--gold-light))] mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-[hsl(var(--cream)/0.75)] leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

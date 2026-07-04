import {
  BookOpen,
  Wrench,
  Scissors,
  Stethoscope,
} from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Aulas Teóricas",
    description:
      "Aprenda os conceitos fundamentais, fundamentos anatômicos, diagnósticos e as últimas tendências em cirurgia da ATM.",
  },
  {
    icon: Wrench,
    title: "Workshops Práticos",
    description:
      "Atividades práticas e simulações em caixa preta e bonecos de silicone para desenvolvimento das habilidades técnicas antes do centro cirúrgico.",
  },
  {
    icon: Scissors,
    title: "Cirurgia em Centro Cirúrgico",
    description:
      "Desenvolva suas habilidades cirúrgicas em procedimentos reais com pacientes, com participação supervisionada pelo Dr. Omizzolo.",
  },
  {
    icon: Stethoscope,
    title: "Atendimento Ambulatorial",
    description:
      "Acompanhamento de consultas e condutas desde a anamnese e avaliação clínica detalhada, realização de exames físicos e interpretação de exames de imagem para diagnóstico preciso.",
  },
];

export default function PillarsSection() {
  return (
    <section className="section-dark section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow-on-dark">O Que Você Vai Aprender</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold text-[hsl(var(--cream))]">
            Formação Completa em ATM
          </h2>
          <p className="mt-4 text-[hsl(var(--cream)/0.7)] leading-relaxed">
            Da teoria à sala de cirurgia — cada etapa do Fellowship foi
            desenhada para construir competência técnica real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-[hsl(var(--gold)/0.18)] bg-[hsl(var(--dark-soft))] p-7 transition-colors hover:border-[hsl(var(--gold)/0.4)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--gold)/0.12)]">
                <pillar.icon className="h-5 w-5 text-[hsl(var(--gold-light))]" />
              </div>
              <h3 className="font-display text-lg font-semibold text-[hsl(var(--cream))] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-[hsl(var(--cream)/0.65)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

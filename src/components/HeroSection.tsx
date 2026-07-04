import { ArrowRight, GraduationCap, ShieldCheck, Users } from "lucide-react";

const trustBadges = [
  { label: "Harvard Medical School — Surgical Leadership Program" },
  { label: "IAOMS" },
  { label: "ASTMJS" },
  { label: "LASTMJS" },
];

export default function HeroSection() {
  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  const scrollToPrograms = () =>
    document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative overflow-hidden section-dark"
      aria-label="Apresentação do Instituto Omizzolo Academy"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--gold)) 0%, transparent 35%), radial-gradient(circle at 85% 75%, hsl(var(--burgundy-light)) 0%, transparent 40%)",
        }}
      />

      <div className="relative section-padding pt-28 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--gold)/0.4)] bg-[hsl(var(--gold)/0.08)] px-4 py-1.5 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--gold))]" />
              <span className="eyebrow-on-dark">Instituto Omizzolo Academy</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.12] font-semibold text-[hsl(var(--cream))]">
              Fellowship em{" "}
              <span className="gold-text">Artroscopia de ATM</span>
            </h1>

            <p className="mt-6 text-lg text-[hsl(var(--cream)/0.8)] max-w-xl leading-relaxed">
              Curso teórico-prático com ênfase no diagnóstico e tratamento da
              Articulação Temporomandibular — do manejo clínico ao cirúrgico.
              Referência em formação especializada na América Latina, sob
              coordenação de especialista formado na{" "}
              <span className="text-[hsl(var(--gold-light))] font-medium">
                Harvard Medical School
              </span>
              .
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToForm} className="btn-gold group">
                Solicitar Vaga
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={scrollToPrograms} className="btn-outline-cream">
                Conhecer o Programa
              </button>
            </div>

            <p className="mt-5 text-sm text-[hsl(var(--cream)/0.6)]">
              Turmas reduzidas · 6 a 8 vagas por edição
            </p>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-[hsl(var(--gold)/0.25)] bg-[hsl(var(--dark-soft))] p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--gold)/0.15)]">
                  <GraduationCap className="h-5 w-5 text-[hsl(var(--gold-light))]" />
                </div>
                <div>
                  <p className="font-display text-base text-[hsl(var(--cream))]">
                    Dr. Guilherme Omizzolo
                  </p>
                  <p className="text-xs text-[hsl(var(--cream)/0.6)]">
                    Coordenação Científica
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {trustBadges.map((b) => (
                  <li
                    key={b.label}
                    className="flex items-center gap-3 text-sm text-[hsl(var(--cream)/0.85)]"
                  >
                    <ShieldCheck className="h-4 w-4 shrink-0 text-[hsl(var(--gold))]" />
                    {b.label}
                  </li>
                ))}
              </ul>

              <div className="divider-joint">
                <span className="divider-joint-dot" />
              </div>

              <div className="flex items-center gap-3 text-sm text-[hsl(var(--cream)/0.75)]">
                <Users className="h-4 w-4 shrink-0 text-[hsl(var(--gold))]" />
                Turmas reduzidas para prática supervisionada real
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

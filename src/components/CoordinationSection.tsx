import { Award, BadgeCheck, Stethoscope, Globe2, GraduationCap, BookOpen } from "lucide-react";
import drOmizzoloHarvard from "@/assets/dr-omizzolo-harvard.jpeg";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    description:
      "Especialista em CTBMF pela PUC-RS. Doutor em CTBMF pela PUCRS. Formação clínica no Hospital Cristo Redentor / Grupo Conceição — Porto Alegre.",
  },
  {
    icon: Award,
    title: "Formação Internacional",
    description:
      "Especialização em Harvard Medical School — Surgical Leadership Program.",
  },
  {
    icon: BadgeCheck,
    title: "Credenciais Profissionais",
    description:
      "Membro Titular do Colégio Brasileiro de CTBMF. Membro da IAOMS, ASTMJS e LASTMJS.",
  },
  {
    icon: BookOpen,
    title: "Experiência em Ensino",
    description:
      "Coordenador do Programa de Especialização/Residência em CTBMF — Bionep/Uningá, São Lucas Hospital de Pato Branco – PR.",
  },
];

export default function CoordinationSection() {
  return (
    <section className="section-cream section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">Coordenação Científica</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold">
            Doutor Guilherme Omizzolo
          </h2>
          <p className="mt-4 text-[hsl(var(--dark)/0.7)] leading-relaxed">
            Especialista em Cirurgia e Traumatologia Bucomaxilofacial, com
            formação internacional na Harvard Medical School e atuação ativa
            nas principais sociedades mundiais de cirurgia de ATM.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div className="grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-[hsl(var(--border))] bg-white p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--gold)/0.12)]">
                  <c.icon className="h-5 w-5 text-[hsl(var(--gold-dark))]" />
                </div>
                <h3 className="font-display text-base font-semibold mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-[hsl(var(--dark)/0.7)] leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-lg border border-[hsl(var(--border))] shadow-lg aspect-[4/5] bg-[hsl(var(--cream-dark))]">
                <img
                  src={drOmizzoloHarvard}
                  alt="Doutor Guilherme Omizzolo na Harvard Medical School"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-sm text-[hsl(var(--dark)/0.55)]">
                Dr. Guilherme Omizzolo — Harvard Medical School
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

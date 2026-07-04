import { Check, Users, Award, Clock } from "lucide-react";

const points = [
  "Módulos presenciais em Florianópolis, SC",
  "Módulos online com conteúdo teórico e científico",
  "Prática guiada com retorno direto do Dr. Omizzolo",
  "Atuação real em centro cirúrgico",
  "Turmas de 6 a 8 alunos para acompanhamento individualizado",
];

export default function AboutSection() {
  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="programas" className="section-cream section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow">Programa de Excelência em Cirurgia de ATM</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold leading-snug">
              Fellowship em Artroscopia da ATM
            </h2>
            <p className="mt-5 text-[hsl(var(--dark)/0.75)] leading-relaxed">
              Um programa estruturado para cirurgiões BMF que buscam dominar o
              diagnóstico e tratamento da Articulação Temporomandibular — desde
              o manejo clínico até o procedimento artroscópico. Formação
              integrada, com teoria, ciência e prática cirúrgica real.
            </p>
            <p className="mt-3 text-[hsl(var(--dark)/0.75)] leading-relaxed">
              Referência em formação especializada na América Latina, conduzido
              diretamente pelo Doutor Guilherme Omizzolo.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--gold-dark))]" />
                  <span className="text-[hsl(var(--dark)/0.8)]">{p}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className="btn-gold mt-10"
            >
              Solicitar Vaga no Fellowship
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-lg border border-[hsl(var(--border))] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--gold)/0.12)]">
                  <Users className="h-5 w-5 text-[hsl(var(--gold-dark))]" />
                </div>
                <h3 className="font-display text-lg font-semibold">Vagas Limitadas</h3>
              </div>
              <p className="text-sm text-[hsl(var(--dark)/0.7)] leading-relaxed">
                Turmas de <strong>6 a 8 alunos</strong> por edição, garantindo
                acompanhamento próximo e prática real em centro cirúrgico para
                cada participante.
              </p>
            </div>

            <div className="rounded-lg border border-[hsl(var(--border))] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--gold)/0.12)]">
                  <Award className="h-5 w-5 text-[hsl(var(--gold-dark))]" />
                </div>
                <h3 className="font-display text-lg font-semibold">Certificação</h3>
              </div>
              <p className="text-sm text-[hsl(var(--dark)/0.7)] leading-relaxed">
                Certificado de conclusão emitido pelo Instituto Omizzolo Academy,
                com carga horária e conteúdo programático completo.
              </p>
            </div>

            <div className="rounded-lg border border-[hsl(var(--border))] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--gold)/0.12)]">
                  <Clock className="h-5 w-5 text-[hsl(var(--gold-dark))]" />
                </div>
                <h3 className="font-display text-lg font-semibold">Formato Integrado</h3>
              </div>
              <p className="text-sm text-[hsl(var(--dark)/0.7)] leading-relaxed">
                Módulos presenciais, online e prática guiada — estrutura pensada
                para conciliar com a rotina clínica do cirurgião.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

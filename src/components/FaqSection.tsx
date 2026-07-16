import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso de algum pré-requisito para me inscrever?",
    answer:
      "Sim. O Fellowship é voltado a cirurgiões-dentistas com formação em Cirurgia e Traumatologia Bucomaxilofacial (BMF), em qualquer estágio — desde residentes até preceptores. O nível de conhecimento em artroscopia de ATM é considerado na seleção, mas não é um pré-requisito eliminatório.",
  },
  {
    question: "Vou participar de cirurgias reais durante o programa?",
    answer:
      "Sim. O Fellowship inclui participação supervisionada em cirurgias de ATM em centro cirúrgico, além de acompanhamento em atendimento ambulatorial com o Dr. Omizzolo.",
  },
  {
    question: "Como funciona a seleção para as turmas?",
    answer:
      "As vagas são limitadas a 2–3 alunos por turma, para garantir prática real e acompanhamento de qualidade. Após o envio do formulário, nossa equipe entra em contato para confirmar disponibilidade e próximos passos.",
  },
  {
    question: "Recebo certificado de conclusão?",
    answer:
      "Sim, todos os participantes que concluem o Fellowship recebem certificado de conclusão emitido pelo Instituto Omizzolo Academy, com a carga horária e o conteúdo programático cursado.",
  },
  {
    question: "Onde os módulos presenciais acontecem?",
    answer:
      "Em Florianópolis, SC, no ecossistema Bewiki Floripa Centro, que reúne coworking, estrutura hospitalar e hospedagem próxima em um mesmo local.",
  },
  {
    question: "Como recebo informações sobre valores e próximas turmas?",
    answer:
      "Preencha o formulário de inscrição informando seu interesse — nossa equipe retorna por WhatsApp com valores, datas e disponibilidade de vagas para a próxima turma do Fellowship.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-cream section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow">Perguntas Frequentes</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold">
            Tire Suas Dúvidas
          </h2>
        </div>

        <div className="divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-display text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[hsl(var(--gold-dark))] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[hsl(var(--dark)/0.7)] leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

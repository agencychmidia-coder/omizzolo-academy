import { MapPin, Phone, Building2, Hotel, Cross } from "lucide-react";
import bewikiLocation from "@/assets/bewiki-location.jpg";

const highlights = [
  {
    icon: Building2,
    title: "Coworking",
    description: "Espaços para estudo e discussão de casos entre os módulos.",
  },
  {
    icon: Cross,
    title: "Hospital",
    description: "Estrutura hospitalar integrada para prática em centro cirúrgico.",
  },
  {
    icon: Hotel,
    title: "Hotel",
    description: "Hospedagem próxima, facilitando a rotina de quem vem de fora.",
  },
];

const ADDRESS = "R. Hermann Blumenau, 110 - Centro, Florianópolis - SC, 88020-020";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Bewiki+Floripa+Centro+R.+Hermann+Blumenau+110+Florianopolis";

export default function LocationSection() {
  return (
    <section className="section-dark section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow-on-dark">Localização</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold text-[hsl(var(--cream))]">
            Florianópolis, SC — Ecossistema Bewiki
          </h2>
          <p className="mt-4 text-[hsl(var(--cream)/0.7)] leading-relaxed">
            Bewiki Floripa Centro — um ecossistema pensado para concentrar
            estudo, hospedagem e estrutura clínica em um só lugar.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 text-sm text-[hsl(var(--cream)/0.85)]">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 hover:text-[hsl(var(--gold-light))] transition-colors"
            >
              <MapPin className="h-4.5 w-4.5 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
              {ADDRESS}
            </a>
            <a
              href="tel:+5548998193411"
              className="flex items-center gap-2.5 hover:text-[hsl(var(--gold-light))] transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0 text-[hsl(var(--gold))]" />
              (48) 99819-3411
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border border-[hsl(var(--gold)/0.2)] aspect-[16/10] bg-[hsl(var(--dark-soft))] group"
          >
            <img
              src={bewikiLocation}
              alt="Mapa de localização do Bewiki Floripa Centro"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </a>

          <div className="flex flex-col gap-5 justify-center">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="flex items-start gap-4 rounded-lg border border-[hsl(var(--gold)/0.18)] bg-[hsl(var(--dark-soft))] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--gold)/0.12)]">
                  <h.icon className="h-4.5 w-4.5 text-[hsl(var(--gold-light))]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-[hsl(var(--cream))] mb-1">
                    {h.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--cream)/0.65)] leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

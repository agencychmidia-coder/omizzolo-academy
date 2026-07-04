import { Instagram, Linkedin, MapPin, MessageCircle } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="section-dark px-6 md:px-10 lg:px-16 py-14 border-t border-[hsl(var(--gold)/0.15)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <p className="font-display text-xl font-semibold text-[hsl(var(--cream))]">
              Instituto Omizzolo Academy
            </p>
            <p className="mt-3 text-sm text-[hsl(var(--cream)/0.6)] max-w-sm leading-relaxed">
              Educação continuada em Cirurgia de ATM, sob coordenação
              científica do Doutor Guilherme Omizzolo.
            </p>
          </div>

          <div>
            <p className="eyebrow-on-dark mb-4">Contato</p>
            <ul className="space-y-3 text-sm text-[hsl(var(--cream)/0.75)]">
              <li>
                <a
                  href="tel:+5548998193411"
                  className="flex items-center gap-2 hover:text-[hsl(var(--gold-light))] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[hsl(var(--gold))]" />
                  (48) 99819-3411
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[hsl(var(--gold))] shrink-0" />
                <span>
                  <span className="font-medium text-[hsl(var(--cream)/0.9)]">Bewiki</span> — R. Hermann Blumenau, 110,
                  Centro, Florianópolis - SC
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-on-dark mb-4">Redes</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/omizzolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--gold-light))] transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @omizzolo
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/institutoomizzoloacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--gold-light))] transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @institutoomizzoloacademy
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/guilherme-omizzolo-8ba1b2171/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[hsl(var(--cream)/0.75)] hover:text-[hsl(var(--gold-light))] transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  Dr. Guilherme Omizzolo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-joint">
          <span className="divider-joint-dot" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[hsl(var(--cream)/0.45)]">
          <p>© {new Date().getFullYear()} Instituto Omizzolo Academy. Todos os direitos reservados.</p>
          <a href="/politica-de-privacidade" className="hover:text-[hsl(var(--gold-light))] transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

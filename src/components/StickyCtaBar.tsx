import { useEffect, useState } from "react";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section[aria-label='Apresentação do Instituto Omizzolo Academy']");
    const form = document.getElementById("formulario");
    if (!hero || !form) return;

    const observer = new IntersectionObserver(
      ([heroEntry]) => {
        const formRect = form.getBoundingClientRect();
        const formVisible = formRect.top < window.innerHeight && formRect.bottom > 0;
        setVisible(!heroEntry.isIntersecting && !formVisible);
      },
      { threshold: 0 }
    );
    observer.observe(hero);

    const onScroll = () => {
      const formRect = form.getBoundingClientRect();
      const formVisible = formRect.top < window.innerHeight && formRect.bottom > 0;
      const heroRect = hero.getBoundingClientRect();
      setVisible(heroRect.bottom < 0 && !formVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="section-dark border-t border-[hsl(var(--gold)/0.3)] px-5 py-3.5 flex items-center justify-between gap-4 max-w-7xl mx-auto sm:rounded-t-lg sm:mb-0">
        <p className="text-sm text-[hsl(var(--cream)/0.85)] hidden sm:block">
          Vagas limitadas — Fellowship (6–8) e Mentorship (2 por turma)
        </p>
        <p className="text-sm text-[hsl(var(--cream)/0.85)] sm:hidden">
          Vagas limitadas
        </p>
        <button onClick={scrollToForm} className="btn-gold !py-2.5 !px-6 text-sm shrink-0">
          Solicitar Vaga
        </button>
      </div>
    </div>
  );
}

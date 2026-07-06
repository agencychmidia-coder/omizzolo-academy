import { useEffect, useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const WA_URL = "https://wa.me/5548998193411";
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1bTPzUN2WYrw4f-84jikWj5oOnGu5dVMrsUPV1Aa9mD8/edit";

// Envia para Google Sheets via Apps Script Web App.
// Instruções de configuração estão no comentário abaixo do componente.
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL ?? "";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  especialidade: string;
  nivelFormacao: string;
  nivelConhecimento: string;
  cidadeEstado: string;
  comoConheceu: string;
  consentimento: boolean;
};

const initialData: FormData = {
  nome: "",
  email: "",
  telefone: "",
  especialidade: "",
  nivelFormacao: "",
  nivelConhecimento: "",
  cidadeEstado: "",
  comoConheceu: "",
  consentimento: false,
};

const STEPS = ["Seus Dados", "Sua Formação", "Confirmação"];

async function sendToSheets(data: FormData) {
  if (!APPS_SCRIPT_URL) return; // silencia em dev sem configuração
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Apps Script exige no-cors
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        programa: "Fellowship em Artroscopia da ATM",
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });
  } catch {
    // falha silenciosa — não bloqueia o fluxo do usuário
  }
}

export default function FormSection() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string | boolean) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const validateStep = (): boolean => {
    setError(null);
    if (step === 0) {
      if (!data.nome || !data.email || !data.telefone) {
        setError("Preencha nome, e-mail e telefone para continuar.");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        setError("Informe um e-mail válido.");
        return false;
      }
    }
    if (step === 1) {
      if (!data.especialidade || !data.nivelFormacao || !data.nivelConhecimento) {
        setError("Preencha todos os campos para continuar.");
        return false;
      }
    }
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(s + 1, STEPS.length - 1)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    if (!data.consentimento) {
      setError("É necessário aceitar receber atualizações para enviar.");
      return;
    }
    setError(null);
    await sendToSheets(data);
    setSubmitted(true);
    // Redireciona para WhatsApp após 3 segundos
    setRedirecting(true);
    setTimeout(() => { window.location.href = WA_URL; }, 3000);
  };

  if (submitted) {
    return (
      <section id="formulario" className="section-cream section-padding">
        <div className="max-w-lg mx-auto text-center rounded-lg border border-[hsl(var(--border))] bg-white p-12">
          <CheckCircle2 className="h-12 w-12 mx-auto text-[hsl(var(--gold-dark))] mb-5" />
          <h2 className="font-display text-2xl font-semibold mb-3">
            Inscrição recebida!
          </h2>
          <p className="text-[hsl(var(--dark)/0.7)] leading-relaxed mb-6">
            Obrigado, <strong>{data.nome}</strong>! Recebemos seu interesse no{" "}
            <strong>Fellowship em Artroscopia da ATM</strong>. Nossa equipe
            entrará em contato em breve pelo WhatsApp.
          </p>
          {redirecting && (
            <p className="text-sm text-[hsl(var(--dark)/0.5)] mb-5">
              Redirecionando para o WhatsApp em instantes…
            </p>
          )}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex"
          >
            Falar pelo WhatsApp agora
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="section-cream section-padding">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="eyebrow">Inscrição</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 font-semibold">
            Reserve Sua Vaga
          </h2>
          <p className="mt-4 text-[hsl(var(--dark)/0.7)]">
            Fellowship em Artroscopia da ATM · Vagas limitadas — preencha em menos de 2 minutos.
          </p>
        </div>

        {/* Progresso */}
        <div className="flex items-center gap-2 mb-8" aria-hidden="true">
          {STEPS.map((label, i) => (
            <div key={label} className="flex-1">
              <div
                className={`h-1.5 rounded-full transition-colors ${
                  i <= step ? "bg-[hsl(var(--gold-dark))]" : "bg-[hsl(var(--cream-dark))]"
                }`}
              />
              <p
                className={`mt-2 text-[11px] text-center font-medium ${
                  i === step ? "text-[hsl(var(--gold-dark))]" : "text-[hsl(var(--dark)/0.4)]"
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-[hsl(var(--border))] bg-white p-7 md:p-9">
          {/* Step 0 — Dados pessoais */}
          {step === 0 && (
            <fieldset className="space-y-4">
              <legend className="font-display text-lg font-semibold mb-2">
                Seus dados de contato
              </legend>
              <Field label="Nome Completo" value={data.nome} onChange={(v) => update("nome", v)} autoComplete="name" />
              <Field label="Email" type="email" value={data.email} onChange={(v) => update("email", v)} autoComplete="email" />
              <Field label="Telefone/WhatsApp" type="tel" value={data.telefone} onChange={(v) => update("telefone", v)} autoComplete="tel" />
              <Field label="Cidade/Estado" value={data.cidadeEstado} onChange={(v) => update("cidadeEstado", v)} />
            </fieldset>
          )}

          {/* Step 1 — Formação */}
          {step === 1 && (
            <fieldset className="space-y-4">
              <legend className="font-display text-lg font-semibold mb-2">
                Sua formação
              </legend>
              <Field label="Especialidade/Formação" value={data.especialidade} onChange={(v) => update("especialidade", v)} />
              <Select
                label="Nível de Formação"
                value={data.nivelFormacao}
                onChange={(v) => update("nivelFormacao", v)}
                options={["Fellow", "Residente", "Preceptor"]}
              />
              <Select
                label="Nível de Conhecimento em Artroscopia de ATM"
                value={data.nivelConhecimento}
                onChange={(v) => update("nivelConhecimento", v)}
                options={["Iniciante", "Intermediário", "Avançado"]}
              />
            </fieldset>
          )}

          {/* Step 2 — Confirmação */}
          {step === 2 && (
            <fieldset className="space-y-5">
              <legend className="font-display text-lg font-semibold mb-2">
                Quase lá
              </legend>
              <Field
                label="Como conheceu este programa? (opcional)"
                value={data.comoConheceu}
                onChange={(v) => update("comoConheceu", v)}
              />
              <div className="rounded-md bg-[hsl(var(--cream-dark))] p-4 text-sm text-[hsl(var(--dark)/0.75)] space-y-1">
                <p><strong>Programa:</strong> Fellowship em Artroscopia da ATM</p>
                <p><strong>Nome:</strong> {data.nome}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Telefone:</strong> {data.telefone}</p>
              </div>
              <label className="flex items-start gap-3 text-sm text-[hsl(var(--dark)/0.75)]">
                <input
                  type="checkbox"
                  checked={data.consentimento}
                  onChange={(e) => update("consentimento", e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[hsl(var(--gold-dark))]"
                />
                <span>
                  Aceito receber atualizações sobre o programa por e-mail ou
                  WhatsApp. Seus dados são tratados conforme nossa{" "}
                  <a href="/politica-de-privacidade" className="underline hover:text-[hsl(var(--gold-dark))]">
                    Política de Privacidade
                  </a>
                  .
                </span>
              </label>
            </fieldset>
          )}

          {error && (
            <p role="alert" className="mt-4 text-sm text-[hsl(var(--burgundy))]">
              {error}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--dark)/0.6)] disabled:opacity-0"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </button>

            {step < STEPS.length - 1 ? (
              <button type="button" onClick={next} className="btn-gold">
                Continuar
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button type="button" onClick={handleSubmit} className="btn-gold">
                Quero me Inscrever
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", autoComplete,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      <input
        type={type} value={value} autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-[hsl(var(--border))] px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-dark))]"
      />
    </label>
  );
}

function Select({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      <select
        value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-[hsl(var(--border))] px-4 py-2.5 text-sm bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-dark))]"
      >
        <option value="" disabled>Selecione</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </label>
  );
}

/*
──────────────────────────────────────────────────────────
  INTEGRAÇÃO GOOGLE SHEETS — Apps Script Web App
──────────────────────────────────────────────────────────
1. Abra a planilha:
   https://docs.google.com/spreadsheets/d/1bTPzUN2WYrw4f-84jikWj5oOnGu5dVMrsUPV1Aa9mD8

2. Extensões → Apps Script → cole o script abaixo:

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp","Programa","Nome","Email","Telefone","Cidade/Estado",
      "Especialidade","Nível de Formação","Nível de Conhecimento","Como Conheceu"
    ]);
  }

  sheet.appendRow([
    data.timestamp, data.programa, data.nome, data.email,
    data.telefone, data.cidadeEstado, data.especialidade,
    data.nivelFormacao, data.nivelConhecimento, data.comoConheceu
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

3. Implantar → Nova implantação → Tipo: App da Web
   → Executar como: Eu → Quem pode acessar: Qualquer pessoa → Implantar

4. Copie a URL gerada e adicione ao arquivo .env do projeto:
   VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID/exec

──────────────────────────────────────────────────────────
*/

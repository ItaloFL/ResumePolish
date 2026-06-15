import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

interface CategoryResult {
  id: string;
  label: string;
  description: string;
  score: number;
  maxScore: number;
  icon: React.ReactNode;
  problems: string[];
  positives: string[];
  locked?: boolean;
}

interface AnalysisResult {
  score: number;
  fileName: string;
  analyzedAt: string;
  scoreLabel: string;
  categories: CategoryResult[];
  summary: {
    problemsFound: number;
    positivePoints: number;
    suggestedImprovements: number;
  };
  insights: string[];
}

function IconATS() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
      />
    </svg>
  );
}

function IconContent() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function IconStructure() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
}

function IconWriting() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      className="w-3.5 h-3.5 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg
      className="w-3.5 h-3.5 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function IconHistory() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function IconExport() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function IconFile() {
  return (
    <svg
      className="w-3.5 h-3.5 text-neutral-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function IconBulb() {
  return (
    <svg
      className="w-4 h-4 text-amber-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ScoreBar({ score, maxScore }: { score: number; maxScore: number }) {
  const pct = Math.round((score / maxScore) * 100);
  const color =
    pct >= 80
      ? "#22c55e"
      : pct >= 60
        ? "#3b82f6"
        : pct >= 40
          ? "#f59e0b"
          : "#ef4444";

  return (
    <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

// ─── Score color helper ───────────────────────────────────────────────────────

function scoreColor(score: number, max: number) {
  const pct = (score / max) * 100;
  if (pct >= 80) return "text-emerald-400";
  if (pct >= 60) return "text-blue-400";
  if (pct >= 40) return "text-amber-400";
  return "text-red-400";
}

function CategoryCard({
  cat,
  defaultOpen = false,
}: {
  cat: CategoryResult;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-[#070707] border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-neutral-700" : "border-neutral-900 hover:border-neutral-800"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-center gap-3 text-left cursor-pointer group"
      >
        <div
          className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all ${open ? "bg-blue-950/20 border-blue-900/40 text-blue-400" : "bg-[#111] border-neutral-800 text-neutral-500 group-hover:text-neutral-300"}`}
        >
          {cat.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-mono text-neutral-200 font-semibold">
            {cat.label}
          </p>
          <p className="text-xs text-neutral-600 mt-0.5 truncate">
            {cat.description}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`text-sm font-mono font-bold ${scoreColor(cat.score, cat.maxScore)}`}
          >
            {cat.score}/{cat.maxScore}
          </span>
          <IconChevron open={open} />
        </div>
      </button>

      <div className="px-5 pb-1">
        <ScoreBar score={cat.score} maxScore={cat.maxScore} />
      </div>

      {open && (
        <div className="px-5 pt-5 pb-5 border-t border-neutral-900 mt-4 space-y-5">
          {cat.problems.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-red-500 rounded-full" />
                <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
                  Problemas encontrados
                </span>
              </div>
              <ul className="space-y-2">
                {cat.problems.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-neutral-400 font-mono leading-relaxed"
                  >
                    <span className="text-red-500 mt-0.5">
                      <IconX />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cat.positives.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-emerald-500 rounded-full" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Pontos positivos
                </span>
              </div>
              <ul className="space-y-2">
                {cat.positives.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-neutral-400 font-mono leading-relaxed"
                  >
                    <span className="text-emerald-500 mt-0.5">
                      <IconCheck />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Mock data (substitua pelo retorno real da API) ───────────────────────────

const MOCK_RESULT: AnalysisResult = {
  score: 82,
  fileName: "curriculo-italo.pdf",
  analyzedAt: new Date().toISOString(),
  scoreLabel: "Bom",
  summary: {
    problemsFound: 7,
    positivePoints: 14,
    suggestedImprovements: 4,
  },
  insights: [
    "Stack técnico moderno e bem alinhado com o mercado (React, Node.js, TypeScript, PostgreSQL).",
    "Inconsistência crítica nas datas: experiências com período final 'Mar 2026' — recomenda-se atualizar para 'Jun 2026 - Presente' ou usar datas reais de encerramento.",
    "Ausência de métricas quantitativas em 2 das 3 experiências listadas reduz o impacto junto a filtros ATS mais rigorosos.",
  ],
  categories: [
    {
      id: "ats",
      label: "Compatibilidade ATS",
      description:
        "Avalia se o currículo será parseado corretamente por sistemas de rastreamento",
      score: 22,
      maxScore: 25,
      icon: <IconATS />,
      problems: [
        "Uso de tabelas para organizar contato — alguns parsers ATS não leem corretamente.",
        "Fonte personalizada pode ser ignorada ou distorcida em leitores automatizados.",
        "Seção de habilidades sem hierarquia clara entre skills principais e secundárias.",
      ],
      positives: [
        "Formato PDF com texto selecionável — não é imagem escaneada.",
        "Seções com títulos padronizados (Experiência, Formação, Habilidades).",
        "Sem colunas múltiplas no corpo principal do documento.",
        "Uso consistente de bullets em experiências profissionais.",
        "Dados de contato presentes no topo do documento.",
      ],
    },
    {
      id: "content",
      label: "Conteúdo e Impacto",
      description:
        "Qualidade do conteúdo, quantificação de resultados e palavras-chave técnicas",
      score: 18,
      maxScore: 25,
      icon: <IconContent />,
      problems: [
        "Apenas 1 das 3 experiências contém métricas quantitativas (ex: 60% de redução de carga).",
        "Verbos de ação fracos em alguns bullets: 'participei de', 'ajudei a' — prefira 'implementei', 'liderei'.",
        "Palavras-chave como 'CI/CD', 'Docker' e 'Jest' aparecem sem contexto de uso real.",
      ],
      positives: [
        "Stack técnico completo e relevante para vagas frontend sênior.",
        "Projeto Orderly demonstra experiência com arquitetura de microsserviços.",
        "Menção a Stripe e RabbitMQ diferencia o perfil de candidatos júnior.",
        "Resultado mensurável no Portal Atribuna (60% de redução de carga DB) — excelente.",
      ],
    },
    {
      id: "structure",
      label: "Estrutura e Seções",
      description: "Organização, informações de contato e links profissionais",
      score: 16,
      maxScore: 20,
      icon: <IconStructure />,
      problems: [
        "Seção de resumo profissional ausente — ATS e recrutadores esperam um parágrafo de abertura.",
        "LinkedIn e GitHub não estão como links clicáveis no PDF — apenas texto puro.",
      ],
      positives: [
        "Ordem das seções correta: contato → experiência → formação → habilidades.",
        "Nomes de empresas e cargos claramente distintos visualmente.",
        "Localização e disponibilidade para remoto informados.",
        "Projetos pessoais listados como seção separada — bom para candidatos sem muita experiência formal.",
      ],
    },
    {
      id: "writing",
      label: "Escrita e Clareza",
      description:
        "Ortografia, gramática, consistência e clareza da comunicação",
      score: 13,
      maxScore: 15,
      icon: <IconWriting />,
      problems: [
        "Alternância entre português e inglês nos títulos das seções sem critério claro.",
        "Bullet 'Responsável pelo desenvolvimento de...' repetido 3x — varie a construção.",
      ],
      positives: [
        "Sem erros ortográficos detectados no corpo do texto.",
        "Frases curtas e diretas na maioria das experiências.",
        "Uso correto de termos técnicos em inglês quando necessário.",
        "Consistência no uso de maiúsculas nos nomes de tecnologias (React, TypeScript, etc.).",
      ],
    },
  ],
};

// ─── Main component ───────────────────────────────────────────────────────────

export function Result() {
  const navigate = useNavigate();
  const result = MOCK_RESULT; // substitua pelo estado real vindo da análise

  const scoreColorMain =
    result.score >= 80
      ? "text-emerald-400"
      : result.score >= 60
        ? "text-blue-400"
        : result.score >= 40
          ? "text-amber-400"
          : "text-red-400";

  const scoreRingColor =
    result.score >= 80
      ? "#22c55e"
      : result.score >= 60
        ? "#3b82f6"
        : result.score >= 40
          ? "#f59e0b"
          : "#ef4444";

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 flex flex-col">
      <Header />

      <main className="max-w-[84rem] mx-auto w-full px-6 sm:px-8 py-9 flex-1 relative">
        <div className="absolute top-0 left-1/3 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

        {/* ── Hero compacto e horizontal ── */}
        <div className="relative bg-[#070707] border border-neutral-900 rounded-2xl mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row">
            {/* Bloco de score à esquerda, estilo "selo" */}
            <div className="sm:w-56 shrink-0 flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-4 p-6 sm:border-r border-neutral-900">
              <div className="flex items-baseline gap-2">
                <span
                  className={`text-5xl font-mono font-bold ${scoreColorMain}`}
                >
                  {result.score}
                </span>
                <span className="text-sm text-neutral-600 font-mono">/100</span>
              </div>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                style={{
                  color: scoreRingColor,
                  backgroundColor: `${scoreRingColor}1A`,
                  border: `1px solid ${scoreRingColor}33`,
                }}
              >
                {result.scoreLabel}
              </div>
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 text-xs font-mono text-blue-500 font-bold tracking-widest px-3 py-1.5 rounded-md uppercase">
                  Análise Concluída
                </div>
                <div className="flex items-center gap-2">
                  <IconFile />
                  <span className="text-xs font-mono text-neutral-500">
                    {result.fileName}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-tight">
                {result.score >= 80
                  ? "Seu currículo está forte!"
                  : result.score >= 60
                    ? "Bom progresso, mas há ajustes."
                    : "Seu currículo precisa de atenção."}
              </h1>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                Pequenos ajustes podem levar o resultado ainda mais longe.
              </p>

              {/* Resumo rápido movido para o hero, como tags inline */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-neutral-500">Problemas</span>
                  <span className="font-bold text-red-400">
                    {result.summary.problemsFound}
                  </span>
                </div>
                <div className="w-px h-4 bg-neutral-800 self-center" />
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-neutral-500">Positivos</span>
                  <span className="font-bold text-emerald-400">
                    {result.summary.positivePoints}
                  </span>
                </div>
                <div className="w-px h-4 bg-neutral-800 self-center" />
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-neutral-500">Melhorias</span>
                  <span className="font-bold text-amber-400">
                    {result.summary.suggestedImprovements}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── Sidebar agora à esquerda, com Ações primeiro ── */}
          <div className="lg:col-span-4 space-y-5 lg:order-1">
            <div className="bg-[#070707] border border-neutral-900 rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Ações
              </div>

              <button
                onClick={() => navigate("/")}
                className="w-full py-3 bg-[#111] hover:bg-[#161616] border border-neutral-800 text-neutral-200 font-mono text-xs rounded-xl transition-colors font-medium flex items-center justify-center gap-2"
              >
                <IconRefresh />
                Nova análise
              </button>

              <button
                onClick={() => navigate("/historico")}
                className="w-full py-3 bg-[#111] hover:bg-[#161616] border border-neutral-800 text-neutral-200 font-mono text-xs rounded-xl transition-colors font-medium flex items-center justify-center gap-2"
              >
                <IconHistory />
                Ver histórico
              </button>

              <button className="w-full py-3 bg-[#111] hover:bg-[#161616] border border-neutral-800 text-neutral-200 font-mono text-xs rounded-xl transition-colors font-medium flex items-center justify-center gap-2">
                <IconExport />
                Exportar PDF
              </button>
            </div>

            <div className="bg-[#070707] border border-neutral-900 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <IconBulb />
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  Insights da análise
                </span>
              </div>
              <ul className="space-y-3">
                {result.insights.map((insight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed"
                  >
                    <span className="text-amber-500 font-mono text-xs mt-0.5 shrink-0">
                      →
                    </span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Categorias à direita, ocupando mais espaço ── */}
          <div className="lg:col-span-8 space-y-4 lg:order-2">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-2">
              Categorias de avaliação
            </div>

            {result.categories.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

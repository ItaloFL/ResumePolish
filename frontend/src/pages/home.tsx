import React, { useState } from "react";
import { Header } from "../components/header";
import { CircularProgress } from "../components/circular-progress";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const [activeTab, setActiveTab] = useState<"only" | "with-job">("only");
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [analysesUsed] = useState<number>(1);
  const [showPix, setShowPix] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size <= 1024 * 1024) {
        setFile(selectedFile);
      } else {
        alert("O arquivo deve ter no máximo 1MB.");
      }
    }
  };

  const handleAnalyze = () => {
    const token = localStorage.getItem("accessToken");

    if (!file) {
      alert("Selecione um arquivo primeiro.");
      return;
    }

    if (!token) {
      navigate("/login", { state: { from: "/" } });
      return;
    }

    // segue com a análise...
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 flex flex-col">
      <Header />

      <main className="max-w-[84rem] mx-auto w-full px-6 sm:px-8 py-9 flex-1 relative">
        <div className="absolute top-0 left-1/3 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="space-y-4 mb-8">
          <div className="inline-block bg-neutral-900 border border-neutral-800 text-xs font-mono text-blue-500 font-bold tracking-widest px-3 py-1.5 rounded-md uppercase">
            Analisador de Currículo
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Descubra como melhorar seu{" "}
            <span className="font-normal font-mono text-blue-500">
              currículo.
            </span>
          </h1>
          <p className="text-neutral-400 text-normal md:text-lg max-w-3xl leading-relaxed">
            Otimize seu perfil profissional contra os filtros de triagem
            automatizada (ATS) mais rígidos do mercado global e nacional de
            tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragOver(false);
                }}
                className={`relative bg-[#070707] border border-dashed rounded-2xl p-16 text-center transition-all duration-300 flex flex-col items-center justify-center min-h-[320px] group ${
                  isDragOver
                    ? "border-blue-500 bg-blue-950/10"
                    : "border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileChange}
                />

                <div className="space-y-5">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-black border border-neutral-800 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-950/20 transition-all">
                    <svg
                      className="w-6 h-6 text-neutral-500 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </div>

                  <div className="space-y-2">
                    {file ? (
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-blue-400 font-mono bg-blue-950/20 border border-blue-900/30 px-4 py-2 rounded-lg text-sm inline-block max-w-sm truncate">
                          {file.name}
                        </span>
                        <label
                          htmlFor="file-upload"
                          className="text-xs text-neutral-500 hover:text-neutral-300 cursor-pointer underline underline-offset-4 font-mono"
                        >
                          Substituir arquivo
                        </label>
                      </div>
                    ) : (
                      <p className="text-sm font-mono text-neutral-300">
                        <label
                          htmlFor="file-upload"
                          className="text-blue-500 hover:text-blue-400 underline cursor-pointer transition-colors"
                        >
                          Arraste seu currículo aqui
                        </label>{" "}
                        ou clique para navegar
                      </p>
                    )}
                    <p className="text-xs text-neutral-600 font-mono uppercase tracking-widest pt-1">
                      Apenas arquivos PDF • Até 1MB
                    </p>
                  </div>
                </div>
              </div>

              {activeTab === "with-job" && (
                <div className="space-y-3 transition-all duration-300 animate-fadeIn">
                  <label className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                    Descrição / Requisitos da Vaga Alvo
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Cole aqui os requisitos, qualificações ou a descrição completa da vaga..."
                    className="w-full min-h-[160px] bg-[#070707] border border-neutral-800 rounded-2xl p-5 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>
              )}
            </div>

            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                Esteira de Funcionamento
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    num: "1",
                    title: "Envio do Currículo",
                    desc: "Faça o upload em PDF. Para manter a ferramenta rápida e os custos da IA viáveis, aceitamos arquivos de até 1MB.",
                  },
                  {
                    num: "2",
                    title: "Leitura da IA",
                    desc: "Analisamos seu perfil com os mesmos critérios dos robôs de RH, focando em palavras-chave e formatação estrutural.",
                  },
                  {
                    num: "3",
                    title: "Plano de Ação",
                    desc: "Receba um feedback humano e direto ao ponto indicando exatamente o que ajustar para vencer a triagem.",
                  },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="p-6 rounded-2xl border border-neutral-900 bg-[#070707] flex flex-col h-full items-start"
                  >
                    <span className="mb-5 text-xs font-mono bg-[#111] text-blue-500 border border-neutral-800 w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0 shadow-sm shadow-blue-900/20">
                      {step.num}
                    </span>
                    <div className="space-y-2 flex-1">
                      <h4 className="text-sm font-mono text-neutral-200 font-bold">
                        {step.title}
                      </h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-900">
              <div className="text-xs font-mono text-neutral-500 flex items-center gap-2.5">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                Criptografia de ponta a ponta • Processamento estimado em ~40s
              </div>
              <button
                onClick={handleAnalyze}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm tracking-wider px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-950/60 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Iniciar análise técnica →
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#070707] border border-neutral-900 rounded-2xl p-6 space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Última varredura
              </div>
              <div className="flex items-center gap-5">
                <CircularProgress
                  score={82}
                  size={56}
                  strokeWidth={5}
                  showLabel={false}
                />
                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="text-sm text-neutral-100 font-mono truncate">
                    curriculo_sênior_dev.pdf
                  </p>
                  <p className="text-xs text-neutral-500">
                    Analisado há 1 sem •{" "}
                    <span className="text-emerald-500 font-semibold">
                      Score Saudável
                    </span>
                  </p>
                </div>
              </div>
              <Link to="historico">
                <button className="w-full py-3 bg-[#111] hover:bg-[#161616] border border-neutral-800 text-neutral-200 font-mono text-xs rounded-xl transition-colors font-medium">
                  Visualizar historico completo →
                </button>
              </Link>
            </div>

            <div className="bg-[#070707] border border-neutral-900 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Uso da Cota Mensal
              </div>
              <p className="text-sm text-neutral-400 font-mono">
                Consumido:{" "}
                <span className="text-white font-bold">
                  {analysesUsed} de 5
                </span>{" "}
                créditos gratuitos.
              </p>
              <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-500"
                  style={{ width: `${(analysesUsed / 5) * 100}%` }}
                />
              </div>
              <button className="w-full py-3 bg-[#111] hover:bg-[#161616] border border-neutral-800 text-blue-400 font-mono text-xs rounded-xl transition-colors font-semibold">
                Adquirir mais créditos →
              </button>
            </div>

            <div className="bg-[#070707] border border-neutral-900 rounded-2xl p-6 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="text-[15px] font-mono uppercase tracking-wider text-blue-500 font-bold flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Financie esta ferramenta
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Este projeto é construído e mantido de forma 100% independente
                para a comunidade. Cada análise consome processamento de
                servidores dedicados de IA. Ajude-nos a manter a infraestrutura
                rodando e gratuita para todos.
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowPix(!showPix)}
                  className="flex-1 py-3 bg-[#111] hover:bg-[#161616] border border-neutral-800 text-neutral-200 font-mono text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 font-medium cursor-pointer"
                >
                  {showPix ? "Ocultar PIX" : "Doar via PIX"}
                </button>
                <a
                  href="https://ko-fi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-blue-950/20 hover:bg-blue-950/40 border border-blue-900/40 text-blue-400 font-mono text-xs rounded-xl transition-all text-center font-semibold"
                >
                  Ko-fi Hub ↗
                </a>
              </div>

              {showPix && (
                <div className="pt-4 border-t border-neutral-900 space-y-4 animate-fadeIn">
                  <div className="bg-black border border-neutral-900 rounded-xl p-4 flex flex-col items-center justify-center space-y-3">
                    <div className="w-32 h-32 bg-white p-1.5 rounded-lg flex items-center justify-center relative group shadow-inner">
                      <div className="grid grid-cols-5 gap-1 w-full h-full opacity-90">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div
                            key={i}
                            className={`bg-black ${i % 2 === 0 || i % 5 === 0 ? "opacity-100" : "opacity-10"}`}
                          />
                        ))}
                      </div>
                      <span className="absolute inset-0 flex items-center justify-center bg-black/90 text-[10px] text-blue-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                        Apoio Direto
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
                      QR CODE PIX INSTITUCIONAL
                    </span>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText("suachavepix@dominio.com")
                      }
                      className="text-xs font-mono text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Copiar chave Copia-e-Cola
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React, { useState } from "react";
import { Header } from "../components/header";
import { Link } from "react-router-dom";

export function HistoricoList() {
  const historyData = [
    {
      id: 1,
      score: 82,
      label: "Saudável",
      date: "02 de jun. de 2026",
      type: "Nacional",
      ats: 22,
      cont: 18,
    },
    {
      id: 2,
      score: 75,
      label: "Bom",
      date: "01 de abr. de 2026",
      type: "Nacional",
      ats: 23,
      cont: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans antialiased">
      <Header />

      <main className="max-w-[84rem] mx-auto w-full px-6 sm:px-8 py-9">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/3 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Histórico de{" "}
              <span className="font-normal font-mono text-blue-500">
                Análises
              </span>
            </h1>
            <p className="text-neutral-400 text-normal md:text-lg max-w-3xl leading-relaxed">
              Gerencie e revise suas otimizações anteriores
            </p>
          </div>
          <Link
            to="/"
            className="text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>

        {/* Lista */}
        <div className="grid gap-4">
          {historyData.map((item) => (
            <div
              key={item.id}
              className="bg-[#070707] border border-neutral-900 rounded-2xl p-6 flex items-center justify-between group hover:border-neutral-700 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl border border-neutral-800 flex items-center justify-center font-mono font-bold text-blue-500 bg-black">
                  {item.score}
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    Currículo Otimizado
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1">
                    {item.date} • {item.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right font-mono">
                  <p className="text-[10px] uppercase text-neutral-600">
                    ATS Score
                  </p>
                  <p className="text-sm text-neutral-300">{item.ats}/25</p>
                </div>
                <div className="text-right font-mono">
                  <p className="text-[10px] uppercase text-neutral-600">
                    Conteúdo
                  </p>
                  <p className="text-sm text-neutral-300">{item.cont}/25</p>
                </div>
                <button className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg text-xs font-mono border border-neutral-800 transition-colors">
                  <Link to={"/result"}>Ver detalhes</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

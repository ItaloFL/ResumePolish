import React from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full" />
        <svg
          className="w-24 h-24 text-blue-500 relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h1 className="text-6xl font-mono font-bold text-white mb-4">404</h1>
      <p className="text-neutral-400 font-mono text-lg mb-8 max-w-sm">
        O caminho que você procura não existe nesta estrutura.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-mono text-sm rounded-xl transition-all flex items-center gap-2 hover:border-blue-500/50"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Voltar para a Home
      </button>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Header } from "../components/header";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = (location.state as any)?.from || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // try {
    //   // const { data } = await api.post("/auth/login", { email, password });

    //   localStorage.setItem("accessToken", data.accessToken);
    //   localStorage.setItem("refreshToken", data.refreshToken);

    //   navigate(from, { replace: true });
    // } catch (err: any) {
    //   setError(err.response?.data?.message || "Email ou senha inválidos.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-12 relative">
        <div className="absolute top-0 left-1/3 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md space-y-8 relative">
          <div className="space-y-2 text-center">
            <div className="inline-block bg-neutral-900 border border-neutral-800 text-xs font-mono text-blue-500 font-bold tracking-widest px-3 py-1.5 rounded-md uppercase">
              Acesso à plataforma
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
              Entrar na sua{" "}
              <span className="font-normal font-mono text-blue-500">
                conta.
              </span>
            </h1>
            <p className="text-neutral-500 text-sm">
              Faça login para analisar seu currículo com IA.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#070707] border border-neutral-900 rounded-2xl p-8 space-y-5"
          >
            {error && (
              <div className="bg-red-950/30 border border-red-900/40 text-red-400 text-sm font-mono px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                  Senha
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-mono text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-sm tracking-wider px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-950/60 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              {loading ? "Entrando..." : "Entrar →"}
            </button>
          </form>

          <p className="text-center text-sm text-neutral-500 font-mono">
            Não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-blue-500 hover:text-blue-400 underline underline-offset-4 transition-colors"
            >
              Criar conta
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

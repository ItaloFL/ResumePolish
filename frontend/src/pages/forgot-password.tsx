import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/header";

type Step = "email" | "code" | "success";

export function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Passo 1: envia código pro email
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // try {
    //   await api.post("/auth/forgot-password", { email });
    //   setStep("code");
    // } catch (err: any) {
    //   setError(
    //     err.response?.data?.message ||
    //       "Erro ao enviar código. Tente novamente.",
    //   );
    // } finally {
    //   setLoading(false);
    // }
  };

  // Passo 2: valida código + define nova senha
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (newPassword.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    setLoading(true);

    // try {
    //   await api.post("/auth/reset-password", {
    //     email,
    //     code,
    //     newPassword,
    //   });
    //   setStep("success");
    // } catch (err: any) {
    //   setError(err.response?.data?.message || "Código inválido ou expirado.");
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
              Recuperação de senha
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
              {step === "email" && (
                <>
                  Esqueceu sua{" "}
                  <span className="font-normal font-mono text-blue-500">
                    senha?
                  </span>
                </>
              )}
              {step === "code" && (
                <>
                  Crie uma{" "}
                  <span className="font-normal font-mono text-blue-500">
                    nova senha.
                  </span>
                </>
              )}
              {step === "success" && (
                <>
                  Senha{" "}
                  <span className="font-normal font-mono text-blue-500">
                    atualizada.
                  </span>
                </>
              )}
            </h1>
            <p className="text-neutral-500 text-sm">
              {step === "email" &&
                "Informe seu email e enviaremos um código de verificação."}
              {step === "code" &&
                `Enviamos um código para ${email}. Insira-o abaixo junto com sua nova senha.`}
              {step === "success" &&
                "Sua senha foi alterada com sucesso. Você já pode fazer login."}
            </p>
          </div>

          {step === "email" && (
            <form
              onSubmit={handleSendCode}
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-sm tracking-wider px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-950/60 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {loading ? "Enviando..." : "Enviar código →"}
              </button>
            </form>
          )}

          {step === "code" && (
            <form
              onSubmit={handleResetPassword}
              className="bg-[#070707] border border-neutral-900 rounded-2xl p-8 space-y-5"
            >
              {error && (
                <div className="bg-red-950/30 border border-red-900/40 text-red-400 text-sm font-mono px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                  Código de verificação
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                  placeholder="000000"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-center text-lg tracking-[0.5em] text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                  Nova senha
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                  Confirmar nova senha
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-sm tracking-wider px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-950/60 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {loading ? "Salvando..." : "Redefinir senha →"}
              </button>

              <button
                type="button"
                onClick={() => setStep("email")}
                className="w-full text-center text-xs font-mono text-neutral-500 hover:text-neutral-300 underline underline-offset-4 transition-colors"
              >
                Reenviar código / trocar email
              </button>
            </form>
          )}

          {step === "success" && (
            <div className="bg-[#070707] border border-neutral-900 rounded-2xl p-8 space-y-6 text-center">
              <div className="mx-auto w-14 h-14 rounded-xl bg-emerald-950/20 border border-emerald-900/40 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-500"
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
              </div>

              <button
                onClick={() => navigate("/login")}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm tracking-wider px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-950/60 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Ir para o login →
              </button>
            </div>
          )}

          {step !== "success" && (
            <p className="text-center text-sm text-neutral-500 font-mono">
              Lembrou sua senha?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-400 underline underline-offset-4 transition-colors"
              >
                Voltar ao login
              </Link>
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b border-neutral-900 bg-black/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-[80rem] mx-auto flex items-center justify-between">
        <div>
          <Link className="flex items-center gap-3" to={"/"}>
            <div className="h-7 w-7 rounded bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <span className="text-black font-mono text-sm font-black">R</span>
            </div>
            <span className="text-sm font-semibold tracking-wider font-mono text-white flex items-center gap-2">
              RESUME<span className="text-blue-500">POLISH</span>
            </span>
          </Link>
        </div>

        <div>
          <a
            href="https://ko-fi.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            Apoiar Projeto ↗
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-5xl w-full h-16 border-b border-b-zinc-800 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-3">
        <a
          href="/"
          className={`
            font-bold transition-colors
            ${pathname == "/" ? "text-white" : "text-zinc-500 hover:text-white"}
          `}
        >
          Home
        </a>
        <span>/</span>
        <a
          href="/about"
          className={`
            font-bold transition-colors
            ${
              pathname == "/about"
                ? "text-white"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          About
        </a>
        <span>/</span>
        <a
          href="/projects"
          className={`
            font-bold transition-colors
            ${
              pathname == "/projects"
                ? "text-white"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          Projects
        </a>
        <span>/</span>
        <a
          href="/contact"
          className={`
            font-bold transition-colors
            ${
              pathname == "/contact"
                ? "text-white"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          Contact
        </a>
      </div>
      <div className="flex flex-row items-center gap-3">
        <a
          href="/blog"
          className={`
            font-bold transition-colors
            ${
              pathname == "/blog"
                ? "text-white"
                : "text-zinc-500 hover:text-white"
            }
          `}
        >
          Blog
        </a>
        <span>\</span>
        <a
          href="https://github.com/rxstrix"
          className="font-bold text-zinc-500 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <span>\</span>
        <a
          href="/"
          className="font-bold text-zinc-500 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <span>\</span>
        <a
          href="https://t.me/rxstrix"
          className="font-bold text-zinc-500 hover:text-white transition-colors"
        >
          Telegram
        </a>
      </div>
    </div>
  );
};

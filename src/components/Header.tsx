"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-gray-900"
        >
          Hoshico Notes
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-gray-500">
          <Link href="/about" className="transition hover:text-gray-900">
            about
          </Link>
          <span
            className="hidden h-5 w-px bg-gray-200 sm:block"
            aria-hidden="true"
          />
          <div className="flex items-center gap-3 text-gray-500">
            <a
              href="https://github.com/hoshico"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-gray-900"
            >
              <Github className="h-5 w-5" strokeWidth={1.6} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

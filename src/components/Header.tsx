"use client";

import ViewTransitionLink from "./ViewTransitionLink";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <ViewTransitionLink
          href="/"
          transitionTypes={["nav-back"]}
          className="text-2xl font-semibold tracking-tight text-gray-900"
        >
          Hoshico Notes
        </ViewTransitionLink>
        <nav className="flex items-center gap-5 text-sm font-medium text-gray-500">
          <ViewTransitionLink
            href="/about"
            transitionTypes={["nav-forward"]}
            className="transition hover:text-gray-900"
          >
            about
          </ViewTransitionLink>
        </nav>
      </div>
    </header>
  );
}

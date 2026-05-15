"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/products", label: "Products" },
  { href: "/science", label: "Science" },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white transition hover:text-emerald-200" onClick={() => setOpen(false)}>
          FungMind
        </Link>
        <nav className="hidden items-center gap-7 text-sm sm:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/58 transition hover:text-emerald-200">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white sm:hidden"
          aria-expanded={open}
          aria-controls="fungmind-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden>{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav id="fungmind-mobile-nav" className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 sm:hidden" aria-label="Mobile">
          <p className="px-2 pb-2 text-xs text-white/40">Research and wellness education — not medical treatment claims.</p>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

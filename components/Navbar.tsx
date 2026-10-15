"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">

          {/* ─────────────────────────────────────────
              BRAND
          ───────────────────────────────────────── */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
           {/* Logo */}
          <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-xl">
            <Image
              src="/xcode_logo.png"
              alt="Xcode logo"
              width={160}
              height={140}
              priority
              className="h-46 w-46 object-contain transition duration-300 group-hover:scale-105"
            />
          </div>

            
          </Link>

          {/* ─────────────────────────────────────────
              DESKTOP NAVIGATION
          ───────────────────────────────────────── */}
          <div className="hidden items-center md:flex">

            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group ml-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Get Started

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* ─────────────────────────────────────────
              MOBILE MENU BUTTON
          ───────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-slate-200 transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-slate-200 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-slate-200 transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* ─────────────────────────────────────────
            MOBILE NAVIGATION
        ───────────────────────────────────────── */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] border-t border-white/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-5">

            {/* Mobile navigation links */}
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Get Started
              <span>→</span>
            </Link>

            {/* Small brand statement */}
            <div className="mt-5 border-t border-white/10 pt-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Secure · Build · Transform
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-slate-950">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <Image
        src="/Hero.jpg"
        alt="qLEsh Technology"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark cinematic treatment */}
      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />


      

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-6 py-24 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =================================================
              LEFT
          ================================================== */}
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                Technology Solutions
              </span>
            </motion.div>


            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              We engineer
              <span className="block text-cyan-400">
                what&apos;s next.
              </span>
            </motion.h1>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              qLEsh delivers software, cloud, cybersecurity, and IT
              solutions designed to solve complex challenges, strengthen
              businesses, and create technology that moves organisations
              forward.
            </motion.p>


            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                Start a conversation

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>


              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                Explore solutions

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </motion.div>


            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6"
            >

              <Capability label="Software Engineering" />

              <Capability label="Cloud & Infrastructure" />

              <Capability label="Cybersecurity" />

              <Capability label="IT Services" />

            </motion.div>

          </div>


          {/* =================================================
              RIGHT — VISUAL ANCHOR
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >

            {/* Outer technical frame */}
            <div className="absolute -inset-5 border border-white/10" />

            {/* Corner accents */}
            <div className="absolute -right-5 -top-5 z-20 h-20 w-20 border-r-2 border-t-2 border-cyan-400" />

            <div className="absolute -bottom-5 -left-5 z-20 h-20 w-20 border-b-2 border-l-2 border-cyan-400" />


            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-slate-900">

              <Image
                src="/Hero.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />


              {/* Visual information */}
              <div className="absolute bottom-0 left-0 right-0 p-7">

                <div className="mb-5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    qLEsh / Technology
                  </span>
                </div>

                <p className="max-w-xs text-2xl font-semibold leading-tight text-white">
                  Building technology for a smarter future.
                </p>

              </div>

            </div>


            

          </motion.div>

        </div>
      </div>


      {/* =====================================================
          BOTTOM MARKER
      ====================================================== */}
      <div className="absolute bottom-7 left-6 z-10 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 lg:flex">
        <span className="h-px w-8 bg-slate-700" />
        Engineering a smarter future.
      </div>

    </section>
  );
}


/* ============================================================
   CAPABILITY
============================================================ */

function Capability({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2 text-sm text-slate-400">
      <span className="h-1.5 w-1.5 bg-cyan-400" />
      {label}
    </span>
  );
}
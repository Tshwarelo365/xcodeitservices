"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const capabilities = [
    {
      number: "01",
      title: "Cybersecurity",
      description:
        "Protecting systems, identities, data, and business operations through practical security solutions.",
    },
    {
      number: "02",
      title: "Cloud Solutions",
      description:
        "Designing scalable and resilient cloud environments that support modern business operations.",
    },
    {
      number: "03",
      title: "Backup & Recovery",
      description:
        "Helping businesses protect critical information and recover quickly when disruption occurs.",
    },
    {
      number: "04",
      title: "IT Infrastructure",
      description:
        "Building and supporting reliable infrastructure, networks, systems, and technical environments.",
    },
    {
      number: "05",
      title: "Software Development",
      description:
        "Engineering purpose-built software, applications, APIs, and integrations around business requirements.",
    },
    {
      number: "06",
      title: "IT Support",
      description:
        "Providing practical technical support that keeps users, systems, and operations moving.",
    },
  ];

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950">

        {/* Technical grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  About qLEsh
                </p>
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Technology should
                <span className="block text-cyan-400">
                  move business forward.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                qLEsh is a technology solutions company focused on
                engineering practical software, cloud, cybersecurity,
                infrastructure, and IT solutions that solve real business
                challenges.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
                >
                  Work with us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
                >
                  Explore our services
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >

              <div className="absolute -inset-5 border border-white/10" />

              <div className="absolute -right-5 -top-5 z-20 h-20 w-20 border-r-2 border-t-2 border-cyan-400" />

              <div className="absolute -bottom-5 -left-5 z-20 h-20 w-20 border-b-2 border-l-2 border-cyan-400" />

              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-slate-900">

                <Image
                  src="/Hero.jpg"
                  alt="qLEsh technology"
                  fill
                  className="object-cover object-center opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-cyan-400" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      qLEsh / Technology
                    </span>
                  </div>

                  <p className="mt-5 max-w-sm text-2xl font-semibold leading-tight text-white">
                    Engineering technology with purpose.
                  </p>

                </div>

              </div>

              

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR APPROACH
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                  Our approach
                </p>
              </div>

              <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Understand the problem.
                <span className="block text-slate-400">
                  Then engineer the solution.
                </span>
              </h2>

            </motion.div>


            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6 text-lg leading-8 text-slate-600"
            >

              <p>
                Technology is most valuable when it solves a real problem.
                That is why we start by understanding how an organisation
                operates before deciding what technology should be used.
              </p>

              <p>
                We look at the people, processes, systems, infrastructure,
                security requirements, and long-term objectives that shape
                the challenge.
              </p>

              <p>
                From there, we design solutions that are practical,
                maintainable, secure, and capable of evolving as the
                organisation grows.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING PRINCIPLES
      ====================================================== */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              How we think
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Built around better outcomes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Good technology is not about using the newest tool. It is
              about choosing the right technology to create measurable
              value.
            </p>

          </div>


          <div className="mt-16 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">

            <Principle
              number="01"
              title="Understand"
              text="We start with the business problem, not the technology."
            />

            <Principle
              number="02"
              title="Engineer"
              text="We design practical solutions around real requirements."
            />

            <Principle
              number="03"
              title="Evolve"
              text="We build with scalability, security, and the future in mind."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Our capabilities
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                One technology partner.
                <span className="block text-slate-400">
                  Multiple capabilities.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-slate-600">
              Bringing together technology disciplines to help businesses
              build, protect, operate, and scale.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((capability, index) => (

              <motion.div
                key={capability.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-slate-200/50"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold tracking-[0.15em] text-cyan-600">
                    {capability.number}
                  </span>

                  <span className="text-slate-300 transition-colors duration-300 group-hover:text-cyan-400">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-semibold text-slate-900">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {capability.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DARK STATEMENT
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950">

        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">

          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              The qLEsh philosophy
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology is not the destination.
              <span className="block text-cyan-400">
                It is what gets you there.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              We believe technology should make organisations more secure,
              more efficient, more resilient, and better prepared for what
              comes next.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">

          <div className="flex flex-col justify-between gap-10 border-t border-slate-200 pt-12 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Start a conversation
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Have a technology challenge?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Let&apos;s understand the problem and find a practical way
                forward.
              </p>

            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
            >
              Talk to qLEsh
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ============================================================
   PRINCIPLE CARD
============================================================ */

function Principle({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-8 lg:p-10">

      <span className="text-xs font-semibold tracking-[0.15em] text-cyan-600">
        {number}
      </span>

      <h3 className="mt-10 text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}
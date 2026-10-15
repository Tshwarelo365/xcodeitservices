"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Purpose-built software engineered around your business processes, operational requirements, and growth objectives.",
    capabilities: [
      "Custom Web Applications",
      "Backend & API Development",
      "System Integrations",
      "Database Architecture",
    ],
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud and infrastructure environments designed to improve availability, performance, security, and operational efficiency.",
    capabilities: [
      "Cloud Architecture",
      "Infrastructure Deployment",
      "AWS Solutions",
      "Scalability & Reliability",
    ],
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "Security-focused solutions designed to protect systems, data, identities, and business operations against evolving threats.",
    capabilities: [
      "Security Assessments",
      "Endpoint & Network Security",
      "Identity & Access",
      "Security Monitoring",
    ],
  },
  {
    number: "04",
    title: "IT & Technical Services",
    description:
      "Reliable technical support and infrastructure services that keep your technology environment operational, secure, and productive.",
    capabilities: [
      "IT Support & Troubleshooting",
      "Network & Systems Support",
      "Infrastructure Management",
      "Technical Consulting",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-slate-200 bg-white"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-700/5 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-slate-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left — Heading */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Our Capabilities
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Technology built to
              <span className="block text-cyan-700">
                move your business forward.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From software engineering and cloud infrastructure to
              cybersecurity and technical services, Xcode delivers practical
              technology solutions designed around your business and built for
              what comes next.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-200/20"
              >
                Discuss your technology needs
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <span className="text-sm font-medium text-slate-400">
                Engineering what comes next.
              </span>
            </div>
          </div>

          {/* Right — Services Image */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-3xl border border-slate-200" />

            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-cyan-700" />

            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-cyan-700" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
              <Image
                src="/services.png"
                alt="Xcode technology services"
                width={900}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-transparent to-cyan-700/10" />
            </div>

           
          </div>
        </div>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <div className="mt-28">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                What we do
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Our core services
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              A practical technology stack designed to support your business
              from infrastructure to applications.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-slate-950">
          <div className="relative px-7 py-10 sm:px-10 lg:px-12 lg:py-12">

            {/* Background glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-700/20 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Let&apos;s build
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Have a technology challenge?
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                  Let&apos;s turn the problem into a practical, scalable
                  solution.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-700 hover:text-white"
              >
                Start a conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({
  number,
  title,
  description,
  capabilities,
}: {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-700 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8">

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-700/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">

        {/* Number + line */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm font-semibold text-cyan-700">
            {number}
          </span>

          <span className="h-px flex-1 bg-slate-100 transition-colors duration-300 group-hover:bg-cyan-200" />
        </div>

        {/* Title */}
        <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>

        {/* Capabilities */}
        <div className="mt-7 border-t border-slate-100 pt-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Capabilities
          </p>

          <div className="flex flex-wrap gap-2">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:border-cyan-200 group-hover:bg-gray-200 group-hover:text-black-700"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom hover indicator */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-700 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
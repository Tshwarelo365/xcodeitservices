import Image from "next/image";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        {/* =====================================================
            MAIN CTA
        ====================================================== */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950">

          {/* Technical grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Cyan glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_0.9fr]">

            {/* =================================================
                LEFT — CONTENT
            ================================================= */}
            <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-16 lg:py-20">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  Start a conversation
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s solve your
                <span className="block text-cyan-400">
                  technology challenge.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Whether you&apos;re looking to strengthen your security,
                modernise your infrastructure, move to the cloud, or build
                something new, qLEsh can help turn the challenge into a
                practical technology solution.
              </p>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
                >
                  Start a conversation

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Contact details */}
              <div className="mt-10 border-t border-white/10 pt-7">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:qleshtechsolutions@gmail.com"
                      className="mt-1 block text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                    >
                      qleshtechsolutions@gmail.com
                    </a>
                  </div>

                  <div className="hidden h-8 w-px bg-white/10 sm:block" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Focus
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-300">
                      Software • Cloud • Security • IT
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — IMAGE
            ================================================= */}
            <div className="relative min-h-[360px] lg:min-h-[620px]">

              {/* Image */}
              <Image
                src="/call.jpg"
                alt="qLEsh technology solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent lg:from-slate-950/80 lg:via-transparent" />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Image frame */}
              <div className="absolute inset-6 border border-white/10 lg:inset-8" />

              {/* Corner accent */}
              <div className="absolute right-8 top-8 h-14 w-14 border-r-2 border-t-2 border-cyan-400 lg:right-10 lg:top-10" />

              {/* Image label */}
              <div className="absolute bottom-10 left-10">

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  qLEsh
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  Engineering what&apos;s next.
                </p>

              </div>

            </div>

          </div>
        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <div className="mt-8 flex flex-col gap-3 px-1 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Engineering a smarter future.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <span className="text-xs text-slate-400">
              Technology built around your business.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
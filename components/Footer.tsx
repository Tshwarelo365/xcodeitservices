import Image from "next/image";
import Link from "next/link";

const services = [
  "Cybersecurity",
  "Backup & Recovery",
  "Cloud Solutions",
  "IT Infrastructure",
  "Software Engineering",
];

const companyLinks = [
  { name: "About qLEsh", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:py-20">

          {/* =================================================
              BRAND
          ================================================== */}
          <div className="max-w-xl">

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/qLesh_logo_no_tagline.png"
                alt="qLEsh"
                width={150}
                height={50}
                className="h-auto w-[140px]"
              />
            </Link>

            <p className="mt-7 max-w-md text-base leading-7 text-slate-400">
              Engineering software, cloud, cybersecurity, and IT solutions
              that help organisations become more secure, resilient, and
              ready for what&apos;s next.
            </p>

            {/* Brand statement */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                Engineering a Smarter Future.
              </span>
            </div>

          </div>


          {/* =================================================
              COMPANY
          ================================================== */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <span>{link.name}</span>

                    <span className="text-xs text-cyan-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================== */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              Capabilities
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-cyan-400" />
                  {service}
                </li>
              ))}

            </ul>

          </div>

        </div>


        {/* =====================================================
            CTA STRIP
        ====================================================== */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-sm font-semibold text-white">
              Have a technology challenge?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Let&apos;s find a practical way forward.
            </p>

          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border border-cyan-400/40 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            Start a conversation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="flex flex-col gap-4 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} qLEsh. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms
            </Link>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="text-slate-600">
              Software • Cloud • Security • IT
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}
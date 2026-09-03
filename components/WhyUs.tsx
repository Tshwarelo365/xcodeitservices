const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We start with your business requirements and challenges, then recommend technology that actually solves the problem.",
  },
  {
    number: "02",
    title: "Security by Design",
    description:
      "Security is considered from the beginning, helping organisations reduce risk and protect their systems, users, and data.",
  },
  {
    number: "03",
    title: "Scalable Solutions",
    description:
      "We design solutions that can grow with your organisation instead of forcing you to replace your technology every time your business expands.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end when implementation is complete. We can provide ongoing support, monitoring, maintenance, and guidance.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Why Tech Solutions
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Technology should make business easier.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We combine technology expertise with a practical understanding
              of business needs to deliver solutions that are secure,
              reliable, and built for the long term.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-semibold text-cyan-700">
                  {reason.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
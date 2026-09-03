import ProjectCard from "@/components/ProjectCard";

const technologies = [
  {
    number: "01",
    category: "Cybersecurity",
    title: "Sophos",
    description:
      "Security technologies supporting endpoint, network, and business protection against modern cyber threats.",
    technologies: [
      "Endpoint Security",
      "Network Security",
      "Threat Protection",
    ],
    image: "/partners/sophos_logo.png",
  },
  {
    number: "02",
    category: "Endpoint Security",
    title: "SentinelOne",
    description:
      "AI-powered endpoint protection and threat detection designed to help organisations identify and respond to attacks.",
    technologies: ["EDR", "XDR", "Threat Detection"],
    image: "/partners/sentinelone_logo.png",
  },
  {
    number: "03",
    category: "Backup & Recovery",
    title: "Veeam",
    description:
      "Data protection and recovery technologies designed to help businesses maintain availability and recover from disruption.",
    technologies: ["Backup", "Recovery", "Cloud"],
    image: "/partners/veeam_logo.png",
  },
  {
    number: "04",
    category: "Data Protection",
    title: "Commvault",
    description:
      "Enterprise data protection and cyber-resilience technologies for critical business workloads and information.",
    technologies: ["Data Protection", "Recovery", "Cyber Resilience"],
    image: "/partners/Commvault_logo.png",
  },
  {
    number: "05",
    category: "Cloud Infrastructure",
    title: "Amazon Web Services",
    description:
      "Cloud infrastructure and services supporting scalable, secure, and reliable business applications and workloads.",
    technologies: ["AWS", "Cloud", "Infrastructure"],
    image: "/partners/aws.png",
  },
  {
    number: "06",
    category: "Enterprise Technology",
    title: "IBM",
    description:
      "Enterprise technology platforms supporting infrastructure, data, AI, security, and modern business environments.",
    technologies: ["Enterprise IT", "AI", "Infrastructure"],
    image: "/partners/ibm.png",
  },
  {
    number: "07",
    category: "Networking & Infrastructure",
    title: "Nokia",
    description:
      "Networking and infrastructure technologies supporting reliable connectivity and modern enterprise environments.",
    technologies: ["Networking", "Infrastructure", "Connectivity"],
    image: "/partners/nokia_logo.png",
  },
  {
    number: "08",
    category: "Identity & Security",
    title: "RSA",
    description:
      "Identity and access technologies helping organisations strengthen authentication and protect access to critical systems.",
    technologies: ["Identity", "Authentication", "Access Security"],
    image: "/partners/rsa.jpg",
  },
];

export default function Projects() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-600" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Technology ecosystem
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Technology backed by
              <span className="block text-cyan-600">
                leading platforms.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We work across a carefully selected ecosystem of enterprise
              technologies to engineer secure, resilient, scalable, and
              practical solutions for modern businesses.
            </p>

          </div>

          {/* Section indicator */}
          <div className="hidden shrink-0 text-right md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              qLEsh
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Platforms • Security • Cloud • Infrastructure
            </p>
          </div>
        </div>

        {/* =====================================================
            TECHNOLOGY GRID
        ===================================================== */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {technologies.map((technology) => (
            <ProjectCard
              key={technology.number}
              number={technology.number}
              category={technology.category}
              title={technology.title}
              description={technology.description}
              technologies={technology.technologies}
              image={technology.image}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            
            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              Our technology ecosystem enables us to combine the right
              platforms and services around each client's specific business
              requirements.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Engineering a smarter future
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
import Image from "next/image";

type ProjectCardProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

export default function ProjectCard({
  number,
  category,
  title,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-300
        hover:shadow-2xl
        hover:shadow-slate-900/10
      "
    >
      {/* Top technical line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Logo area */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-950 px-10">
        {/* Technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.07]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        {/* Cyan ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-400/20" />

        {/* Corner details */}
        <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-cyan-400/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-cyan-400" />

        <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-cyan-400/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-cyan-400" />

        {/* Number */}
        <span className="absolute right-6 top-5 text-xs font-semibold tracking-[0.2em] text-white/40">
          {number}
        </span>

        {/* Logo container */}
        <div className="relative z-10 flex h-28 w-full max-w-xs items-center justify-center rounded-xl border border-white/10 bg-white px-8 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:border-cyan-400/40">
          <Image
            src={image}
            alt={`${title} technology`}
            width={280}
            height={100}
            className="max-h-20 w-auto max-w-[220px] object-contain"
          />
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-6">
          <span className="rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 sm:p-8">
        {/* Small label */}
        <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-cyan-500" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Technology
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-cyan-700">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border
                border-slate-200
                bg-slate-50
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-slate-600
                transition-colors
                duration-300
                group-hover:border-slate-300
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            qLEsh ecosystem
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M4 10h11M10 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
type HighlightCard = {
  label: string;
  value: string;
  detail: string;
  accent: string;
};

const highlightCards: HighlightCard[] = [
  {
    label: "Current focus",
    value: "Digital transformation",
    detail: "Working at the intersection of business processes, technology, and execution.",
    accent: "from-violet-500/20 to-violet-500/5",
  },
  {
    label: "Key strengths",
    value: "Business + tech",
    detail: "Combining software thinking with structured problem-solving and project coordination.",
    accent: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    label: "Career direction",
    value: "ERP / CRM / PM",
    detail: "Interested in project management, consulting, product operations, and functional testing roles.",
    accent: "from-sky-500/20 to-sky-500/5",
  },
];

const focusAreas = [
  "Business analysis",
  "Process improvement",
  "Project management",
  "Information systems",
  "Functional testing",
  "ERP & CRM consulting",
];

export default function HomelistFirst() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-6 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Profile</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From business needs to digital solutions.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            I’m driven by the challenge of understanding complex business needs and turning them into structured, practical, and meaningful solutions. My background combines software development, information systems, project management, and business analysis, allowing me to approach digital projects from both a technical and business perspective.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-sm text-slate-200"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
            I’m currently building my expertise toward roles in <span className="font-semibold text-white">project management, ERP and CRM consulting, functional testing, and product management</span>, with a particular interest in digital transformation and information systems.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {highlightCards.map((card) => (
            <div
              key={card.label}
              className={`rounded-[26px] border border-slate-800 bg-gradient-to-br ${card.accent} p-5`}
            >
              <p className="text-sm uppercase tracking-[0.18em] text-slate-300">{card.label}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{card.value}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, BriefcaseBusiness, GitBranch, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ange-tec", icon: GitBranch },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ange-moudzouma/", icon: BriefcaseBusiness },
  { label: "Email", href: "mailto:angemoudzouma@gmail.com", icon: Mail },
];

const statItems = [
  { value: "IS", label: "Management" },
  { value: "PM", label: "Project" },
  { value: "ERP", label: "CRM" },
];

const availabilityText = "Available for apprenticeship";

const skillTags = [
  "Business Analysis",
  "Digital Transformation",
  "ERP & CRM",
  "Project Management",
  "Functional Testing",
  "Product Thinking",
];

export default function Herosection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-14 pt-10 sm:px-8 lg:px-12">
      <div className="relative overflow-hidden rounded-[42px] border border-violet-500/20 bg-slate-950/80 shadow-[0_35px_120px_rgba(15,23,42,0.82)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,_rgba(139,92,246,0.22),_transparent_25%),radial-gradient(circle_at_82%_28%,_rgba(59,130,246,0.16),_transparent_25%),radial-gradient(circle_at_72%_78%,_rgba(16,185,129,0.10),_transparent_25%)]" />
        <div className="absolute left-10 top-10 h-28 w-28 rounded-full border border-violet-400/25 bg-violet-500/10" />
        <div className="absolute right-14 top-14 h-24 w-24 rounded-full border border-sky-400/20 bg-sky-500/10" />
        <div className="absolute -left-10 bottom-[-40px] h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-10 top-20 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:px-10 lg:py-12">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <Sparkles className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">IS Management</span>
              </div>
              <div className="inline-flex w-fit items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                {availabilityText}
              </div>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Turning <span className="bg-gradient-to-r from-violet-300 via-white to-sky-300 bg-clip-text text-transparent">operations</span> into clearer, smarter digital value.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              I help organizations align <span className="font-semibold text-white">business needs</span>, processes, and technology to deliver practical digital solutions that are easier to adopt and easier to scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-400"
              >
                Explore my work
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-100 transition-all duration-200 hover:border-slate-500 hover:bg-slate-800"
              >
                Contact me
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-slate-200 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex min-w-0 flex-col justify-between gap-4 overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(15,23,42,0.55)] sm:p-6">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-violet-500/12 via-sky-500/8 to-emerald-500/8" />

            <div className="relative flex min-w-0 items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Profile</p>
                <h2 className="mt-2 text-xl font-semibold text-white">IS Management</h2>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 text-lg font-bold text-white shadow-lg shadow-violet-500/30">
                AR
              </div>
            </div>

            <div className="relative rounded-[22px] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-slate-900 to-slate-900 p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-violet-200/80">Business-tech view</p>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                I connect operational reality, process thinking, and digital execution.
              </p>
            </div>

            <div className="relative grid grid-cols-3 gap-3">
              {statItems.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[18px] border border-slate-800 bg-slate-950/90 p-3 text-center"
                >
                  <div className="text-2xl font-semibold leading-none text-white">{stat.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="relative rounded-[20px] border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Core focus</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Operations', 'ERP', 'CRM', 'Projects', 'Process', 'Digital'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-between gap-3 border-t border-slate-800 pt-4">
              <span className="text-sm text-slate-300">Follow</span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-200 transition hover:border-violet-400 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

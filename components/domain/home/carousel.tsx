import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  title: string;
  summary: string;
  context: string;
  impact: string;
  link: string;
  stack: string[];
  accent: string;
};

const projects: Project[] = [
  {
    title: "LLKDO",
    summary: "A corporate-gifting website designed to support employee recognition and strengthen brand engagement.",
    context: "6-month internship project at IDM'COM, where I contributed to building a digital experience aligned with the company’s company gifting and communication goals.",
    impact: "Built a clean, conversion-oriented web presence that helps communicate value and encourage action.",
    link: "https://www.llkdo.org",
    stack: ["Elementor", "WordPress", "PHP"],
    accent: "from-violet-500/30 via-violet-500/10 to-slate-900",
  },
  {
    title: "Idmboutique",
    summary: "A portal and storefront for Anticimex, focused on product clarity, trust, and a smoother digital customer journey.",
    context: "A web project developed for the Anticimex company to improve how its services and offerings are presented online.",
    impact: "Created a user-friendly e-commerce experience with stronger storytelling and clearer purchase pathways.",
    link: "https://idmboutique.fr",
    stack: ["WordPress", "PHP"],
    accent: "from-emerald-500/30 via-emerald-500/10 to-slate-900",
  },
  {
    title: "PG Particulier",
    summary: "An internship project for Parenthèses Gourmandes, focused on creating a b2c portal with a more customer-friendly experience.",
    context: "This was an internship project developed for Parenthèses Gourmandes, a B2C brand, to support a more engaging and accessible digital storefront.",
    impact: "Improved content structure, navigation, and overall usability for a public-facing customer experience.",
    link: "https://boutique.parenthesesgourmandes.fr",
    stack: ["Wix", "JavaScript"],
    accent: "from-sky-500/30 via-sky-500/10 to-slate-900",
  },
];

export default function CarouselProjects() {
  return (
    <Carousel className="relative w-full max-w-6xl">
      <CarouselContent className="-ml-4">
        {projects.map((project) => (
          <CarouselItem key={project.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="group h-full overflow-hidden border border-slate-800 bg-slate-900/80 shadow-[0_25px_60px_rgba(15,23,42,0.45)] transition-all duration-300 ease-out hover:border-violet-500/30 hover:shadow-[0_18px_40px_rgba(76,29,149,0.18)]">
              <CardContent className="flex h-full flex-col p-0">
                <div className={`relative flex h-44 items-end justify-between overflow-hidden bg-gradient-to-br ${project.accent} p-5 transition-transform duration-300 ease-out group-hover:scale-[1.01]`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%),linear-gradient(135deg,_transparent_0%,_rgba(15,23,42,0.18)_100%)]" />
                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-slate-200/90">Case study</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-slate-950/20 text-white backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white/10">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="text-sm leading-6 text-slate-300">{project.summary}</p>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Context</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{project.context}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Impact</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{project.impact}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Website</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-violet-100"
                    >
                      Visit project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-auto pt-1">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Built with</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-violet-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2 border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800" />
      <CarouselNext className="right-0 top-1/2 -translate-y-1/2 border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800" />
    </Carousel>
  );
}

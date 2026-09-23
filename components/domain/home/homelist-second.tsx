import CarouselProjects from "@/components/domain/home/carousel";

export default function HomelistSecond() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
      <div className="mb-8 rounded-[28px] border border-violet-500/15 bg-slate-900/60 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.45)] sm:p-6">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projects that show product thinking.
            </h2>
          </div>
        </div>
      </div>

      <CarouselProjects />
    </section>
  );
}

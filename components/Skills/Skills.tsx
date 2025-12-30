import { RadarChart } from "./RadarChart";
import { RadarSkills } from "@/dataConstants/constants";
const Skills = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* section-wide soft hue */}
      

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Current Skill Stats:
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {RadarSkills.map((skills) => (
            <div key={skills.id} className="w-full max-w-xl">
              <h2 className="mb-3 text-center font-semibold text-zinc-900 dark:text-zinc-100">
                {skills.title}
              </h2>

              {/* card + glow behind chart */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
                <div className="pointer-events-none absolute h-200 w-500 rounded-full bg-blue-500/20 blur-3xl" />

                {/* radar haze */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.22),rgba(244,114,182,0.10),transparent_65%)]" />

                <div className="relative">
                  <RadarChart topic={skills} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;

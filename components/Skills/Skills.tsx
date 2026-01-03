"use client";
import RadarChart from "./RadarChart";
import { RadarSkills } from "@/dataConstants/constants";

const Skills = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* section-wide soft hue */}

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium text-zinc dark:text-white ">Skills</p>
            <h2 className="mt-2 text-3xl font-semibold  text-black-100 font-work-sans dark:text-white">
              Current Skill Stats
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-zinc dark: dark:text-white">
              Based on use frequency and recent use, terms and conditions may apply
            </p>

            <div className="mx-auto mt-6 h-1 w-full bg-linear-to-r from-transparent via-skill-violet/40 to-transparent" />
          </div>
        </div>

        <div className=" justify-items-center grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-2">
          {RadarSkills.map((skills, i) => {
            const isLast = i === RadarSkills.length - 1;
            const odd = RadarSkills.length % 2 == 1;
            return (
              <div
                key={skills.id}
                className={[
                  "w-full",
                  // normal sizing
                  "sm:max-w-xl",
                  // if odd count, center last item on desktop
                  isLast && odd ? "lg:col-span-2 " : "",
                ].join(" ")}
              >
                {/* card + glow behind chart */}
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:bg-zinc-950/60">
                  <h2 className="mb-5 text-center font-semibold text-black font-work-sans">
                    {skills.title}
                  </h2>
                  <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-skill-violet/25 blur-3xl" />
                  <div className="pointer-events-none absolute h-200 w-500 bg-skill-blue/20 blur-3xl" />

                  {/* radar haze */}
                  <div className="radar-haze" />

                  <div className="relative">
                    <RadarChart topic={skills} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;

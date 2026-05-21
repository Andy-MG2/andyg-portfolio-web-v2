import { div } from "motion/react-client";
import ProjectCard from "./ProjectCard";
import { Project } from "@/dataConstants/constants";


const Projects = () => {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-semibold m-1"> Projects</div>

          <div className="mx-auto mb-4 h-1 w-full bg-linear-to-r via-skill-violet/50 to-transparent" />
          <div className="justify-items-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {Project.map((info, i) => {
              return <div key={info.id} className="">
                <ProjectCard key={info.id} name={info.name} image={info.image} url={info.url}>
                </ProjectCard>
              </div>;
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

//   <div className=" justify-items-center grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-2">
//     {RadarSkills.map((skills, i) => {
//       const isLast = i === RadarSkills.length - 1;
//       const odd = RadarSkills.length % 2 == 1;
//       return (
//         <div
//           key={skills.id}
//           className={[
//             "w-full",
//             // normal sizing
//             "sm:max-w-xl",
//             // if odd count, center last item on desktop
//             isLast && odd ? "lg:col-span-2 " : "",
//           ].join(" ")}
//         >
//           {/* card + glow behind chart */}
//           <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:bg-zinc-950/60">
//             <h2 className="mb-5 text-center font-semibold text-black font-work-sans">
//               {skills.title}
//             </h2>
//             <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-skill-violet/25 blur-3xl" />
//             <div className="pointer-events-none absolute h-200 w-500 bg-skill-blue/20 blur-3xl" />

//             {/* radar haze */}
//             <div className="radar-haze" />

//             <div className="relative">
//               <RadarChart topic={skills} />
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>

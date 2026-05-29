import { div } from "motion/react-client";
import ProjectCard from "./ProjectCard";
import { Project } from "@/dataConstants/constants";


const Projects = () => {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-semibold m-1 dark:text-white"> Projects</div>

          <div className="mx-auto mb-4 h-1 w-full bg-linear-to-r via-skill-violet/50 to-transparent " />
          <div className="justify-items-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
            {Project.map((info, i) => {
              return <div key={info.id} className="mb-4 ml-4 mr-4">
                <ProjectCard key={info.id} name={info.name} image={info.image} url={info.url} description={info.description}>
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

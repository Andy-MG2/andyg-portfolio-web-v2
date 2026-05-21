import Image from "next/image";

interface CardProps {
  key: number;
  name: string;
  image: string;
  url: string; 
}
const ProjectCard = ({key, name, image, url}: CardProps) => {
  return (
    <div className = "font-semibold justify-center"> 
      {name}
      <div className="h-60 w-100 shadow-xl rounded-2xl relative">
        <Image
          className =" rounded-2xl"
          fill
          src={image}
          alt = "jynxzi"  
        />
      </div>
    </div>
    
  );
};

export default ProjectCard;



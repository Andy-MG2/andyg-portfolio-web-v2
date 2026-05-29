import Link from "next/link";
import Image from "next/image";

interface CardProps {
  key: number;
  name: string;
  image: string;
  url: string;
  description: string;
}

const ProjectCard = ({
  name,
  image,
  url,
  description,
}: CardProps) => {
  return (
    <div className="font-semibold justify-center">
      <Link href={url}>
        <div className="group relative h-60 w-100 overflow-hidden rounded-2xl shadow-xl cursor-pointer">
          
          {/* IMAGE */}
          <Image
            fill
            src={image}
            alt={name}
            className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* DARK GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/60 to-black/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

          {/* CONTENT */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
            
            {/* TOP */}
            <div>
              <h1 className="text-white text-2xl font-bold inline-block border-b border-white pb-1">
                {name}
              </h1>

              <p className="mt-4 text-sm font-normal leading-relaxed text-gray-200">
                {description}
              </p>
            </div>

            {/* BOTTOM */}
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <span>Check it out on GitHub</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 7l-10 10m0-10h10v10"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
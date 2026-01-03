import Avatar from "./Avatar";
import { SpinningText } from "./spinning-text";

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative aspect-square w-[min(82vw,360px)] overflow-visible">
        <SpinningText className="absolute inset-0 font-extrabold font-work-sans text-sm sm:text-base dark:bg-black dark:text-white" radius={17}>
          I • write • code • and • stuff •
        </SpinningText>

        <div className="absolute inset-0 grid place-items-center">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default About;

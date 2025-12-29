import Avatar from "./Avatar";
import { SpinningText } from "./spinning-text";

const About = () => {
  return (
    <>

      <SpinningText
        className="font-extrabold"
        children={"I write code and stuff"}
      />
      <div className="flex items-center justify-center relative -top-24.5">
        <Avatar />
      </div>
    </>
  );
};

export default About;

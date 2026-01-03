import Image from "next/image";
const Avatar = () => {
  return (
    <div className = "relative w-70 h-70">
        <Image src="/Headshot.png" alt={"AG"} fill className = "rounded-full object-cover"/>
    </div>
  );
}

export default Avatar;
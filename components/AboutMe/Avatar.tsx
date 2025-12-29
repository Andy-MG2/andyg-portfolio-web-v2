import Image from "next/image";
const Avatar = () => {
  return (
    <div className = "relative w-48 h-48">
        <Image src="/Headshot.jpg" alt={"AG"} fill className = "rounded-full object-cover"/>
    </div>
  );
}

export default Avatar;
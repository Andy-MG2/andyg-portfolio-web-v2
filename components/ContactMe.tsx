import { Contact } from "@/dataConstants/constants";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  return (
    <> 
    <div className = "justify-center flex font-bold">
      Connect With Me:
    </div>
    <div className="bg-white flex justify-center items-center h-16 space-x-4 font-bold ">
      {Contact.map((link) => (
        <Link key={link.id} href={link.url} scroll>
          <Image className = "rounded-xl shadow-lg transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
          src={link.image} alt={link.name} width={40} height={40} />
        </Link>
      ))}
    </div>
    </>
    
  );
};

export default ContactMe;

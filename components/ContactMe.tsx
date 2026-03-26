import { Contact } from "@/dataConstants/constants";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  return (
    <>
      <div className = "flex items-center justify-center">
        <div className="justify-center flex font-bold font-work-sans dark:text-white">
          Connect With Me
        </div>

        <div className="m-3 h-50 w-1 bg-linear-to-b from-transparent via-skill-violet/50 to-transparent" />

        <div className="justify-center flex ">
          <div className="h-40 w-40 pt-2 pl-3 flex-col font-bold border-2 border-gray-100 shadow-xl m-4  dark:text-white dark:border-gray-800 rounded-xl">
            {Contact.map((link) => (
              <div key={link.id} className="p-1">
                <Link
                  href={link.url}
                  scroll
                  className="flex items-center gap-3"
                >
                  <Image
                    className="rounded-xl shadow-lg transition-transform duration-300 ease-out hover:scale-110 cursor-pointer "
                    src={link.image}
                    alt={link.name}
                    width={40}
                    height={40}
                  />
                  <p className="text-right shadow-lg transition-transform duration-300 ease-out hover:scale-110 cursor-pointer">
                    {link.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

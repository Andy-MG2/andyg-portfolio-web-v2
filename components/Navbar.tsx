import { NavLinks } from "@/dataConstants/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-center items-center h-16 space-x-4 font-bold">
      {NavLinks.map((link) => (
        <Link key = {link.id} href = {link.url} scroll>
          <p className = "no-underline hover:underline"> {link.label}</p>
        </Link>
      ))}
    </div>
  );
};
export default Navbar;


import { NavLinks } from "@/dataConstants/constants";
import Link from "next/link";
import { AnimatedThemeToggler } from "./Theme/animated-theme-toggler";

const Navbar = () => {
  return (
   <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
  
  <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[40px_1fr_40px] items-center px-4 font-work-sans font-bold">
    
    {/* LEFT BUTTON */}
    <div className="flex items-center justify-start">
      <AnimatedThemeToggler />
    </div>

    {/* PERFECTLY CENTERED LINKS */}
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {NavLinks.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          scroll
          className="whitespace-nowrap text-[11px] sm:text-sm md:text-base hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </div>

    {/* RIGHT SPACER */}
    <div />
    
  </nav>
</header>
  );
};

export default Navbar;


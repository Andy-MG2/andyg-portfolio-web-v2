import { NavLinks } from "@/dataConstants/constants";
import Link from "next/link";
import { AnimatedThemeToggler } from "./Theme/animated-theme-toggler";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-zinc-950 dark:text-zinc-100">
      <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 font-work-sans font-bold">
        {/* left spacer (keeps center truly centered) */}
        <div />

        {/* centered links */}
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              scroll
              className="whitespace-nowrap hover:underline text-xs xs:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* right toggler */}
        <div className="flex justify-end">
          <AnimatedThemeToggler />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

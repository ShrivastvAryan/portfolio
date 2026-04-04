import { ArrowDown, ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "LinkedIn", href: "#about" },
  { label: "Github", href: "#portfolio" },
];

const Navbar = () => {
  return (
    <header className="bg-brand-tertiary">
      <nav
        aria-label="Primary"
        className="mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10"
      >
        <div className="flex items-center gap-6 sm:gap-10">
       
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className="text-sm font-medium tracking-[-0.01em] text-neutral-700 transition-colors duration-200 hover:text-black"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          className="inline-flex items-center gap-2 text-sm font-medium bg-black text-white rounded-3xl px-4 p-2"
          href="#contact"
        >
          <ArrowDownToLine size={14} />
          <span>Resume</span>
        </Link>
      </nav>

      <div className="border-t border-black/5 px-5 py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-black"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

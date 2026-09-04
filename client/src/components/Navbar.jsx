import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Education",
     "Certifications",
      "Learning",
      "Process",
      "Why Me",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group text-2xl font-extrabold tracking-tight text-white"
        >
          Vanshika
         
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white
              after:absolute after:-bottom-2 after:left-0 after:h-0.5
              after:w-0 after:bg-gradient-to-r after:from-violet-500
              after:to-fuchsia-500 after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hire Button */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/40 sm:block"
        >
          Hire Me
          <span className="ml-2">→</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            /* X Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex w-[92%] max-w-7xl flex-col py-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 px-2 py-4 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:pl-4 hover:text-violet-400"
              >
                {item}
              </a>
            ))}

            {/* Mobile Hire Button */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-600/20"
            >
              Hire Me →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
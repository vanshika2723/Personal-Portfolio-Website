function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const otherLinks = [
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Learning", href: "#learning" },
    { name: "Process", href: "#process" },
    { name: "Why Me", href: "#why-me" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      {/* Background Glows */}
      <div className="absolute left-[-180px] top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-[-180px] bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="text-3xl font-extrabold tracking-tight"
            >
              Vanshika
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                <br />Khandelwal
              </span>
            </a>
           
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Full Stack Developer passionate about building modern,
              responsive, and user-friendly web applications.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/vanshika2723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10"
                aria-label="GitHub"
              >
                💻
              </a>

              <a
                href="https://www.linkedin.com/in/vanshika-khandelwal27/"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="mailto:vanshikakhandelwal102@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-violet-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {otherLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-fuchsia-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resume CTA */}
        <div className="mb-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-pink-600/10 p-6 text-center backdrop-blur-xl sm:flex-row sm:text-left">
          <div>
            <h3 className="text-lg font-bold">
              Interested in working together?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Let's build something meaningful and impactful.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="../src/assets/resumevk (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:bg-white/10 hover:text-white"
            >
              📄 View Resume
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30"
            >
              Let's Talk →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Vanshika Khandelwal. All rights
            reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with{" "}
            <span className="text-violet-400">React</span> &{" "}
            <span className="text-fuchsia-400">Tailwind CSS</span> ✨
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
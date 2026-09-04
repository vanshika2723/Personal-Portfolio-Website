function WhyWorkWithMe() {
  const reasons = [
    {
      icon: "✨",
      title: "Clean & Maintainable Code",
      description:
        "I focus on writing structured, reusable, and easy-to-maintain code that makes future improvements easier.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "I build interfaces that work smoothly across desktops, tablets, and mobile devices.",
    },
    {
      icon: "🧠",
      title: "Problem Solving",
      description:
        "I enjoy breaking complex problems into smaller, practical solutions and turning ideas into working features.",
    },
    {
      icon: "⚡",
      title: "Performance Focus",
      description:
        "I keep performance, usability, and a smooth user experience in mind while developing applications.",
    },
    {
      icon: "🔄",
      title: "Continuous Improvement",
      description:
        "I continuously learn new technologies and improve my development practices through hands-on projects.",
    },
    {
      icon: "🤝",
      title: "Professional Approach",
      description:
        "I believe in clear communication, organized development, attention to detail, and delivering reliable solutions.",
    },
  ];

  return (
    <section
      id="why-me"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glows */}
      <div className="absolute left-[-180px] top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-300">
            💎 Why Choose Me
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Why Work{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              With Me?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I combine technical skills, creativity, continuous learning, and
            a practical approach to build modern and reliable web solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.07]"
            >
              {/* Top Gradient */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-600/10 blur-2xl transition-all duration-500 group-hover:bg-fuchsia-600/20" />

              {/* Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {reason.icon}
              </div>

              <h3 className="relative text-xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                {reason.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-slate-400">
                {reason.description}
              </p>

              {/* Bottom Arrow */}
              <div className="mt-6 text-sm font-semibold text-violet-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Learn more →
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-pink-600/10 p-8 text-center backdrop-blur-xl sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-3xl shadow-lg shadow-violet-600/20">
            🚀
          </div>

          <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
            Ready to Build Something Great?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Whether it is a personal project, academic application, or a
            real-world web solution, I am always excited to learn, build, and
            create something meaningful.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/40"
          >
            Let's Work Together →
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithMe;
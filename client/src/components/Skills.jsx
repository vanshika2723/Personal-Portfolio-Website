function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: "🎨",
      description: "Creating modern and responsive user interfaces",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      description: "Building scalable server-side applications and APIs",
      items: ["Node.js", "Express.js", "REST API"],
    },
    {
      category: "Database",
      icon: "🗄️",
      description: "Managing and designing efficient data systems",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools",
      icon: "🛠️",
      description: "Development tools for efficient workflow",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Technologies and tools I use to build modern, scalable and
            user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-900/20"
            >
              {/* Top Gradient */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600" />

              {/* Number */}
              <span className="absolute right-5 top-5 text-xs font-bold text-slate-700 transition-colors duration-300 group-hover:text-violet-400/50">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 text-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                {skill.icon}
              </div>

              {/* Category */}
              <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                {skill.category}
              </h3>

              {/* Description */}
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                {skill.description}
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-gradient-to-r from-violet-500/20 via-white/10 to-transparent" />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/25" />
            </div>
          ))}
        </div>

        {/* Bottom Tech Stack */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
          <p className="text-sm text-slate-500">
            Always learning. Always building. Always improving.
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {["💻 Clean Code", "🚀 Performance", "📱 Responsive Design", "✨ UI/UX"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
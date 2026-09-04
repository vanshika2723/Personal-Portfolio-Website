const experiences = [
  {
    year: "2026",
    type: "Project Experience",
    title: "Full Stack Developer",
    company: "Personal & Academic Projects",
    description:
      "Built responsive and modern web applications with a focus on clean UI, reusable components, backend APIs, database integration, and real-world functionality.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    year: "2025 – 2026",
    type: "Learning & Development",
    title: "Web Developer",
    company: "Continuous Learning",
    description:
      "Developed practical knowledge through hands-on projects, exploring frontend development, backend development, REST APIs, databases, authentication, and responsive design.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My journey of building projects, learning modern technologies,
            and continuously improving my development skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 hidden h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-violet-400/30 bg-slate-950 md:left-1/2 md:flex">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/50" />
                </div>

                {/* Card */}
                <div className="group w-full md:w-[46%]">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-500/10">
                    {/* Top Gradient */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300">
                        {experience.type}
                      </span>

                      <span className="text-sm font-medium text-slate-500">
                        {experience.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {experience.title}
                    </h3>

                    <p className="mt-1 font-medium text-fuchsia-400">
                      {experience.company}
                    </p>

                    <p className="mt-5 leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300 transition hover:border-violet-400/30 hover:text-violet-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-400 transition group-hover:gap-3">
                      <span>Building • Learning • Growing</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-3xl border border-violet-400/10 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 p-8 text-center">
          <div className="text-3xl">🚀</div>

          <h3 className="mt-3 text-2xl font-bold">
            Always Building Something New
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            I believe the best way to improve as a developer is to build,
            experiment, solve problems, and keep learning every day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
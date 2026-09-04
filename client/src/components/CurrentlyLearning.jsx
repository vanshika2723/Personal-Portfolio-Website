function CurrentlyLearning() {
  const learningItems = [
    {
      icon: "⚡",
      title: "TypeScript",
      level: "Currently Learning",
      description:
        "Learning type-safe JavaScript and improving code quality, scalability, and maintainability.",
      progress: "75%",
    },
    {
      icon: "▲",
      title: "Next.js",
      level: "Currently Learning",
      description:
        "Exploring server-side rendering, routing, API routes, and modern full-stack React development.",
      progress: "60%",
    },
    {
      icon: "⚛️",
      title: "Advanced React",
      level: "Improving",
      description:
        "Deepening knowledge of reusable architecture, performance optimization, hooks, and advanced patterns.",
      progress: "80%",
    },
    {
      icon: "☁️",
      title: "Cloud Deployment",
      level: "Exploring",
      description:
        "Learning how to deploy and manage modern web applications using cloud and hosting platforms.",
      progress: "50%",
    },
    {
      icon: "🔗",
      title: "REST APIs",
      level: "Improving",
      description:
        "Building scalable APIs, handling authentication, validation, errors, and frontend-backend integration.",
      progress: "85%",
    },
    {
      icon: "🏗️",
      title: "System Design",
      level: "Exploring",
      description:
        "Understanding scalable application architecture, databases, APIs, security, and system planning.",
      progress: "40%",
    },
  ];

  return (
    <section
      id="learning"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glows */}
      <div className="absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-[-150px] bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />

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
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            🚀 Continuous Growth
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Currently{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Technology keeps evolving, and so do I. Here are some of the
            technologies and concepts I am currently learning and improving.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Gradient Top */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <span className="absolute right-5 top-5 text-xs font-bold text-slate-700">
                0{index + 1}
              </span>

              {/* Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 text-2xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                    {item.title}
                  </h3>

                  <span className="text-xs font-medium text-fuchsia-400">
                    {item.level}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-slate-400">
                {item.description}
              </p>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-500">
                    Learning Progress
                  </span>

                  <span className="font-semibold text-violet-400">
                    {item.progress}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-1000 group-hover:from-fuchsia-500 group-hover:to-pink-500"
                    style={{ width: item.progress }}
                  />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-fuchsia-600/10 blur-3xl transition-all duration-500 group-hover:bg-fuchsia-600/20" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-pink-600/10 p-8 text-center backdrop-blur-xl">
          <div className="text-3xl">💡</div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Learning Never Stops
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            My goal is to keep improving my problem-solving skills, explore
            modern technologies, and build better real-world applications.
          </p>

          <a
            href="#projects"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30"
          >
            Explore My Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;
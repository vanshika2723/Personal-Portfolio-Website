function DevelopmentProcess() {
  const steps = [
    {
      number: "01",
      icon: "💡",
      title: "Understand",
      description:
        "I first understand the project requirements, goals, target users, and the problem that needs to be solved.",
    },
    {
      number: "02",
      icon: "📋",
      title: "Plan",
      description:
        "I break the project into smaller tasks and plan the UI, features, database structure, APIs, and development flow.",
    },
    {
      number: "03",
      icon: "🎨",
      title: "Design",
      description:
        "I create a clean, responsive, and user-friendly interface with a focus on usability and modern visual design.",
    },
    {
      number: "04",
      icon: "💻",
      title: "Develop",
      description:
        "I build reusable components, integrate APIs, connect databases, and implement the required functionality.",
    },
    {
      number: "05",
      icon: "🚀",
      title: "Test & Deploy",
      description:
        "I test the application, fix issues, optimize performance, and prepare the project for deployment.",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glows */}
      <div className="absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-[-150px] bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />

      {/* Grid Background */}
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
            🛠️ How I Work
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            My Development{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            From understanding an idea to building and deploying the final
            product, I follow a structured and practical development process.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-16 h-px bg-gradient-to-r from-violet-600/20 via-fuchsia-500/60 to-pink-500/20" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Circle */}
                <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-xl shadow-violet-900/10 transition-all duration-500 group-hover:scale-110 group-hover:border-violet-500/40 group-hover:shadow-violet-500/20">
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="mt-1 text-xs font-bold text-violet-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-violet-500/30 group-hover:bg-white/[0.07]">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Timeline */}
        <div className="relative lg:hidden">
          {/* Vertical Line */}
          <div className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-violet-600 via-fuchsia-500 to-pink-500" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex gap-5">
                {/* Number */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-slate-900 text-xl shadow-lg shadow-violet-900/20">
                  {step.icon}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300">
                      {step.title}
                    </h3>

                    <span className="text-xs font-bold text-violet-400">
                      {step.number}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-pink-600/10 p-8 text-center backdrop-blur-xl">
          <div className="text-3xl">✨</div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Turning Ideas Into Real Products
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            I believe good development is not just about writing code. It's
            about understanding the problem, creating a great experience, and
            building a reliable solution.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30"
          >
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcess;
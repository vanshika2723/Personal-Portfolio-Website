
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Effects */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen w-[92%] max-w-7xl items-center gap-16 py-24 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for Opportunities
          </div>

          <p className="mb-2 text-lg font-medium text-slate-400">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Vanshika{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Khandelwal
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-5 text-3xl font-bold text-slate-200 sm:text-4xl">
            Full Stack{" "}
            <span className="text-violet-400">
              Developer
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, responsive and user-friendly web applications
            using React, Node.js, Express.js and MongoDB with a focus on
            clean design and great user experience.
          </p>

          {/* Tech Stack */}
          <div className="mt-7 flex flex-wrap gap-3">
            {["React", "Node.js", "Express.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 font-semibold shadow-lg shadow-violet-600/25 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/40"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <a
              href="https://github.com/vanshika2723"
              className="transition hover:text-violet-400"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-600" />

            <a
              href="https://www.linkedin.com/in/vanshika-khandelwal27/"
              className="transition hover:text-violet-400"
            >
              LinkedIn
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-600" />

            <a
              href="#contact"
              className="transition hover:text-violet-400"
            >
              Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">

          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

          {/* Floating Card */}
          <div className="relative w-full max-w-lg">

            {/* Floating dots */}
            <div className="absolute -right-3 top-8 h-4 w-4 animate-bounce rounded-full bg-violet-400 shadow-lg shadow-violet-500/60" />
            <div className="absolute -left-4 bottom-20 h-3 w-3 animate-pulse rounded-full bg-fuchsia-400 shadow-lg shadow-fuchsia-500/60" />

            {/* Code Window */}
            <div className="rotate-1 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-violet-900/30 backdrop-blur-xl transition duration-500 hover:rotate-0 hover:-translate-y-2">

              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-3 text-xs text-slate-500">
                  developer.js
                </span>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-7 font-mono text-sm leading-8 sm:text-base">

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                </p>

                <p className="pl-5">
                  name:{" "}
                  <span className="text-green-400">
                    "Vanshika"
                  </span>,
                </p>

                <p className="pl-5">
                  role:{" "}
                  <span className="text-green-400">
                    "Full Stack Developer"
                  </span>,
                </p>

                <p className="pl-5">
                  skills: [
                </p>

                <p className="pl-10 text-green-400">
                  "React",
                </p>

                <p className="pl-10 text-green-400">
                  "Node.js",
                </p>

                <p className="pl-10 text-green-400">
                  "MongoDB"
                </p>

                <p className="pl-5">
                  ]
                </p>

                <p>{"};"}</p>

                <p className="mt-3 text-violet-400">
                  // Building amazing things 🚀
                </p>

                <span className="inline-block animate-pulse text-violet-400">
                  _
                </span>
              </div>
            </div>

            {/* Bottom Info Card */}
            <div className="absolute -bottom-7 -right-3 rounded-xl border border-white/10 bg-slate-800/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:-right-8">
              <p className="font-semibold text-violet-300">
                &lt;/Developer&gt;
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Turning ideas into reality ✨
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

function About() {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "JavaScript",
    "Tailwind CSS",
  ];

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Building modern, responsive and user-friendly websites and web applications.",
    },
    {
      icon: "⚛️",
      title: "React Development",
      description:
        "Creating fast and interactive frontend experiences with reusable React components.",
    },
    {
      icon: "🔧",
      title: "Backend Development",
      description:
        "Developing reliable backend systems, REST APIs and server-side applications.",
    },
    {
      icon: "🗄️",
      title: "Database Development",
      description:
        "Working with MongoDB and MySQL to create structured and efficient data solutions.",
    },
  ];

  const learning = [
    "TypeScript",
    "Next.js",
    "Advanced React",
    "REST APIs",
    "Cloud Deployment",
    "System Design",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background Glows */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-3xl" />

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            A passionate Full Stack Developer focused on building modern,
            scalable and engaging digital experiences.
          </p>
        </div>

        {/* =========================
            MAIN ABOUT
        ========================== */}
        <div className="grid items-stretch gap-8 lg:grid-cols-5">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-3">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30 hover:bg-white/[0.06] lg:p-10">

              {/* Gradient Top Line */}
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

              {/* Decorative Number */}
              <div className="absolute right-5 top-2 select-none text-8xl font-black text-white/[0.025]">
                01
              </div>

              {/* Badge */}
              <div className="relative mb-7 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />

                <span className="text-sm font-medium text-violet-300">
                  Full Stack Developer
                </span>
              </div>

              <h3 className="relative text-2xl font-bold sm:text-3xl">
                I'm a Full Stack{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h3>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-400">
                <p>
                  I am a passionate Full Stack Developer with a strong
                  interest in creating modern, responsive and user-friendly
                  web applications.
                </p>

                <p>
                  I work with technologies like{" "}
                  <span className="font-medium text-violet-300">
                    HTML, CSS, JavaScript, React.js, Node.js and Express.js
                  </span>{" "}
                  along with databases such as{" "}
                  <span className="font-medium text-fuchsia-300">
                    MongoDB and MySQL
                  </span>
                  .
                </p>

                <p>
                  I enjoy solving real-world problems, learning new
                  technologies and turning ideas into functional digital
                  products with clean and maintainable code.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Technologies I Work With
                </p>

                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="../src/assets/resumevk (1).pdf"
                  download
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-600/40"
                >
                  📄 Download Resume
                  <span className="transition-transform duration-300 group-hover/btn:translate-y-1">
                    ↓
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10"
                >
                  Let's Connect
                  <span>→</span>
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-5 lg:col-span-2">

            {/* Education */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40">
              <div className="relative flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 text-2xl ring-1 ring-violet-500/20">
                  🎓
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
                    Education
                  </p>

                  <h4 className="text-lg font-bold">
                    B.Tech in Computer Science
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Computer Science & Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-500/40">
              <div className="relative flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-600/20 to-pink-600/20 text-2xl ring-1 ring-fuchsia-500/20">
                  💻
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-fuchsia-400">
                    Development
                  </p>

                  <h4 className="text-lg font-bold">
                    Full Stack Web Development
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Frontend + Backend + Database
                  </p>
                </div>
              </div>
            </div>

            {/* Focus */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40">
              <div className="relative flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 text-2xl ring-1 ring-violet-500/20">
                  🚀
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
                    Focus
                  </p>

                  <h4 className="text-lg font-bold">
                    Modern & Responsive Apps
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    UI • Performance • UX
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-emerald-500/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-400/20">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                    Availability
                  </p>

                  <h4 className="mt-1 font-bold text-white">
                    Open to Opportunities
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Internships • Freelance • Full-time
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================
            STATS
        ========================== */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

          {[
            ["10+", "Projects"],
            ["7+", "Technologies"],
            ["∞", "Learning"],
            ["100%", "Passion"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                {number}
              </div>

              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                {label}
              </p>
            </div>
          ))}

        </div>

        {/* =========================
            WHAT I DO
        ========================== */}
        <div className="mt-24">

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
              What I Do
            </p>

            <h3 className="text-3xl font-extrabold sm:text-4xl">
              Turning Ideas Into{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Digital Products
              </span>
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/[0.06]"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-black text-white/[0.025]">
                  0{index + 1}
                </span>

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 text-2xl ring-1 ring-violet-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>

                <h4 className="text-lg font-bold">
                  {service.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-5 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>

        {/* =========================
            CURRENTLY LEARNING
        ========================== */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          {/* Learning */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-fuchsia-600/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
                Currently Learning
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Always{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Improving
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Technology never stops evolving. I continuously learn new
                tools and concepts to improve my development skills.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {learning.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/10 hover:text-fuchsia-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Development Mindset */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              My Approach
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              How I{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Build
              </span>
            </h3>

            <div className="mt-7 space-y-5">

              {[
                ["01", "Understand", "Understand the problem and requirements."],
                ["02", "Plan", "Choose the right technology and architecture."],
                ["03", "Build", "Write clean, reusable and maintainable code."],
                ["04", "Improve", "Test, optimize and continuously improve."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-xs font-bold text-violet-400 ring-1 ring-violet-500/20">
                    {number}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM QUOTE
        ========================== */}
        <div className="mt-20 text-center">

          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] px-7 py-7 backdrop-blur-xl">

            <div className="mb-4 text-3xl text-violet-400">
              “
            </div>

            <p className="text-base italic leading-8 text-slate-400 sm:text-lg">
              I don't just write code — I build solutions that turn ideas
              into meaningful digital experiences.
            </p>

            <div className="mt-5 h-px w-20 mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500" />

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Vanshika Khandelwal
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glows */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My Education
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My academic background and continuous journey of learning
            modern technologies.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="mx-auto max-w-4xl">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-500/10 md:p-10">

            {/* Gradient Top Border */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

            <div className="flex flex-col gap-8 md:flex-row md:items-center">

              {/* Icon */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-5xl">
                🎓
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300">
                    Bachelor's Degree
                  </span>

                  <span className="text-sm text-slate-500">
                    2022 – 2026
                  </span>
                </div>

                <h3 className="text-2xl font-bold md:text-3xl">
                  B.Tech in Computer Science
                </h3>

                <p className="mt-2 text-lg font-medium text-fuchsia-400">
                  Laxmi Devi Institute of Engineering and Technology, Alwar
                </p>

                <p className="mt-4 leading-7 text-slate-400">
                  Studied computer science fundamentals along with practical
                  web development, programming, databases, software
                  development, and modern technologies.
                </p>
              </div>
            </div>

            {/* Subjects */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Key Areas
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Programming",
                  "Web Development",
                  "Database Management",
                  "Data Structures",
                  "Software Development",
                  "Computer Networks",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/30 hover:text-violet-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/20">
            <div className="text-3xl">💻</div>
            <h3 className="mt-4 font-bold">Practical Learning</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Turning concepts into real-world projects and applications.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-fuchsia-400/20">
            <div className="text-3xl">📚</div>
            <h3 className="mt-4 font-bold">Continuous Learning</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Exploring new tools, frameworks, and development practices.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-pink-400/20">
            <div className="text-3xl">🚀</div>
            <h3 className="mt-4 font-bold">Future Focused</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Building skills for modern full-stack development and beyond.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
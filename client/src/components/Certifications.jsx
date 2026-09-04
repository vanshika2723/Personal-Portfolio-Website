function Certifications() {
  const certifications = [
 
{
  icon: "🏆",
  year: "2026",
  title: "Engineering Internship – Full Stack Engineering",
  issuer: "CodingAtom",
  description:
    "Successfully completed an Engineering Internship at CodingAtom on the Full Stack Engineering track, contributing to production-grade work as a real contributor and receiving reviews based on the programme's delivery standards.",
  tags: ["Full Stack Engineering", "Internship", "Production Work"],
  link: "https://www.codingatom.in/badges/share.php?id=CA-2026-177BC933",
},


 
{
  icon: "📜",
  year: "2026",
  title: "Front End Developer – Multi-Step Loan Application Form",
  issuer: "Zetheta Algorithms Private Limited",
  description:
    "Successfully completed a Front End Developer project focused on building a Multi-Step Loan Application Form, strengthening skills in JavaScript, React, form validation, responsive design, and UI/UX.",
  tags: ["Frontend Development", "JavaScript", "React", "UI/UX"],
  link: "https://www.zetheta.com/certificate/44250a20/",
},



{
  icon: "🤖",
  year: "2026",
  title: "QuizOff 2026 – AI Quiz Participation",
  issuer: "Unstop",
  description:
    "Participated in QuizOff 2026, India's Biggest AI Quiz, organized by Unstop. The quiz provided an opportunity to test and expand my knowledge of Artificial Intelligence and emerging technologies in a competitive environment.",
  tags: ["Artificial Intelligence", "AI", "Quiz", "Learning"],
  link: "https://cdn.unstop.com/quiz_off_certs_v2/2cbb974a-ba03-4e51-a7c6-c8dad0f9d682.png ",
},




{
  icon: "💻",
  year: "2026",
  title: "Full Stack Development with AI",
  issuer: "PW Skills",
  description:
    "Successfully completed the Full Stack Development with AI Program, gaining practical knowledge of modern full-stack development and AI technologies.",
  tags: ["Full Stack Development", "AI", "Web Development"],
  link: "https://drive.google.com/file/d/1aSUD4b6WxcIgPiFdROZURpZNzoLxK1u3/view?usp=sharing",
},




  ];

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

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
            🏆 Achievements & Learning
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A collection of certifications, achievements, workshops, and
            learning milestones that represent my continuous growth as a
            developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Top Gradient */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="absolute right-5 top-5 text-xs font-bold text-slate-700">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 text-2xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              {/* Year */}
              <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                {item.year}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                {item.title}
              </h3>

              {/* Issuer */}
              <p className="mt-2 text-sm font-medium text-fuchsia-400">
                {item.issuer}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {item.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition hover:border-violet-500/30 hover:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Button */}
              <a
                href={item.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition-all duration-300 hover:gap-3 hover:text-fuchsia-400"
              >
                View Certificate
                <span>→</span>
              </a>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl transition-all duration-500 group-hover:bg-violet-600/20" />
            </div>
          ))}
        </div>

        {/* Bottom Achievement Banner */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-pink-600/10 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                🚀 Always Learning, Always Growing
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                I continuously improve my technical skills through courses,
                certifications, projects, workshops, and hands-on development.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30"
            >
              Let's Connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
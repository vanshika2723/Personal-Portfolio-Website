import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError("Unable to load projects.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
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

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My Work
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A collection of projects I've built using modern technologies,
            creative design and clean development practices.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-40 items-center justify-center">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-violet-400 border-t-transparent" />
              Loading projects...
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mx-auto max-w-xl rounded-2xl border border-red-400/20 bg-red-500/10 px-6 py-5 text-center text-red-300">
            {error}
          </div>
        )}

        {/* Projects */}
        {!loading && !error && (
          <>
            {projects.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
                <p className="text-slate-400">
                  No projects available yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <article
                    key={project._id}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-900/20"
                  >
                    {/* Top Gradient */}
                    <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600" />

                    {/* Project Number */}
                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-sm font-bold text-violet-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="p-7">

                      {/* Icon */}
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 text-2xl ring-1 ring-white/10 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                        💻
                      </div>

                      {/* Title */}
                      <h3 className="pr-12 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-400">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies?.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-violet-400/10 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/20"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3">

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-600/40"
                          >
                            Live Demo
                            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                              ↗
                            </span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                          >
                            GitHub
                            <span>↗</span>
                          </a>
                        )}

                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/20" />
                  </article>
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}

export default Projects;
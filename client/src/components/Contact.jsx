import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully! ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Have a project idea, collaboration opportunity, or just want to
            say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Wrapper */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:col-span-2 lg:p-10">
            {/* Card Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-2xl shadow-lg shadow-violet-600/20">
                💬
              </div>

              <h3 className="text-2xl font-bold">
                Let's Work{" "}
                <span className="text-violet-400">Together</span>
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Have a project idea or want to discuss an opportunity? Feel
                free to send me a message. I'm always open to interesting
                projects and collaborations.
              </p>

              {/* Contact Items */}
              <div className="mt-10 space-y-5">
                {/* Email */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                    ✉️
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:vanshika@example.com"
                      className="text-sm text-slate-200 transition hover:text-violet-400"
                    >
                      vanshikakhandelwal102@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/10 text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Location
                    </p>

                    <p className="text-sm text-slate-200">
                      Rajasthan, India
                    </p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                    💻
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      GitHub
                    </p>

                    <a
                      href="https://github.com/vanshika2723"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-200 transition hover:text-violet-400"
                    >
                      github.com/vanshika2723
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm text-emerald-300">
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl lg:col-span-3 lg:p-10">
            {/* Top Gradient */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500" />

            <div className="mb-8">
              <p className="text-sm font-medium text-violet-400">
                SEND A MESSAGE
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Let's start a conversation
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition duration-300 focus:border-violet-500 focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition duration-300 focus:border-violet-500 focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition duration-300 focus:border-violet-500 focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </span>
              </button>

              {/* Status */}
              {status && (
                <div
                  className={`rounded-xl border px-4 py-3 text-center text-sm ${
                    status.includes("successfully")
                      ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                      : "border-red-400/20 bg-red-400/5 text-red-300"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Usually responds within{" "}
            <span className="font-medium text-violet-400">24 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
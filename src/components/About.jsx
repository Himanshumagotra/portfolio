export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-950/60 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            B.Tech CSE student passionate about building modern web experiences.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            I&apos;m currently pursuing B.Tech in Computer Science and Engineering at
            Lovely Professional University. I enjoy solving real-world problems using
            clean, maintainable code and love working with the MERN stack to build
            full‑stack web applications.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            My interests lie in web development, backend APIs, and software
            engineering. I regularly explore new tools in the JavaScript ecosystem
            and sharpen my problem‑solving skills through coding practice and
            projects.
          </p>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">University</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Lovely Professional University
              </p>
              <p className="mt-1 text-xs text-slate-400">CGPA: 7.5</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">Degree</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                B.Tech Computer Science & Engineering
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">
                Primary Skills
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                MERN Stack, JavaScript, Problem Solving
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">Location</p>
              <p className="mt-1 text-sm font-medium text-slate-100">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


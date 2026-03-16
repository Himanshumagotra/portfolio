const skills = [
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', icon: 'devicon-express-original' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-950 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Technologies I work with
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            A snapshot of the languages, frameworks, and tools I use to build full‑stack
            web applications and solve real‑world problems.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-slate-900/70">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex min-w-[110px] max-w-[150px] flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-3 text-center text-xs text-slate-200 shadow-sm shadow-slate-950/70 transition hover:-translate-y-1 hover:border-indigo-500/80 hover:shadow-lg hover:shadow-indigo-500/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/90 transition group-hover:bg-slate-900 group-hover:shadow-[0_0_25px_rgba(129,140,248,0.7)]">
                  <i className={`${skill.icon} text-[22px]`} aria-hidden="true" />
                </div>
                <span className="font-medium text-[11px]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


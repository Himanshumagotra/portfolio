import { useEffect, useState } from 'react';

const typingItems = [
  'MERN Stack Developer',
  'Frontend Enthusiast',
  'Problem Solver',
  'B.Tech CSE @ LPU',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingItems[index % typingItems.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (subIndex < current.length) {
          setSubIndex((s) => s + 1);
          setText(current.slice(0, subIndex + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
          setText(current.slice(0, subIndex - 1));
        } else {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, deleting ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/resume/CV.png';
    link.download = 'Himanshu-Magotra-CV.png';
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.2),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="animate-pulse-slow absolute -left-20 top-10 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="animate-pulse-slow absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-sky-400/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/40">
            Open to Web & Software Development Internships
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Himanshu&nbsp;Magotra
            </span>
            <span className="block text-2xl font-semibold text-slate-300 sm:text-3xl">
              Aspiring Web Developer | B.Tech CSE (MERN Focus)
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            I&apos;m a Computer Science undergraduate at Lovely Professional University
            who loves building fast, modern web applications using the MERN stack.
            I enjoy turning complex problems into clean, scalable software.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-300 md:justify-start">
            <span className="font-medium text-slate-200">I am a</span>
            <span className="rounded-full bg-slate-900/80 px-3 py-1 font-mono text-xs uppercase tracking-wide text-sky-300 ring-1 ring-sky-500/40">
              {text}
              <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-sky-300 align-middle" />
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button
              onClick={handleScrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-6 py-2.5 text-sm font-medium text-slate-100 shadow-sm transition hover:border-indigo-500 hover:bg-slate-900"
            >
              Download CV
            </button>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-100 ring-1 ring-slate-700/80 transition hover:ring-indigo-500/80"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-1 justify-center md:mt-0">
          <div className="relative h-64 w-64 max-w-xs rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 p-[1px] shadow-2xl shadow-indigo-900/30 sm:h-72 sm:w-72">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_10%_0,_rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_90%_100%,_rgba(129,140,248,0.45),transparent_55%)] opacity-70" />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-slate-950/90 px-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/90 ring-1 ring-indigo-500/40">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  B.Tech CSE
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  Lovely Professional University
                </p>
                <p className="text-xs text-slate-400">Web & Software Developer</p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-left text-[11px] text-slate-300">
                <div className="rounded-xl bg-slate-900/70 p-2 ring-1 ring-slate-800">
                  <p className="text-[10px] font-semibold text-slate-400">Focus</p>
                  <p>MERN Stack, React, APIs</p>
                </div>
                <div className="rounded-xl bg-slate-900/70 p-2 ring-1 ring-slate-800">
                  <p className="text-[10px] font-semibold text-slate-400">Location</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


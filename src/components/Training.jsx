import trainingPreview from '../assets/images/training.png';

export default function Training() {
  return (
    <section
      id="training"
      className="scroll-mt-24 bg-slate-950 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Training & Courses
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            C Programming Training
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            Completed foundational training in C programming, covering core concepts
            such as variables, control structures, functions, arrays, pointers, and
            problem‑solving using algorithms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr,1.2fr] md:items-center">
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/70">
            <p className="text-xs font-semibold text-slate-400">Training Title</p>
            <p className="text-sm font-medium text-slate-100">
              C Programming Training
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Built a strong understanding of procedural programming and memory
              management, which helps me reason about performance and low‑level
              details when working with higher‑level languages like C++ and
              JavaScript.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-300">
              <li>• Core C syntax, data types, and operators</li>
              <li>• Functions, recursion, and modular programming</li>
              <li>• Arrays, strings, pointers, and dynamic memory</li>
              <li>• Problem‑solving using structured programming</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <figure className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-900/80">
              <img
                src={trainingPreview}
                alt="C Programming Training Certificate"
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent px-4 py-3 text-xs font-medium text-slate-100">
                C Programming Training Certificate
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}


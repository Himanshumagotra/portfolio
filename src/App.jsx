import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Training from './components/Training.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import cvImage from './assets/resume/CV.png';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <ScrollProgress />
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <section
          id="resume"
          className="scroll-mt-24 bg-slate-950/50 px-4 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
              Resume
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Download my CV
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              A concise overview of my education, technical skills, and projects tailored
              for software development and web development roles.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href={cvImage}
                download="Himanshu-Magotra-CV.png"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


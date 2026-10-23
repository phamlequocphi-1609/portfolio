import Link from "next/link";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function Home() {
  const techStack = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Vitest",
    "Turbopack",
    "Docker",
  ];

  const highlights = [
    {
      title: "Fullstack Architecture",
      desc: "Scalable web apps built with modern Next.js App Router, SSR, and robust APIs.",
      icon: Code2,
    },
    {
      title: "UI/UX & Performance",
      desc: "Pixel-perfect interfaces optimized for Core Web Vitals and lightning-fast UX.",
      icon: Sparkles,
    },
    {
      title: "Automated CI/CD",
      desc: "Seamless deployment pipelines with GitHub Actions, Vitest testing, and Vercel.",
      icon: Terminal,
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-purple-600/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/5 backdrop-blur-md bg-[#090a0f]/60 sticky top-0">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo with Signature font */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-cyan-400 font-light text-xl group-hover:-translate-x-0.5 transition-transform">
              &lt;
            </span>
            <span
              className="text-2xl text-white font-normal tracking-wide"
              style={{ fontFamily: "var(--font-signature), cursive" }}
            >
              Phi Pham
            </span>
            <span className="font-mono text-cyan-400 font-light text-xl group-hover:translate-x-0.5 transition-transform">
              /&gt;
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-cyan-400 transition-colors"
            >
              Expertise
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-28 flex flex-col gap-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Software Engineer &amp; Frontend Specialist
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Building elegant, high-impact digital experiences.
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Hi, I&apos;m{" "}
            <span className="text-white font-medium">Phi Pham</span>. I
            specialize in designing and engineering modern web applications with
            a focus on clean architecture, seamless UX, and resilient automated
            pipelines.
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-8 w-full">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
              Technologies &amp; Ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-zinc-300 text-xs font-mono hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight Cards */}
        <section
          id="services"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </section>

        {/* Live CI/CD Status Showcase Banner */}
        <section className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-blue-950/10 to-purple-950/20 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Globe className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-white font-medium text-base">
                CI/CD Pipeline is Live
              </h3>
              <p className="text-zinc-400 text-sm">
                Automated Vitest checks, ESLint verification &amp; Vercel
                deployment on every release.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/phamlequocphi-1609/portfolio/actions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium transition-colors"
          >
            Check GitHub Actions
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-white/5 py-12 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span
              className="text-2xl text-white font-normal tracking-wide"
              style={{ fontFamily: "var(--font-signature), cursive" }}
            >
              Phi Pham
            </span>
            <span className="text-zinc-500 text-xs">
              © 2026 — All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <a
              href="mailto:contact@phi.dev"
              className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

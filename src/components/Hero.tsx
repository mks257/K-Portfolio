import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-xl text-accent mb-4 font-semibold">Welcome to my portfolio</h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Kavya</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-300 mb-4">
            Software Engineer | Full-Stack Developer | Cloud Architect
          </p>
        </div>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I specialize in building scalable backend systems using Java and Spring Boot, and developing modern frontend applications using React. Passionate about cloud architecture, DevOps, and creating high-performance systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn-primary inline-flex items-center justify-center gap-2">
            View My Work
            <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">Download Resume</button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors duration-300 p-3 bg-secondary rounded-full"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors duration-300 p-3 bg-secondary rounded-full"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors duration-300 p-3 bg-secondary rounded-full"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

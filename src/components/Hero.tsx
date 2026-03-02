import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fadeInUp">
          {/* Subtle badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <p className="text-sm text-slate-300 font-light">Welcome to my portfolio</p>
          </div>

          {/* Main heading - Apple style */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light mb-6 leading-tight tracking-tight">
            Hi, I'm <span className="text-gradient font-light">Kavya</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-slate-300 mb-6 font-light">
            Software Engineer | Full-Stack Developer | Cloud Architect
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          I specialize in building scalable backend systems using Java and Spring Boot, and developing modern frontend applications using React. Passionate about cloud architecture, DevOps, and creating high-performance systems that make an impact.
        </p>

        {/* CTA Buttons - Premium Style */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary inline-flex items-center justify-center gap-2 group"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="/resume.pdf"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links - Premium Style */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover-lift"
          >
            <Github size={24} className="text-slate-300 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover-lift"
          >
            <Linkedin size={24} className="text-slate-300 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:kavyasrimeka25@gmail.com"
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover-lift"
          >
            <Mail size={24} className="text-slate-300 hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient - Black/White/Beige/Red/Yellow/Blue theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      
      {/* 3D animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-yellow-600/10 to-red-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-yellow-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fadeInUp grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture with 3D Effect */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative group">
              {/* 3D glow ring animation - Red to Blue */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse-glow" style={{ animation: 'pulseGlow 2s ease-in-out infinite' }} />
              
              {/* Another rotating ring for 3D effect */}
              <div className="absolute inset-0 border-2 border-transparent bg-clip-padding rounded-3xl" style={{
                backgroundImage: 'linear-gradient(90deg, #dc2626, #fbbf24, #3b82f6, #dc2626)',
                backgroundClip: 'padding-box',
                animation: 'rotate-3d 8s linear infinite',
              }} />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-red-600 to-yellow-600 p-1 shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f5f5f5' width='400' height='400'/%3E%3Ccircle cx='200' cy='150' r='70' fill='%23999'/%3E%3Cellipse cx='200' cy='280' rx='100' ry='80' fill='%23999'/%3E%3C/svg%3E"
                    alt="Kavya Meka" 
                    className="w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f5f5f5" width="400" height="400"/%3E%3Ccircle cx="200" cy="150" r="70" fill="%23999"/%3E%3Cellipse cx="200" cy="280" rx="100" ry="80" fill="%23999"/%3E%3C/svg%3E'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            {/* Subtle badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/30 backdrop-blur-md mb-6">
              <p className="text-sm text-red-200 font-light">Welcome to my portfolio</p>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent font-light">Kavya</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-slate-200 mb-6 font-light">
              Software Engineer | Full-Stack Developer | Cloud Architect
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          I specialize in building scalable backend systems using Java and Spring Boot, and developing modern frontend applications using React. Passionate about cloud architecture, DevOps, and creating high-performance systems that make an impact.
        </p>

        {/* CTA Buttons - Premium Style with new colors */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center gap-2 group px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 active:scale-95"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-yellow-500/50 text-yellow-100 hover:bg-yellow-500/10 hover:border-yellow-500/80 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
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
            className="p-4 rounded-full bg-gradient-to-br from-red-500/10 to-yellow-500/10 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/60 transition-all duration-300 backdrop-blur-md hover-lift transform hover:scale-110"
          >
            <Github size={24} className="text-red-300 hover:text-red-100 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gradient-to-br from-blue-500/10 to-yellow-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-md hover-lift transform hover:scale-110"
          >
            <Linkedin size={24} className="text-blue-300 hover:text-blue-100 transition-colors" />
          </a>
          <a
            href="mailto:kavyasrimeka25@gmail.com"
            className="p-4 rounded-full bg-gradient-to-br from-yellow-500/10 to-red-500/10 border border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-500/60 transition-all duration-300 backdrop-blur-md hover-lift transform hover:scale-110"
          >
            <Mail size={24} className="text-yellow-300 hover:text-yellow-100 transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-500/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gradient-to-b from-red-400 to-yellow-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

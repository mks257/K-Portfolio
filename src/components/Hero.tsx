import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean, subtle background gradient - BLACK THEME */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black pointer-events-none" />
      
      {/* Subtle 3D animated background blobs - no hover */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-600/5 to-slate-600/5 rounded-full blur-3xl animate-blob-3d" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-slate-600/5 to-slate-700/5 rounded-full blur-3xl animate-blob-3d" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center animate-fadeInUp">
          {/* Left: Text Content - Professional and Clean */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-500/10 to-slate-600/10 border border-gray-400/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
              <span className="text-sm font-light text-slate-200">Available for opportunities</span>
            </div>

            {/* Main Heading - Classic and Clean */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
                Kavya Sri Meka
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" />
            </div>

            {/* Professional Title */}
            <div>
              <p className="text-2xl md:text-3xl font-light text-slate-200 mb-6">
                Full-Stack Software Engineer
              </p>
              <p className="text-lg text-slate-400 font-light">
                Specialized in Java | Spring Boot | React | Cloud Architecture
              </p>
            </div>

            {/* Description - Concise and professional */}
            <p className="text-base text-slate-300 leading-relaxed max-w-lg font-light">
              I design and build scalable backend systems and modern frontend applications. With expertise in cloud architecture, DevOps, and enterprise development, I create high-performance solutions that drive business impact.
            </p>

            {/* CTA Buttons - Clean and Professional */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-gray-900/50 active:scale-95"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              <a 
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-400 text-slate-300 hover:border-slate-200 hover:text-slate-100 hover:bg-white/5 rounded-lg font-medium transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links - Minimal and Clean */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300 hover:bg-slate-800"
                title="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/kavyasrimeka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300 hover:bg-slate-800"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:kavyasrimeka25@gmail.com"
                className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300 hover:bg-slate-800"
                title="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right: Profile Image - Clean and Professional */}
          <div className="flex justify-center md:justify-start">
            <div className="relative animate-profile-float" style={{ perspective: '1000px' }}>
              {/* Image Container with 3D effect */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated 3D border ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-400 via-slate-500 to-slate-700 p-0.5 animate-rotate-3d-slow" style={{
                  transformStyle: 'preserve-3d',
                }} />
                
                {/* Image wrapper */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <img 
                    src="/images/kavya-profile.jpg"
                    alt="Kavya Meka" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  {/* Professional SVG Fallback - Elegant design */}
                  <svg className="w-3/4 h-3/4 text-slate-600" fill="currentColor" viewBox="0 0 400 400">
                    <circle cx="200" cy="130" r="60" />
                    <path d="M 80 280 Q 80 200 200 200 Q 320 200 320 280 L 320 360 Q 320 380 300 380 L 100 380 Q 80 380 80 360 Z" />
                  </svg>
                </div>

                {/* Floating particles - 3D animation */}
                <div className="absolute -inset-4 animate-float-particle opacity-0" style={{
                  background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                  animation: 'float-particle 6s ease-in-out infinite',
                }} />
              </div>

              {/* Animated accent lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent animate-shimmer" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator - Subtle */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border border-slate-600/40 rounded-full flex items-start justify-center p-2">
            <div className="w-0.5 h-2 bg-slate-500/60 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  )
}

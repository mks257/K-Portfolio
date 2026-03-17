import { useEffect } from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Load LinkedIn badge script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <footer className="bg-primary border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-4">
              Kavya
            </h3>
            <p className="text-slate-400 text-sm">
              Full-stack engineer passionate about building scalable systems and beautiful user
              experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-accent transition-colors hover:scale-110 transform"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-accent transition-colors hover:scale-110 transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-accent transition-colors hover:scale-110 transform"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* LinkedIn Badge Section */}
        <div className="border-t border-slate-700 py-8 mb-8 flex justify-center">
          <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="kavyasrimeka" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kavyasrimeka?trk=profile-badge">
              Kavya Sri Meka
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>
            &copy; {currentYear} Kavya Sri Meka. All rights reserved. Built with{' '}
            <Heart size={16} className="inline text-red-500" /> using React & Tailwind CSS.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

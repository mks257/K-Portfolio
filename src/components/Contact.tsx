import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and create something amazing together</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:kavya@example.com"
                  className="text-slate-300 hover:text-accent transition-colors"
                >
                  kavya.meka@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-slate-300 hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300">Dallas, Texas, USA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-primary border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
              <Send size={20} />
            </button>

            {isSubmitted && (
              <p className="text-accent text-center">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

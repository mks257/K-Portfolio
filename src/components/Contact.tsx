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
    
    // Send email via mailto
    const mailtoLink = `mailto:kavyasrimeka25@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 500)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-purple-200 font-light max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Information - Apple Style Cards */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:bg-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all">
                  <Mail className="text-purple-300" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a
                    href="mailto:kavyasrimeka25@gmail.com"
                    className="text-purple-200 hover:text-purple-100 transition-colors font-light"
                  >
                    kavyasrimeka25@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:bg-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all">
                  <Phone className="text-purple-300" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a
                    href="tel:+19408433174"
                    className="text-purple-200 hover:text-purple-100 transition-colors font-light"
                  >
                    +1 (940) 843-3174
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:bg-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all">
                  <MapPin className="text-purple-300" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="text-purple-200 font-light">Dallas, Texas, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Apple Style */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-purple-500/5 border border-purple-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-purple-500/10 transition-all duration-200 backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-purple-500/5 border border-purple-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-purple-500/10 transition-all duration-200 backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-white mb-3">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-purple-500/5 border border-purple-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-purple-500/10 transition-all duration-200 backdrop-blur-sm"
                placeholder="Project inquiry"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-3 bg-purple-500/5 border border-purple-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-purple-500/10 transition-all duration-200 resize-none backdrop-blur-sm"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button - Premium Style */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
            >
              {isSubmitted ? (
                <>
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {isSubmitted && (
              <p className="text-purple-300 text-center font-light text-sm">
                ✓ Thanks for reaching out! I'll get back to you soon.
              </p>
            )}

            {/* Trust Badge */}
            <p className="text-slate-500 text-xs text-center font-light">
              Your information is secure and won't be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

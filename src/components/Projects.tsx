import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  reflection?: string
  tech: string[]
  image?: string
  githubLink?: string
  liveLink?: string
  emoji?: string
}

const multiverseProjects: Project[] = [
  {
    title: 'FitLog — Wellness & Habit Tracker',
    description:
      'A modern single-page wellness tracker built with React + Vite + React-Bootstrap. Helps users log meals, workouts, and habits, track daily progress, and view summaries across the app using smooth client-side routing.',
    reflection:
      'Learned to build a multi-page SPA with React Router, implement CRUD flows, and manage UI state across modules with a dashboard-style design.',
    tech: ['React', 'Vite', 'React-Bootstrap', 'JavaScript', 'Client-side Routing'],
    githubLink: 'https://github.com/Wellness-Tracker/FitLog',
    emoji: '🏋️',
  },
  {
    title: 'Inventory App',
    description:
      'Comprehensive inventory management application with the ability to view, update, and delete items, add new entries, and an advanced search feature for efficient retrieval based on item names.',
    reflection:
      'Focused on building a Full-Stack RESTful CRUD application starting from an MVP and progressively adding forms for advanced operations.',
    tech: ['Frontend', 'Inventory Management', 'Search'],
    githubLink: 'https://github.com/invapp-vzswe3/Inventory-App',
    emoji: '📦',
  },
  {
    title: 'Snuggle Squad — Pet Adoption Backend',
    description:
      'A Spring Boot 3.5 backend project simulating a pet adoption platform. Demonstrates authentication, authorization, CRUD APIs, and adoption workflows with a clean layered architecture.',
    reflection:
      'Mastered Spring Boot APIs by implementing role-based Spring Security (BCrypt), Hibernate/JPA, and structuring a layered application architecture.',
    tech: ['Spring Boot', 'Java', 'JPA', 'Security', 'REST APIs'],
    githubLink: 'https://github.com/CoffeeCodeSyndicate/Java-Pet-Adoption-Backend',
    emoji: '🐾',
  },
  {
    title: 'PEGA Car Rental (TCR)',
    description:
      'A Minimum Viable Product built on the Pega Platform for Tourist Car Rentals. Validates the core business process of online car rental reservations with a focus on new customer booking workflows.',
    reflection:
      'Validated core business processes with minimum initial investment by building a critical workflow for new customer onboarding, real-time validation, and task routing.',
    tech: ['Pega Platform', 'BPM', 'Business Process'],
    githubLink: 'https://github.com/mks257/PEGA-CAR-RENTAL',
    emoji: '🚗',
  },
  {
    title: 'Verizon Perks Savings Calculator',
    description:
      'A full-stack web application helping users understand savings by subscribing to streaming and digital services through Verizon Perks instead of standalone subscription prices.',
    reflection:
      'Designed as a capstone-style deployment application showcasing frontend development, backend API design, CI/CD automation, and cloud deployment.',
    tech: ['Full-Stack', 'Web Application', 'Deployment'],
    githubLink: 'https://github.com/Perks-cal/verizon-perks-savings-cal',
    emoji: '💰',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Multiverse Corner Label */}
      <div className="absolute top-8 right-8 text-xs font-bold text-amber-400 tracking-widest uppercase">
        🌌 Multiverse Corner
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          🌌 Multiverse Bootcamp Projects
        </h2>
        <p className="section-subtitle">
          Showcase of projects built during Multiverse bootcamp
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {multiverseProjects.map((project, index) => (
            <div
              key={index}
              className="card flex flex-col h-full group hover:shadow-2xl hover:border-accent"
            >
              {project.image && (
                <div className="mb-4 h-48 bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors flex items-center gap-2">
                {project.emoji && <span className="text-2xl">{project.emoji}</span>}
                {project.title}
              </h3>

              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>

              {project.reflection && (
                <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <span className="text-accent text-sm font-semibold block mb-1">💡 Key Learning</span>
                  <p className="text-slate-400 text-sm italic">{project.reflection}</p>
                </div>
              )}

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-600">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

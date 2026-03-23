import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  goal?: string
  features?: string[]
  skillsDemonstrated?: string[]
  personalTakeaways?: string
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
      'A modern single-page wellness tracker built with React + Vite + React-Bootstrap. Helps users log meals, workouts, and habits, track daily progress, and view summaries across the app.',
    goal: 'Build a single-page wellness tracker to help users log meals, workouts, and habits, and track daily progress using smooth client-side routing.',
    features: [
      'SPA Routing with react-router-dom',
      'Meals Module (CRUD & Totals)',
      'Workouts Module (duration/calories)',
      'Habits Module (daily checklist)',
      'Progress Page (weekly summaries)'
    ],
    skillsDemonstrated: [
      'Building multi-page SPA with React Router',
      'Implementing CRUD flows in React',
      'Structuring reusable components',
      'Managing UI state across multiple modules'
    ],
    personalTakeaways: 'Gained significant experience in handling complex state across different modules and building clean dashboard-style UIs using React and Tailwind.',
    tech: ['React', 'Vite', 'React-Bootstrap', 'JavaScript', 'Client-side Routing'],
    githubLink: 'https://github.com/Wellness-Tracker/FitLog',
    liveLink: 'https://fitlogg-qssq.onrender.com/',
    emoji: '🏋️',
  },
  {
    title: 'Inventory App',
    description:
      'Comprehensive inventory management application with the ability to view, update, and delete items, add new entries, and an advanced search feature for efficient retrieval.',
    goal: 'Create a Full-Stack RESTful CRUD application to track items for an e-commerce company.',
    features: [
      'View all items in inventory',
      'Add items via interactive forms',
      'Update item details dynamically',
      'Delete items seamlessly'
    ],
    skillsDemonstrated: [
      'Full-Stack Architecture',
      'RESTful API design',
      'Sequelize models and Express routes',
      'Frontend state management for Forms'
    ],
    personalTakeaways: 'Learned how to progressively build an MVP application into a more complex platform with advanced database relationships and CRUD integrations.',
    tech: ['Frontend', 'Inventory Management', 'Search'],
    githubLink: 'https://github.com/invapp-vzswe3/Inventory-App',
    emoji: '📦',
  },
  {
    title: 'Snuggle Squad — Pet Adoption Backend',
    description:
      'A Spring Boot 3.5 backend project simulating a pet adoption platform. Demonstrates authentication, authorization, CRUD APIs, and adoption workflows.',
    goal: 'Simulate a pet adoption platform backend to manage users, pets, and complex adoption application workflows.',
    features: [
      'User Management (register, login, roles)',
      'Pet Management (CRUD endpoints)',
      'Adoption Applications (status tracking)',
      'Role-based access restrictions'
    ],
    skillsDemonstrated: [
      'Spring Boot 3.5 API design',
      'Spring Security with BCrypt',
      'Spring Data JPA & H2 Database',
      'Layered Architecture Setup'
    ],
    personalTakeaways: 'Mastered core Spring Boot topics such as API security, role-based authorization, and managing complex JPA entities across bounded contexts.',
    tech: ['Spring Boot', 'Java', 'JPA', 'Security', 'REST APIs'],
    githubLink: 'https://github.com/CoffeeCodeSyndicate/Java-Pet-Adoption-Backend',
    emoji: '🐾',
  },
  {
    title: 'PEGA Car Rental (TCR)',
    description:
      'A Minimum Viable Product built on the Pega Platform for Tourist Car Rentals. Validates the core business process of online car rental reservations.',
    goal: 'Build a MVP on the Pega Platform to validate the core business process of online car rental reservations with minimal investment.',
    features: [
      'New Customer Onboarding workflows',
      'Real-time data Validation',
      'Customer Record Creation System',
      'Back-Office Approval Workflows'
    ],
    skillsDemonstrated: [
      'Pega Platform BPM configuration',
      'Agile (Scrum) methodology',
      'Task routing & Business Rules'
    ],
    personalTakeaways: 'Developed a deep understanding of validating and prioritizing core business workflows, focusing heavily on getting a Minimal Viable Product operational.',
    tech: ['Pega Platform', 'BPM', 'Business Process'],
    githubLink: 'https://github.com/mks257/PEGA-CAR-RENTAL',
    emoji: '🚗',
  },
  {
    title: 'Verizon Perks Savings Calculator',
    description:
      'A full-stack web application helping users understand savings by subscribing to streaming and digital services through Verizon Perks.',
    goal: 'Help users understand how much they can save by subscribing to streaming services through Verizon Perks instead of standalone subscriptions.',
    features: [
      'Compare standalone prices vs perk prices',
      'Calculate potential monthly savings',
      'Full CRUD REST API for perk management',
      'CI/CD automated deployment pipelines'
    ],
    skillsDemonstrated: [
      'Frontend React development',
      'Backend Spring Boot API design',
      'CI/CD Pipeline Automation',
      'Cloud Deployment strategies'
    ],
    personalTakeaways: 'Demonstrated full-stack capabilities by orchestrating everything from database schema to automated deployments and a polished React frontend.',
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

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {multiverseProjects.map((project, index) => (
            <div
              key={index}
              className="card flex flex-col h-full group hover:shadow-2xl hover:border-accent"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-accent transition-colors flex items-center gap-2">
                {project.emoji && <span className="text-2xl">{project.emoji}</span>}
                {project.title}
              </h3>

              <div className="flex-grow space-y-5">
                {project.goal && (
                  <div>
                    <span className="text-accent text-sm font-semibold block mb-1">🎯 Goal</span>
                    <p className="text-slate-300 text-sm">{project.goal}</p>
                  </div>
                )}
                
                {project.features && project.features.length > 0 && (
                  <div>
                    <span className="text-accent text-sm font-semibold block mb-1">✨ Features</span>
                    <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
                  <div>
                    <span className="text-accent text-sm font-semibold block mb-1">🛠 Skills Demonstrated</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.skillsDemonstrated.map((skill, sIdx) => (
                        <span key={sIdx} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.personalTakeaways && (
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 mt-4">
                    <span className="text-amber-400 text-sm font-semibold block mb-1">💡 Personal Takeaways</span>
                    <p className="text-slate-400 text-sm italic">{project.personalTakeaways}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-6 mt-6 border-t border-slate-600">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
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

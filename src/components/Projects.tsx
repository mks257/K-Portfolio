import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  githubLink?: string
  liveLink?: string
  emoji?: string
}

const featuredProjects: Project[] = [
  {
    title: 'E-Commerce Microservices Platform',
    description:
      'Built a scalable e-commerce platform using microservices architecture with Java Spring Boot, featuring product catalog, order management, and payment services deployed on AWS.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'Docker', 'Kubernetes', 'AWS'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'React Admin Dashboard',
    description:
      'Developed a responsive admin dashboard with real-time data visualization, user management, and analytics. Features include charts, tables, and dark mode support.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Chart.js'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'Real-Time Messaging Application',
    description:
      'Created a full-stack messaging app with WebSocket support for real-time communication. Backend uses Spring Boot with RabbitMQ, frontend built with React.',
    tech: ['React', 'Java', 'Spring Boot', 'WebSocket', 'RabbitMQ', 'MongoDB'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description:
      'Designed and implemented automated CI/CD pipelines using Jenkins and Docker, enabling continuous deployment of microservices to Kubernetes clusters.',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'AWS', 'Linux'],
    githubLink: '#',
  },
  {
    title: 'Performance Optimization Project',
    description:
      'Optimized database queries and implemented caching strategies resulting in 40% improvement in application response time. Implemented multithreading for parallel processing.',
    tech: ['Java', 'SQL', 'Redis', 'Multithreading', 'Performance Tuning'],
    githubLink: '#',
  },
  {
    title: 'Cloud Infrastructure as Code',
    description:
      'Created infrastructure as code templates using CloudFormation and Terraform for automated AWS resource provisioning and management.',
    tech: ['AWS', 'Terraform', 'CloudFormation', 'Infrastructure as Code', 'DevOps'],
    githubLink: '#',
  },
]

const multiverseProjects: Project[] = [
  {
    title: 'FitLog — Wellness & Habit Tracker',
    description:
      'A modern single-page wellness tracker built with React + Vite + React-Bootstrap. Helps users log meals, workouts, and habits, track daily progress, and view summaries across the app using smooth client-side routing.',
    tech: ['React', 'Vite', 'React-Bootstrap', 'JavaScript', 'Client-side Routing'],
    githubLink: 'https://github.com/Wellness-Tracker/FitLog',
    emoji: '🏋️',
  },
  {
    title: 'Inventory App',
    description:
      'Comprehensive inventory management application with the ability to view, update, and delete items, add new entries, and an advanced search feature for efficient retrieval based on item names.',
    tech: ['Frontend', 'Inventory Management', 'Search'],
    githubLink: 'https://github.com/invapp-vzswe3/Inventory-App',
    emoji: '📦',
  },
  {
    title: 'Snuggle Squad — Pet Adoption Backend',
    description:
      'A Spring Boot 3.5 backend project simulating a pet adoption platform. Demonstrates authentication, authorization, CRUD APIs, and adoption workflows with a clean layered architecture.',
    tech: ['Spring Boot', 'Java', 'JPA', 'Security', 'REST APIs'],
    githubLink: 'https://github.com/CoffeeCodeSyndicate/Java-Pet-Adoption-Backend',
    emoji: '🐾',
  },
  {
    title: 'PEGA Car Rental (TCR)',
    description:
      'A Minimum Viable Product built on the Pega Platform for Tourist Car Rentals. Validates the core business process of online car rental reservations with a focus on new customer booking workflows.',
    tech: ['Pega Platform', 'BPM', 'Business Process'],
    githubLink: 'https://github.com/mks257/PEGA-CAR-RENTAL',
    emoji: '🚗',
  },
  {
    title: 'Verizon Perks Savings Calculator',
    description:
      'A full-stack web application helping users understand savings by subscribing to streaming and digital services through Verizon Perks instead of standalone subscription prices.',
    tech: ['Full-Stack', 'Web Application', 'Deployment'],
    githubLink: 'https://github.com/Perks-cal/verizon-perks-savings-cal',
    emoji: '💰',
  },
]

export default function Projects() {
  const [showMultiverse, setShowMultiverse] = useState(true)
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Multiverse Corner Label */}
      {showMultiverse && (
        <div className="absolute top-8 right-8 text-xs font-bold text-amber-400 tracking-widest uppercase">
          🌌 Multiverse Corner
        </div>
      )}
      
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          {showMultiverse ? '🌌 Multiverse Bootcamp Projects' : 'Featured Projects'}
        </h2>
        <p className="section-subtitle">
          {showMultiverse 
            ? 'Showcase of projects built during Multiverse bootcamp' 
            : 'Showcase of my work and technical expertise'}
        </p>

        {/* Toggle Button for Featured Projects */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowMultiverse(!showMultiverse)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              showMultiverse
                ? 'bg-gray-800 text-slate-200 hover:bg-gray-700 border border-gray-700'
                : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/50'
            }`}
          >
            {showMultiverse ? 'View Featured Projects' : '🌌 Back to Multiverse'}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showMultiverse ? multiverseProjects : featuredProjects).map((project, index) => (
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

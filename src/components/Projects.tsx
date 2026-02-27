import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  githubLink?: string
  liveLink?: string
}

const projects: Project[] = [
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcase of my work and technical expertise</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
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

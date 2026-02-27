import { Briefcase, Calendar } from 'lucide-react'

interface Job {
  company: string
  position: string
  duration: string
  description: string[]
}

const jobs: Job[] = [
  {
    company: 'Verizon',
    position: 'Software Developer',
    duration: 'Mar 2025 - Present',
    description: [
      'Developed and supported software solutions for Verizon\'s MYBIZ platform using TypeScript in scalable, highly available environments',
      'Developed a React-based Micro Frontend (MFE) with TypeScript to optimize offer presentation across all line accounts',
      'Designed and implemented NBX workflows for Below-the-Line (BTL) offers, enabling targeted recommendations for business customers',
      'Performed functional, integration, and regression testing across multiple environments to validate NBX flows',
      'Collaborated with cross-functional teams in Agile (Scrum) environment to support real-time recommendations across digital and assisted sales channels',
      'Supported DevOps operations by troubleshooting environment-level issues and ensuring application availability across multiple stages',
      'Designed and implemented a Jenkins automation job using YAML-based playbook to upgrade Apache Tomcat versions',
      'Assisted with React frontend and Spring Boot microservice deployments, gaining hands-on experience with microservices architecture',
      'Contributed to all stages of SDLC from design to deployment, delivering high-quality features that met all deadlines',
      'Led daily stand-ups and cross-team coordination using JIRA and Confluence to align projects with delivery goals',
    ],
  },
  {
    company: 'HCA',
    position: 'Software Developer',
    duration: '2023 - 2025',
    description: [
      'Designed and maintained REST API microservices using Java and Spring Boot',
      'Implemented messaging systems using RabbitMQ and Kafka for asynchronous processing',
      'Deployed scalable applications using AWS services (EC2, S3, RDS)',
      'Optimized database queries and implemented multithreading for performance',
      'Collaborated in Agile environments and participated in code reviews',
    ],
  },
  {
    company: 'Visteon',
    position: 'Software Developer',
    duration: '2021 - 2023',
    description: [
      'Contributed to full software development lifecycle projects',
      'Worked with relational (Oracle, SQL) and NoSQL (MongoDB) databases',
      'Supported CI/CD pipelines using Docker, Jenkins, and Kubernetes',
      'Implemented RESTful APIs and integrated third-party services',
      'Participated in system design and architecture discussions',
    ],
  },
  {
    company: 'University of North Texas',
    position: 'Graduate Research Assistant',
    duration: '2019 - 2021',
    description: [
      'Developed and delivered programming curricula for students',
      'Mentored students in Python and embedded systems programming',
      'Conducted research on distributed systems and cloud computing',
      'Strengthened leadership, communication, and technical mentoring skills',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and contributions</p>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="card border-l-4 border-accent hover:border-accent-light transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-accent" size={24} />
                    <h3 className="text-2xl font-bold text-white">{job.position}</h3>
                  </div>
                  <p className="text-lg text-accent-light">{job.company}</p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Calendar size={18} className="text-slate-400" />
                  <span className="text-slate-400">{job.duration}</span>
                </div>
              </div>

              <ul className="space-y-2 ml-8">
                {job.description.map((desc, idx) => (
                  <li key={idx} className="text-slate-300 flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

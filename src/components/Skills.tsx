interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'JUnit', 'Maven'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    items: ['Oracle', 'SQL', 'MongoDB', 'Redis', 'PostgreSQL', 'NoSQL'],
  },
  {
    category: 'Messaging & Streaming',
    items: ['Kafka', 'RabbitMQ', 'Apache MQ', 'Event-driven Architecture'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Postman', 'Selenium', 'Linux', 'AWS Services', 'Azure'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card border border-slate-600">
              <h3 className="text-xl font-bold text-accent mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary rounded-full text-sm text-slate-300 hover:text-accent hover:bg-slate-800 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

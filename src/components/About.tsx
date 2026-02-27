import { Code2, Cloud, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Full-Stack Developer | Cloud Engineer | DevOps Enthusiast</p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a Software Engineer with a Master's in Computer Engineering from the University of North Texas. I combine deep technical knowledge with real-world enterprise experience to build scalable, high-performance systems.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Currently at HCA, I design and maintain REST API microservices using Java and Spring Boot, implementing messaging systems like RabbitMQ and Kafka, and deploying scalable applications on AWS.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Previously at Visteon, I contributed to full software development lifecycle projects, working with relational and NoSQL databases, and supporting CI/CD pipelines using Docker, Jenkins, and Kubernetes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card border border-slate-600">
              <Code2 className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-slate-400">Expert in Java, Spring Boot, REST APIs, and microservices architecture.</p>
            </div>
            <div className="card border border-slate-600">
              <Cloud className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-slate-400">Proficient in AWS, Docker, Kubernetes, and cloud-native solutions.</p>
            </div>
            <div className="card border border-slate-600">
              <Zap className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-slate-400">Focused on optimization, scalability, and building high-performance systems.</p>
            </div>
            <div className="card border border-slate-600">
              <Code2 className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-slate-400">Modern React applications with focus on user experience and clean code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

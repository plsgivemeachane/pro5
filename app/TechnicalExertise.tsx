'use client';
import { motion } from 'motion/react';

export default function TechnicalExertise() {
    const expertise = [
        {
            title: 'Backend Development',
            description: 'Expertise in building robust server-side applications with focus on performance, scalability, and modern API development.',
            technologies: ['Node.js', 'Python', 'Java', 'Go', 'Express', 'Django', 'Spring Boot', 'FastAPI', 'RESTful APIs', 'GraphQL', 'Microservices', 'Serverless', 'Kafka', 'RabbitMQ', 'gRPC']
        },
        {
            title: 'Infrastructure & Optimization',
            description: 'Designing and optimizing backend infrastructure with focus on scalability, security, and system performance.',
            technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana', 'ELK Stack']
        },
        {
            title: 'API & System Design',
            description: 'Designing and implementing scalable APIs and system architectures with focus on performance, security, and maintainability.',
            technologies: ['RESTful APIs', 'GraphQL', 'Microservices', 'System Architecture', 'Event-Driven Design', 'Serverless', 'Load Balancing', 'Caching Strategies', 'Security Protocols', 'OAuth/JWT']
        }
    ];

    return (
        <section id="technical-expertise" className="py-24 lg:py-32 border-t-2 border-accent">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                <div className="mb-20 lg:mb-24">
                    <motion.span 
                        className="text-xs tracking-[0.3em] uppercase text-accent inline-block mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Core Competencies
                    </motion.span>
                    <motion.h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Technical Expertise
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-accent/20 border-2 border-accent">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-background p-8 lg:p-12"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                        >
                            <div className="mb-6">
                                <span className="text-xs tracking-[0.2em] uppercase text-accent/60">
                                    0{index + 1}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-medium mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            
                            <p className="text-sm text-foreground/60 leading-relaxed mb-8">
                                {item.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs px-3 py-1 border border-accent/30 text-foreground/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

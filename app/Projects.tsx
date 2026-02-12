'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type ProjectCategory = 'API Development' | 'Database Architecture' | 'Microservices' | 'System Optimization';

interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    description: string;
    technologies: string[];
    impact: string;
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

    const projects: Project[] = [
        {
            id: 1,
            title: "RESTful API for E-commerce Platform",
            category: "API Development",
            description: "Developed a scalable RESTful API for a high-traffic e-commerce platform, handling product catalog, user management, and order processing with secure JWT authentication and Redis caching.",
            technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis", "Docker"],
            impact: "Reduced API response time by 40% and supported 10k+ concurrent users with 99.9% uptime"
        },
        {
            id: 2,
            title: "Multi-tenant Database Design for SaaS Application",
            category: "Database Architecture",
            description: "Designed and implemented a multi-tenant database architecture for a SaaS application using PostgreSQL partitioning and CitusDB, ensuring data isolation, scalability, and performance across thousands of tenants.",
            technologies: ["PostgreSQL", "Schema Design", "Partitioning", "CitusDB", "Database Optimization"],
            impact: "Achieved 99.9% uptime and supported 5000+ tenants with isolated data, reducing query times by 60%"
        },
        {
            id: 3,
            title: "Containerized Microservices with Docker and Kubernetes",
            category: "Microservices",
            description: "Architected and deployed a microservices-based system using Docker containers orchestrated with Kubernetes, implementing gRPC for inter-service communication and Prometheus for monitoring.",
            technologies: ["Docker", "Kubernetes", "Node.js", "gRPC", "Prometheus", "Service Mesh"],
            impact: "Improved deployment frequency by 5x and reduced failure rate by 70%, enabling rapid feature development and reliable scaling"
        },
        {
            id: 4,
            title: "Performance Tuning for High-traffic Application",
            category: "System Optimization",
            description: "Optimized a high-traffic web application through database query optimization, Redis caching strategies, and Nginx load balancing, significantly improving backend performance and response times.",
            technologies: ["Redis", "PostgreSQL", "Nginx", "Load Testing", "APM", "Performance Tuning"],
            impact: "Reduced page load time from 3.2s to 0.8s and increased throughput by 300%, supporting 50K+ daily active users"
        }
    ];

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    const categories: (ProjectCategory | 'All')[] = ['All', 'API Development', 'Database Architecture', 'Microservices', 'System Optimization'];

    return (
        <section id="projects" className="py-24 lg:py-32 bg-foreground/[0.02] border-t border-foreground/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
                    <div>
                        <motion.span 
                            className="text-xs tracking-[0.3em] uppercase text-foreground/40 inline-block mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Selected Work
                        </motion.span>
                        <motion.h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Projects
                        </motion.h2>
                    </div>

                    <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-sm transition-colors ${
                                    activeCategory === category
                                        ? 'bg-foreground text-background'
                                        : 'border border-foreground/20 hover:border-foreground/40'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10"
                    layout
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="bg-background p-8 lg:p-12"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                layout
                            >
                                <div className="mb-6">
                                    <span className="text-xs tracking-[0.2em] uppercase text-foreground/40">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-medium mb-4 tracking-tight">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-foreground/60 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs px-3 py-1 border border-foreground/20 text-foreground/70"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-foreground/10">
                                    <div className="flex items-start gap-3">
                                        <span className="text-foreground/60 mt-0.5">→</span>
                                        <p className="text-sm text-foreground/60">
                                            <span className="text-foreground font-medium">Impact:</span> {project.impact}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

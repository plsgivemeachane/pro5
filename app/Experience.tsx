'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const experience = [
        {
            title: 'Senior Backend Engineer',
            company: 'TechNova Solutions',
            period: '2021 — Present',
            technologies: ['Node.js', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS'],
            responsibilities: [
                'Architected and implemented scalable microservices infrastructure using Node.js, Docker, and Kubernetes, serving 100K+ daily active users',
                'Optimized database queries and implemented Redis caching, improving API response times by 40% and reducing server load',
                'Implemented horizontal scaling for user service, supporting growth from 10K to 100K+ daily active users with zero downtime',
                'Led a team of 5 backend engineers and mentored 3 junior developers in backend best practices and system design'
            ],
            technicalDetails: [
                'Designed and deployed an event-driven architecture using Kafka for real-time data processing, handling 100K+ events per second',
                'Implemented circuit breaker pattern and retry mechanisms, improving system resilience to 99.9% uptime',
                'Built CI/CD pipelines with GitHub Actions, reducing deployment time by 60% and enabling daily production releases',
                'Migrated legacy monolith to microservices architecture with zero downtime, improving system scalability and maintainability'
            ]
        },
        {
            title: 'Backend Developer',
            company: 'DataFlow Systems',
            period: '2018 — 2021',
            technologies: ['Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker'],
            responsibilities: [
                'Designed and optimized PostgreSQL databases, reducing query execution time from 10 seconds to 200ms and improving system performance',
                'Developed high-performance RESTful APIs and GraphQL endpoints serving 50K+ daily active users across mobile and web platforms',
                'Implemented database replication and failover systems, improving uptime to 99.99% and ensuring data availability',
                'Collaborated with DevOps team to implement comprehensive monitoring with Prometheus and Grafana, reducing incident response time by 70%'
            ],
            technicalDetails: [
                'Created data warehouse solution using ETL pipelines processing 10TB+ daily, enabling business intelligence and analytics',
                'Implemented OAuth 2.0 and JWT authentication, improving security compliance and protecting sensitive user data',
                'Built real-time analytics dashboard with WebSocket connections, providing live insights to business stakeholders',
                'Optimized database indexes and queries, reducing CPU usage by 40% and improving overall system performance'
            ]
        },
        {
            title: 'Software Engineer',
            company: 'Innovate Labs',
            period: '2016 — 2018',
            technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
            responsibilities: [
                'Developed robust backend services for customer management system using Java and Spring Boot, serving 1000+ daily users',
                'Designed and implemented server-side technologies including REST APIs and database schema for core business functionality',
                'Contributed to code quality improvements through peer code reviews and comprehensive testing, increasing code coverage to 85%',
                'Collaborated with frontend team to integrate backend APIs with React applications, ensuring seamless data flow and user experience'
            ],
            technicalDetails: [
                'Built high-performance RESTful APIs serving 1000+ daily active users with consistent sub-200ms response times',
                'Implemented comprehensive unit and integration tests, increasing code coverage to 85% and reducing production bugs',
                'Participated in database design for customer management system, optimizing schema for performance and scalability',
                'Learned and applied design patterns improving code maintainability and enabling faster feature development'
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 lg:py-32 border-t border-foreground/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                <div className="mb-20 lg:mb-24">
                    <motion.span 
                        className="text-xs tracking-[0.3em] uppercase text-foreground/40 inline-block mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Career Journey
                    </motion.span>
                    <motion.h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Professional Experience
                    </motion.h2>
                </div>

                <div className="relative">
                    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-foreground/20" />
                    
                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-12 lg:pl-20"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                            >
                                <div className="absolute left-0 top-0 w-4 h-4 border-2 border-foreground bg-background" />
                                
                                <div className="bg-foreground/[0.02] border border-foreground/10 p-8 lg:p-12">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
                                        <div>
                                            <h3 className="text-xl lg:text-2xl font-medium mb-2 tracking-tight">
                                                {job.title}
                                            </h3>
                                            <p className="text-foreground/60">
                                                {job.company}
                                            </p>
                                        </div>
                                        <span className="text-xs tracking-[0.2em] uppercase text-foreground/40 whitespace-nowrap">
                                            {job.period}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {job.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs px-3 py-1 border border-foreground/20 text-foreground/70"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        {job.responsibilities.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3 text-sm text-foreground/70">
                                                <span className="text-foreground/40 mt-0.5">—</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {job.technicalDetails && (
                                        <div>
                                            <motion.button
                                                onClick={() => toggleExpand(index)}
                                                className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
                                            >
                                                <motion.span
                                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    +
                                                </motion.span>
                                                {expandedIndex === index ? 'Hide Details' : 'Technical Details'}
                                            </motion.button>
                                            
                                            <AnimatePresence>
                                                {expandedIndex === index && (
                                                    <motion.div
                                                        className="mt-6 pt-6 border-t border-foreground/10"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ul className="space-y-2 text-sm text-foreground/60">
                                                            {job.technicalDetails.map((detail, detailIndex) => (
                                                                <li key={detailIndex} className="flex items-start gap-3">
                                                                    <span className="text-foreground/40 mt-0.5">—</span>
                                                                    <span>{detail}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

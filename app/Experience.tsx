'use client';

import { BiLayer, BiServer, BiData, BiCodeAlt } from 'react-icons/bi';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'motion/react';
import { TextEffect } from '@/components/ui/text-effect';

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="bg-gray-800/50 py-20">
            <div className="container mx-auto px-4">
                <TextEffect 
                  per="word" 
                  as="h2" 
                  preset="fade-in-blur" 
                  className="text-4xl md:text-5xl font-bold mb-4 text-center"
                  speedReveal={0.8}
                  speedSegment={0.1}
                >
                  Professional
                </TextEffect>
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-4xl md:text-5xl font-bold text-center mb-16">
                  <TextEffect 
                    per="word" 
                    preset="scale" 
                    speedReveal={1.2}
                    speedSegment={0.15}
                    delay={0.5}
                  >
                    Experience
                  </TextEffect>
                </div>

                <motion.div 
                   className="relative border-l-2 border-gray-700 ml-3 md:ml-6 pl-6 md:pl-10 space-y-10"
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 0.2 }}
                   transition={{ duration: 0.8, staggerChildren: 0.2 }}
                 >
                    {experience.map((job, index) => (
                         <motion.div 
                           key={index} 
                           className="relative"
                           initial={{ opacity: 0, y: 50, scale: 0.9 }}
                           whileInView={{ opacity: 1, y: 0, scale: 1 }}
                           viewport={{ once: true, amount: 0.3 }}
                           transition={{ 
                             delay: index * 0.2, 
                             duration: 0.6,
                             type: "spring",
                             stiffness: 100
                           }}
                           whileHover={{ 
                             scale: 1.02,
                             transition: { duration: 0.2 }
                           }}
                         >
                            <motion.div 
                               className="absolute -left-[42px] md:-left-[50px] top-0 w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center"
                               initial={{ scale: 0, rotate: -180 }}
                               whileInView={{ scale: 1, rotate: 0 }}
                               viewport={{ once: true, amount: 0.3 }}
                               transition={{ 
                                 delay: 0.2 + index * 0.2, 
                                 duration: 0.5,
                                 type: "spring"
                               }}
                               whileHover={{ scale: 1.2, rotate: 360 }}
                             >
                                 {job.icon}
                             </motion.div>
                            <motion.div 
                               className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
                               initial={{ opacity: 0, x: 30 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               viewport={{ once: true, amount: 0.3 }}
                               transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                               whileHover={{ 
                                 y: -2,
                                 boxShadow: "0 10px 25px rgba(59, 130, 246, 0.1)"
                               }}
                             >
                                 <motion.div 
                                  className="flex flex-col md:flex-row md:justify-between md:items-center mb-4"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.3 }}
                                  transition={{ delay: 0.4 + index * 0.2, duration: 0.4 }}
                                >
                                   <motion.h3 
                                     className="text-xl font-bold"
                                     initial={{ opacity: 0, x: -20 }}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     viewport={{ once: true, amount: 0.3 }}
                                     transition={{ delay: 0.5 + index * 0.2, duration: 0.3 }}
                                   >
                                       {job.title}
                                   </motion.h3>
                                   <motion.span 
                                     className="text-blue-400 text-sm font-medium bg-blue-400/10 px-3 py-1 rounded-full mt-2 md:mt-0"
                                     initial={{ opacity: 0, x: 20 }}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     viewport={{ once: true, amount: 0.3 }}
                                     transition={{ delay: 0.7 + index * 0.2, duration: 0.3 }}
                                   >
                                       {job.period}
                                   </motion.span>
                               </motion.div>
                               <motion.h4 
                                 className="text-gray-300 mb-4"
                                 initial={{ opacity: 0, x: -20 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 viewport={{ once: true, amount: 0.3 }}
                                 transition={{ delay: 0.6 + index * 0.2, duration: 0.3 }}
                               >
                                   {job.company}
                               </motion.h4>
                                
                                {/* Technologies tags */}
                                <motion.div 
                                  className="flex flex-wrap gap-2 mb-4"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.3 }}
                                  transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                                >
                                    {job.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className={`px-2 py-1 rounded-full text-xs ${tech.color}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ 
                                              delay: 0.9 + index * 0.2 + techIndex * 0.1, 
                                              duration: 0.3,
                                              type: "spring",
                                              stiffness: 200
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech.name}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.ul 
                                  className="space-y-2 text-gray-300"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.3 }}
                                  transition={{ delay: 1.1 + index * 0.2, duration: 0.4 }}
                                >
                                    {job.responsibilities.map(
                                        (item, itemIndex) => (
                                            <motion.li
                                             key={itemIndex}
                                             className="flex items-start gap-2"
                                             initial={{ opacity: 0, x: -20 }}
                                             whileInView={{ opacity: 1, x: 0 }}
                                             viewport={{ once: true, amount: 0.3 }}
                                             transition={{ 
                                               delay: 1.2 + index * 0.2 + itemIndex * 0.1, 
                                               duration: 0.3 
                                             }}
                                             whileHover={{ x: 5 }}
                                         >
                                                <FaChevronRight
                                                    size={14}
                                                    className="text-blue-400 mt-1 flex-shrink-0"
                                                />
                                                <span>{item}</span>
                                            </motion.li>
                                        )
                                    )}
                                </motion.ul>

                                {/* Expandable technical details */}
                                {job.technicalDetails && (
                                    <motion.div 
                                      className="mt-4"
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true, amount: 0.3 }}
                                      transition={{ delay: 1.4 + index * 0.2, duration: 0.4 }}
                                    >
                                        <motion.button
                                            onClick={() => toggleExpand(index)}
                                            className="flex items-center text-blue-400 hover:text-blue-300 text-sm"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ delay: 1.5 + index * 0.2, duration: 0.3 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.div
                                              animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                                              transition={{ duration: 0.2 }}
                                            >
                                              <FaChevronRight className="mr-1" />
                                            </motion.div>
                                            {expandedIndex === index ? 'Show less' : 'Technical details'}
                                        </motion.button>
                                        
                                        {expandedIndex === index && (
                                            <motion.div 
                                              className="mt-3 pt-3 border-t border-gray-700"
                                              initial={{ opacity: 0, height: 0 }}
                                              animate={{ opacity: 1, height: 'auto' }}
                                              exit={{ opacity: 0, height: 0 }}
                                              transition={{ duration: 0.3 }}
                                            >
                                                <motion.ul 
                                                  className="text-gray-400 space-y-2 text-sm"
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{ delay: 0.1, duration: 0.3 }}
                                                >
                                                    {job.technicalDetails.map((detail, detailIndex) => (
                                                        <motion.li 
                                                          key={detailIndex} 
                                                          className="flex items-start gap-2"
                                                          initial={{ opacity: 0, x: -20 }}
                                                          animate={{ opacity: 1, x: 0 }}
                                                          transition={{ 
                                                            delay: 0.2 + detailIndex * 0.1, 
                                                            duration: 0.3 
                                                          }}
                                                          whileHover={{ x: 5 }}
                                                        >
                                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                                            <span>{detail}</span>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}
                            </motion.div>
                         </motion.div>
                     ))}
                 </motion.div>
            </div>
        </section>
    );
}

const experience = [
    {
        title: 'Senior Backend Engineer',
        company: 'TechNova Solutions',
        period: '2021 - Present',
        icon: <BiServer size={16} className="text-blue-400" />,
        technologies: [
            { name: 'Node.js', color: 'bg-green-500/20 text-green-400' },
            { name: 'Kubernetes', color: 'bg-blue-500/20 text-blue-400' },
            { name: 'PostgreSQL', color: 'bg-purple-500/20 text-purple-400' },
            { name: 'Redis', color: 'bg-red-500/20 text-red-400' },
            { name: 'AWS', color: 'bg-orange-500/20 text-orange-400' },
        ],
        responsibilities: [
            'Architected and implemented scalable microservices infrastructure using Node.js, Docker, and Kubernetes, serving 100K+ daily active users',
            'Optimized database queries and implemented Redis caching, improving API response times by 40% and reducing server load',
            'Implemented horizontal scaling for the user service, supporting growth from 10K to 100K+ daily active users with zero downtime',
            'Led a team of 5 backend engineers and mentored 3 junior developers in backend best practices and system design',
        ],
        technicalDetails: [
            'Designed and deployed an event-driven architecture using Kafka for real-time data processing, handling 100K+ events per second',
            'Implemented circuit breaker pattern and retry mechanisms, improving system resilience to 99.9% uptime',
            'Built CI/CD pipelines with GitHub Actions, reducing deployment time by 60% and enabling daily production releases',
            'Migrated legacy monolith to microservices architecture with zero downtime, improving system scalability and maintainability',
        ],
    },
    {
        title: 'Backend Developer',
        company: 'DataFlow Systems',
        period: '2018 - 2021',
        icon: <BiData size={16} className="text-blue-400" />,
        technologies: [
            { name: 'Python', color: 'bg-green-500/20 text-green-400' },
            { name: 'Django', color: 'bg-blue-500/20 text-blue-400' },
            { name: 'PostgreSQL', color: 'bg-purple-500/20 text-purple-400' },
            { name: 'MongoDB', color: 'bg-orange-500/20 text-orange-400' },
            { name: 'Docker', color: 'bg-cyan-500/20 text-cyan-400' },
        ],
        responsibilities: [
            'Designed and optimized PostgreSQL databases, reducing query execution time from 10 seconds to 200ms and improving system performance',
            'Developed high-performance RESTful APIs and GraphQL endpoints serving 50K+ daily active users across mobile and web platforms',
            'Implemented database replication and failover systems, improving uptime to 99.99% and ensuring data availability',
            'Collaborated with DevOps team to implement comprehensive monitoring with Prometheus and Grafana, reducing incident response time by 70%',
        ],
        technicalDetails: [
            'Created data warehouse solution using ETL pipelines processing 10TB+ daily, enabling business intelligence and analytics',
            'Implemented OAuth 2.0 and JWT authentication, improving security compliance and protecting sensitive user data',
            'Built real-time analytics dashboard with WebSocket connections, providing live insights to business stakeholders',
            'Optimized database indexes and queries, reducing CPU usage by 40% and improving overall system performance',
        ],
    },
    {
        title: 'Software Engineer',
        company: 'Innovate Labs',
        period: '2016 - 2018',
        icon: <BiCodeAlt size={16} className="text-blue-400" />,
        technologies: [
            { name: 'Java', color: 'bg-red-500/20 text-red-400' },
            { name: 'Spring Boot', color: 'bg-green-500/20 text-green-400' },
            { name: 'MySQL', color: 'bg-blue-500/20 text-blue-400' },
            { name: 'REST APIs', color: 'bg-purple-500/20 text-purple-400' },
        ],
        responsibilities: [
            'Developed robust backend services for customer management system using Java and Spring Boot, serving 1000+ daily users',
            'Designed and implemented server-side technologies including REST APIs and database schema for core business functionality',
            'Contributed to code quality improvements through peer code reviews and comprehensive testing, increasing code coverage to 85%',
            'Collaborated with frontend team to integrate backend APIs with React applications, ensuring seamless data flow and user experience',
        ],
        technicalDetails: [
            'Built high-performance RESTful APIs serving 1000+ daily active users with consistent sub-200ms response times',
            'Implemented comprehensive unit and integration tests, increasing code coverage to 85% and reducing production bugs',
            'Participated in database design for customer management system, optimizing schema for performance and scalability',
            'Learned and applied design patterns improving code maintainability and enabling faster feature development',
        ],
    },
];

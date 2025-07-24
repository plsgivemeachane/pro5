'use client';
import { 
    BiCodeAlt, 
    BiServer, 
    BiData, 
} from 'react-icons/bi';
import { motion } from 'motion/react';
import { TextEffect } from '@/components/ui/text-effect';

export default function TechnicalExertise() {
    return (
        <section id="technical-expertise" className="py-20 ">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <TextEffect 
                        per="word" 
                        preset="fade-in-blur"
                        className="text-6xl font-bold"
                    >
                        Backend Development
                    </TextEffect>
                    <TextEffect 
                        per="word" 
                        preset="scale"
                        delay={0.5}
                        className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                    >
                        Expertise
                    </TextEffect>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                        duration: 0.6,
                        staggerChildren: 0.2 
                    }}
                >
                    {/* Backend Development */}
                    <motion.div 
                        className="p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors group"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ 
                            scale: 1.02, 
                            y: -5,
                            transition: { duration: 0.2 } 
                        }}
                    >
                        <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <BiServer size={28} className="text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                            Backend Development
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Expertise in building robust server-side applications with focus on
                            performance, scalability, and modern API development. Specializing in
                            high-throughput systems and distributed architectures.
                        </p>
                        <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            {['Node.js', 'Python', 'Java', 'Go', 'Express', 'Django', 'Spring Boot', 'FastAPI', 'RESTful APIs', 'GraphQL', 'Microservices', 'Serverless', 'Kafka', 'RabbitMQ', 'gRPC'].map((tech, index) => (
                                <motion.span 
                                    key={tech}
                                    className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-blue-500/20 transition-colors cursor-default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Infrastructure & System Optimization */}
                    <motion.div 
                        className="p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors group"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ 
                            scale: 1.02, 
                            y: -5,
                            transition: { duration: 0.2 } 
                        }}
                    >
                        <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                            <BiData size={28} className="text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                            Infrastructure & System Optimization
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Designing and optimizing backend infrastructure with focus on
                            scalability, security, and system performance. Implementing robust
                            deployment and monitoring solutions.
                        </p>
                        <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana', 'ELK Stack'].map((tech, index) => (
                                <motion.span 
                                    key={tech}
                                    className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-green-500/20 transition-colors cursor-default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* API Development & System Design */}
                    <motion.div 
                        className="p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors group"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ 
                            scale: 1.02, 
                            y: -5,
                            transition: { duration: 0.2 } 
                        }}
                    >
                        <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                            <BiCodeAlt size={28} className="text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">
                            API Development & System Design
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Designing and implementing scalable APIs and system architectures with focus on
                            performance, security, and maintainability.
                        </p>
                        <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            {['RESTful APIs', 'GraphQL', 'Microservices', 'System Architecture', 'Event-Driven Design', 'Serverless', 'Load Balancing', 'Caching Strategies', 'Security Protocols', 'OAuth/JWT'].map((tech, index) => (
                                <motion.span 
                                    key={tech}
                                    className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-purple-500/20 transition-colors cursor-default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

'use client';
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Main Footer Content */}
            <footer className="bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <motion.div 
                    className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* About Section */}
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            quanvndzai
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Passionate Fullstack Developer & Backend Specialist crafting innovative solutions with modern technologies.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="https://github.com/plsgivemeachane"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub size={14} />
                            </motion.a>
                            <motion.a
                                href="mailto:rakis9076@gmail.com"
                                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEnvelope size={14} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <h4 className="font-semibold text-white">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Experience', href: '#experience' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Contact', href: '#contact' }
                            ].map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                                    whileHover={{ x: 5 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                    >
                        <h4 className="font-semibold text-white">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'].map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.2, delay: 0.35 + index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                        <p className="text-gray-500 text-xs mt-4">
                            Location: Binh Phuoc, Vietnam
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div 
                    className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <span>© {new Date().getFullYear()} quanvndzai. Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 1.5 }}
                        >
                            <FaHeart className="text-red-500" size={12} />
                        </motion.div>
                        <span>in Vietnam</span>
                    </div>
                    
                    <motion.button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.5 }}
                    >
                        <FaArrowUp size={14} />
                    </motion.button>
                </motion.div>
                
                {/* YUZUKA TEAM Section */}
                <motion.div 
                    className="py-16 border-t border-gray-700 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                >
                    <motion.h1 
                        className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-cyan-300 select-none whitespace-nowrap leading-none tracking-wider"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                            textShadow: '0 0 30px rgba(103, 232, 249, 0.8), 0 0 60px rgba(103, 232, 249, 0.4), 0 0 90px rgba(103, 232, 249, 0.2)'
                        }}
                    >
                        YUZUKA TEAM
                    </motion.h1>
                </motion.div>
                </div>
            </footer>
        </>
    );
}

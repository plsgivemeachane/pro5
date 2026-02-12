'use client';
import { motion } from 'motion/react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-foreground/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
                                Let's build something great together.
                            </h2>
                            <p className="text-sm text-foreground/60 mb-8 max-w-md">
                                Available for freelance projects and full-time opportunities. Based in Binh Phuoc, Viet Nam.
                            </p>
                            <motion.button
                                onClick={scrollToTop}
                                className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
                                whileHover={{ x: 5 }}
                            >
                                Back to top
                                <span>↑</span>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">Contact</p>
                                    <div className="space-y-3">
                                        <a 
                                            href="mailto:rakis9076@gmail.com"
                                            className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                                        >
                                            rakis9076@gmail.com
                                        </a>
                                        <p className="text-sm text-foreground/70">
                                            Binh Phuoc, Viet Nam
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">Social</p>
                                    <div className="space-y-3">
                                        <a 
                                            href="https://github.com/plsgivemeachane"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className="py-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-foreground/40">
                        © {new Date().getFullYear()} QUANVNDZAI. All rights reserved.
                    </p>
                    <p className="text-xs text-foreground/40">
                        Designed & Built with precision
                    </p>
                </div>

            </div>
        </footer>
    );
}

'use client';
import { motion } from 'motion/react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-foreground/[0.02] border-t border-foreground/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    <div>
                        <motion.span 
                            className="text-xs tracking-[0.3em] uppercase text-foreground/40 inline-block mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Get in Touch
                        </motion.span>
                        <motion.h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Let's work together
                        </motion.h2>
                        <motion.p 
                            className="text-base text-foreground/60 leading-relaxed max-w-md"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs tracking-[0.2em] uppercase text-foreground/40 mb-3"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-foreground transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs tracking-[0.2em] uppercase text-foreground/40 mb-3"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-foreground transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs tracking-[0.2em] uppercase text-foreground/40 mb-3"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="px-8 py-4 bg-foreground text-background text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </form>

                        <div className="mt-16 pt-8 border-t border-foreground/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-2">Email</p>
                                    <a 
                                        href="mailto:rakis9076@gmail.com"
                                        className="text-sm text-foreground hover:text-foreground/60 transition-colors"
                                    >
                                        rakis9076@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-2">Location</p>
                                    <p className="text-sm text-foreground">
                                        Binh Phuoc, Viet Nam
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">Connect</p>
                                <div className="flex gap-4">
                                    <motion.a
                                        href="https://github.com/plsgivemeachane"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                                        whileHover={{ y: -2 }}
                                    >
                                        GitHub
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

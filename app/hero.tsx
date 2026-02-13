'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const WORKMODE = {
    "header": "Backend Specialist",
    "subheader": "Building robust, scalable backend systems with expertise in API development, database architecture, and system optimization. Passionate about performance, security, and solving complex server-side challenges."
}

const CHILLGUY = {
    "header": "Backend Engineer",
    "subheader": "I specialize in backend development, creating high-performance APIs and database solutions. I build scalable server architectures and optimize system performance. Clean code is important, but results matter more!"
}

export default function Hero() {
    const [mode, setMode] = useState<boolean>(true);
    const [currentModeLanguage, setCurrentModeLanguage] = useState<typeof WORKMODE | typeof CHILLGUY>(WORKMODE);
    
    useEffect(() => {
        if (mode) {
            setCurrentModeLanguage(WORKMODE);
        } else {
            setCurrentModeLanguage(CHILLGUY);
        }
    }, [mode]);

    return (
        <section id="hero" className="min-h-screen relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
                
                <div className="lg:col-span-7 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-0">
                    
                    <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs tracking-[0.3em] uppercase border-b border-accent pb-1 inline-block mb-6 text-accent">
                            Backend Development &bull; System Architecture
                        </span>
                    </motion.div>

                    <motion.h1 
                        className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {currentModeLanguage["header"].split(' ').map((word, index) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-3 last:mr-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p 
                        className="text-base md:text-lg leading-relaxed max-w-2xl text-foreground/70 mb-12 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {currentModeLanguage["subheader"]}
                    </motion.p>

                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <button
                            onClick={() => setMode(!mode)}
                            className="group relative px-8 py-3 border-2 border-accent hover:bg-accent/10 transition-all"
                        >
                            <span className="text-xs tracking-[0.2em] uppercase group-hover:tracking-[0.25em] transition-all">
                                {mode ? 'Switch to Casual' : 'Switch to Formal'}
                            </span>
                        </button>
                        <span className="text-xs text-foreground/40 tracking-[0.15em] uppercase text-accent/60">
                            {mode ? 'Work Mode' : 'Chill Mode'}
                        </span>
                    </motion.div>
                </div>

                <div className="lg:col-span-5 relative">
                    <div className="absolute inset-0 bg-foreground/5" />
                    
                    <div className="relative h-full flex items-center justify-center p-8 lg:p-12">
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="absolute -inset-4 border border-accent/40" />
                            <div className="absolute -inset-8 border border-accent/20" />
                            
                            <Image
                                className="w-full max-w-md object-cover"
                                src="/images/hero.jpg"
                                alt="hero"
                                width={500}
                                height={600}
                            />
                            
                            <motion.div 
                                className="absolute -bottom-6 -left-6 bg-background border-2 border-accent px-6 py-4"
                                initial={{ opacity: 0, x: 20, y: 20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <p className="text-xs tracking-[0.2em] uppercase text-accent/80 mb-1">Based in</p>
                                <p className="text-sm font-medium">Binh Phuoc, Viet Nam</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="absolute bottom-8 right-8 text-right"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-2 text-accent/60">Experience</p>
                        <p className="text-2xl font-medium text-accent">8+ Years</p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/20" />
        </section>
    );
}

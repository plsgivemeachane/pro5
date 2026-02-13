'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
    { name: 'Expertise', href: '#technical-expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
];

export default function NavBar() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href);
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.querySelector(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element as HTMLElement;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="sticky top-0 z-50 border-b-2 border-accent bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex h-16 items-center justify-between">
                    
                    <motion.a 
                        href="#hero"
                        className="text-lg font-medium tracking-tight"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        QUANVNDZAI
                    </motion.a>

                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 text-sm transition-colors ${
                                    activeSection === item.href 
                                        ? 'text-foreground' 
                                        : 'text-foreground/60 hover:text-foreground'
                                }`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item) }}
                            >
                                {item.name}
                                <AnimatePresence>
                                    {activeSection === item.href && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                                            layoutId="activeNav"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.div 
                            className="text-xs tracking-[0.2em] uppercase text-accent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Est. 2016
                        </motion.div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

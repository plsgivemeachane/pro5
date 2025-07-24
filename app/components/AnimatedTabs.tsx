'use client'
import { AnimatedBackground } from '@/components/ui/animated-background';
import { useState, useEffect } from 'react';

export function AnimatedTabsHover() {
    const TABS = [
        { name: 'About', id: 'hero' },
        { name: 'Skills', id: 'technical-expertise' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ];

    const [activeTab, setActiveTab] = useState(TABS[0].name);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // Update active tab based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = TABS.map(tab => document.getElementById(tab.id)).filter(Boolean);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveTab(TABS[i].name);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="ml-auto flex flex-row">
            <AnimatedBackground
                defaultValue={activeTab}
                className="rounded-sm p-4 bg-violet-100 dark:bg-violet-800"
                transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.3,
                }}
                enableHover
            >
                {TABS.map((tab, index) => (
                    <button
                        key={index}
                        data-id={tab.name}
                        type="button"
                        onClick={() => {
                            setActiveTab(tab.name);
                            scrollToSection(tab.id);
                        }}
                        className={`px-2 py-0.5 transition-colors duration-300 hover:text-violet-950 dark:hover:text-violet-50 ${
                            activeTab === tab.name 
                                ? 'text-violet-950 dark:text-violet-50' 
                                : 'text-violet-600 dark:text-violet-400'
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </AnimatedBackground>
        </div>
    );
}

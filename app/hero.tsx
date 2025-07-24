'use client';
import Image from 'next/image';
import { BorderTrail } from '@/components/ui/border-trail';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { TextMorph } from '@/components/ui/text-morph';
import { TextEffect } from '@/components/ui/text-effect';


const WORKMODE = {
    "header": [
        "Backend Specialist",
        "Server-Side Expert",
    ],
    "subheader": [
        "Building robust, scalable backend systems with expertise in API development, database architecture, and system optimization. Passionate about performance, security, and solving complex server-side challenges."
    ]
}

const CHILLGUY = {
    "header": [
        "Backend Engineer",
        "API & Database Specialist"
    ],
    "subheader": [
        "I specialize in backend development, creating high-performance APIs and database solutions. I build scalable server architectures and optimize system performance. Clean code is important, but results matter more!"
    ]
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
        <section id="hero" className="flex flex-row h-screen">
            <div className="flex-1/2 flex flex-col items-start justify-center ml-16">
                <h1 className="text-4xl text-start md:text-5xl font-bold mb-4 flex flex-col">
                    <TextMorph>{currentModeLanguage["header"][0]}</TextMorph> &
                    <TextMorph className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        {currentModeLanguage["header"][1]}
                    </TextMorph>
                </h1>
                <TextEffect per='word' as='h3' preset='blur' speedSegment={1.5} speedReveal={1.5} className="text-gray-300 text-lg mb-8">
                    {currentModeLanguage["subheader"][0]}
                </TextEffect>
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" checked={mode} onCheckedChange={(vars) => setMode(vars)} />
                    <Label htmlFor="genz-mode">
                        <TextMorph className="text-gray-300 text-lg">
                            {mode ? 'Work Mode' : 'Chill Mode'}
                        </TextMorph>
                    </Label>
                </div>
            </div>
            <div className="flex-1/2 flex justify-center items-center">
                <div className="flex flex-col items-center justify-center relative p-4 rounded-full overflow-ellipsis">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-20 animate-pulse"></div>
                    <Image
                        className="rounded-full object-cover border-4 border-gray-800 relative z-10"
                        src="/images/hero.jpg"
                        alt="hero"
                        width={500}
                        height={500}
                    />
                    <BorderTrail
                        className="bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
                        size={100}
                    />
                </div>
            </div>
        </section>
    );
}

'use client'

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import Image from "next/image";

export const Feature = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
    const offsetX = useMotionValue(0);
    const offsetY = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return null;
            const borderRect = border.current.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };

        // Si l'utilisateur est sur un appareil mobile, on lance une animation automatique
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            const controlsX = animate(offsetX, [0, 100, 200, 300, 400], { repeat: Infinity, repeatType: "reverse", duration: 5 });
            const controlsY = animate(offsetY, [0, 50, 150, 100, 50], { repeat: Infinity, repeatType: "reverse", duration: 5 });
            
            return () => {
                controlsX.stop();
                controlsY.stop();
            };
        } else {
            window.addEventListener('mousemove', updateMousePosition);
            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }
    }, [offsetX, offsetY]);

    return (
        <div key={title} 
         className="border border-[#126e51] px-5 py-10 text-center rounded-xl sm:flex-1 relative"
        >  
            <motion.div
                className="absolute inset-0 border-4 border-white rounded-lg" 
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage 
                }}
                ref={border}
            >
            </motion.div>
            <div className="inline-flex h-16 w-16 bg-white text-black justify-center items-center rounded-lg">
              <Image src={Icon.src} alt={title} className="feature-icon" width={100} height={100} priority/>
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <div className="max-w-xl mx-auto">
                <p className="mt-2 text-white/70">{description}</p>
            </div>
        </div>
    );
}

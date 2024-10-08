'use client'

import { features } from '@/constants/features'
import { Feature } from '../components/Feature'


export const Features = () => {
  

    return (
        <div className="bg-black text-white py-[20px] sm:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">
                    Pourquoi Winichange est le choix idéal
                </h2>
                <p className="text-center mt-5 text-xl text-white/70">
                    Découvrez ce qui rend Winichange unique et pourquoi vous devriez nous faire confiance
                </p>
                <div className="mt-16 flex flex-col md:flex-row flex-wrap gap-4 justify-center">
                    {features.map(({ title, description, icon }) => (
                        <Feature title={title} description={description} icon={icon} key={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}
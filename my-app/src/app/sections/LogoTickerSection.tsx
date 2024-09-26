'use client'

import beninLogo from '@/app/assets/benin-logo.png';
import civLogo from '@/app/assets/civ-logo.png';
import togoLogo from '@/app/assets/Togo-logo.png';
import nigerLogo from '@/app/assets/Niger-logo.png';
import senegalLogo from '@/app/assets/senegal-logo.png';
import camerLogo from '@/app/assets/Camer-logo.png';
import bfLogo from '@/app/assets/bf-logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion'


export const LogoTickerSection = () => {

    const images = [
        {src: beninLogo, alt:'Benin-logo'},
        {src:civLogo, alt: 'Civ-Logo'},
        {src:togoLogo, alt: "Togo-Logo"},
        {src:nigerLogo, alt:'Niger-Logo'},
        {src: senegalLogo, alt:'Senegal-Logo'},
        { src:camerLogo, alt: 'Camer Logo'},
        {src:bfLogo , alt: 'Bf-logo'}
    ]

  return (
    <div className='bg-black text-white py-[20px] sm:py-24'>
      <div className='container'>
        <h2 className='text-xl text-center text-white/70 '>Découvrez les pays que nous couvrons</h2>
       <div className="flex overflow-hidden before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:right-0 after:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right, #000, rgba(0,0,0,0))] after:bg-[linear-gradient(to_left, #000, rgba(0,0,0,0))]">
       <motion.div
       transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
       }}
       initial={{ translateX: 0}}
       animate={{ translateX: "-50%"}}
       className='flex gap-4 flex-none pr-16'
       >
            {
                images.map(({src, alt}) => (
                    <Image
                     key={alt} 
                     src={src}
                     alt={alt} 
                     className='flex-none h-40 w-auto'
                     />
                ))
            }
            {
                images.map(({src, alt}) => (
                    <Image
                     key={alt} 
                     src={src}
                     alt={alt} 
                     className='flex-none h-40 w-auto'
                     />
                ))
            }
        </motion.div>
       </div>
      </div>
    </div>
  )
}

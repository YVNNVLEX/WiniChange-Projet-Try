'use client'

import Image from "next/image"
import ExchangeIcon from '@/app/assets/cursor.png'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';


export const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className="bg-black text-white bg-hero-gradient relative overflow-clip py-[72px] sm:py-26 pt-48">
             <div className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border
              border-[#126e51] bg-[radial-gradient(closest-side,#000_82%,#126e51)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]">
            </div>
            <div className="container relative">
                <div className="flex justify-center">
                    <div className="inline-flex relative">
                    {isMobile ?(<motion.h1
                            className="text-6xl md:text-8xl font-bold tracking-tighter text-center mt-4 inline-flex"
                            initial={{ opacity: 0, y: 50 }} 
                            animate={{ opacity: 1, y: 0 }}    
                            transition={{ duration: 1.2, ease: "easeOut" }}  
                        >
                            L'avenir des transferts d'argent,<br /> sans frontières
                        </motion.h1>
                    ) : (
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center mt-4 inline-flex">
                            L'avenir des transferts d'argent,<br /> sans frontières
                        </h1>
                    )}
                     <motion.div
                      className="absolute left-[40px] top-[160px] hidden md:inline"
                      drag
                      dragSnapToOrigin
                      initial={{left: '-40vw', top:'280px' }}
                      animate={{left : '0px', top:'160px'}}
                      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                     >
                      <Image src={ExchangeIcon} alt="Image-Exchange"
                        height={200} width={200}
                        className="max-w-none"
                        draggable="false"
                        
                        />
                     </motion.div>
                    </div>
                </div>
              <div className="flex justify-center">
              <p className="text-center text-xl mt-8 max-w-md">
                   Interopérabilité entre cryptomonnaies, mobile money et banques
                </p>
              </div>
                <div className="flex justify-center mt-8">
                  <button className="bg-white text-black py-3 px-5 rounded-[1.8rem] font-semibold">S'inscrire maintenant</button>
                </div>
            </div>
           
        </div>
    )
}
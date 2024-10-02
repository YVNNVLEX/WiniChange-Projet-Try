"use client"

import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mockupImage from '@/app/assets/mockup.webp';

const AppSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className='bg-black text-white'>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            className="space-y-8 md:space-y-12 order-2 md:order-1"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-white font-extrabold">
              Comment s'inscrire <br /> et acheter des cryptos
            </h2>
            <div className="space-y-4 text-white/60">
              <div className="flex items-start text-sm md:text-xl">
                <span className="text-6xl font-bold text-purple-500 mr-4">1</span>
                <p className="text-sm md:text-xl">Téléchargez l'application depuis l'App Store ou Google Play.</p>
              </div>
              <div className="flex items-start text-sm md:text-xl">
                <span className="text-6xl font-bold text-purple-500 mr-4">2</span>
                <p className="text-sm md:text-xl">Créez un compte en utilisant votre adresse e-mail et un mot de passe sécurisé.</p>
              </div>
              <div className="flex items-start text-sm md:text-xl">
                <span className="text-6xl font-bold text-purple-500 mr-4">3</span>
                <p className="text-sm md:text-xl">Vérifiez votre identité en téléchargeant une pièce d'identité valide.</p>
              </div>
              <div className="flex items-start text-sm md:text-xl">
                <span className="text-6xl font-bold text-purple-500 mr-4">4</span>
                <p className="text-sm md:text-xl">Ajoutez un mode de paiement (carte de crédit, virement bancaire, etc.).</p>
              </div>
              <div className="flex items-start text-sm md:text-xl">
                <span className="text-6xl font-bold text-purple-500 mr-4">5</span>
                <p className="text-sm md:text-xl">Achetez des cryptos en quelques clics et suivez vos investissements en temps réel.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            ref={ref}
            className="relative flex justify-center md:justify-end order-1 md:order-2"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={mockupImage} 
              alt="3D Mockup" 
              className="w-full h-auto object-cover transition-transform transform hover:scale-105 duration-500"
              priority
              quality={80}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
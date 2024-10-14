'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Étape 1: Créez un Compte',
    description: 'Commencez par créer votre compte en quelques clics. C’est rapide et facile.',
    image: '/images/mockuuup.png',
  },
  {
    id: 2,
    title: 'Étape 2: Choisissez un Service',
    description: 'Choisissez le service qui vous convient parmi nos nombreuses options.',
    image: '/images/mockuuup.png', 
  },
  {
    id: 3,
    title: 'Étape 3: Profitez de nos Avantages',
    description: 'Profitez de services rapides et sécurisés avec de nombreux avantages pour vous.',
    image: '/images/mockuuup.png',
  },
];

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStep((prevStep) => (prevStep === steps.length ? 1 : prevStep + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const selectedContent = steps.find((step) => step.id === selectedStep);

  const handleSwipe = (direction: number) => {
    if (direction === 1 && selectedStep < steps.length) {
      setSelectedStep(selectedStep + 1);
    } else if (direction === -1 && selectedStep > 1) {
      setSelectedStep(selectedStep - 1);
    }
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-16 text-3xl md:text-5xl">Comment ça marche ?</h2>

        {/* Mobile Section */}
        <div className="md:hidden mt-10 md:mt-20 flex flex-col items-center justify-center">
          <div className="relative mb-6 w-full max-w-md flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-green-400 rounded-full w-80 h-80 opacity-30 blur-lg z-0"></div>
            {selectedContent && (
              <Image
                src={selectedContent.image}
                alt={selectedContent.title}
                width={400}
                height={300}
                className="relative z-10 rounded-lg shadow-2xl"
              />
            )}
          </div>
          <motion.div
            className="p-4 bg-[#126e51] w-full max-w-md rounded-lg shadow-md cursor-pointer"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 100) {
                handleSwipe(-1); 
              } else if (offset.x < -100) {
                handleSwipe(1);  
              }
            }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className={`transition-opacity duration-300 ${selectedStep === step.id ? 'block' : 'hidden'}`}
              >
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Section */}
        <div className="hidden md:grid grid-cols-2 gap-8 items-center mt-20">
          <div className="flex flex-col space-y-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`p-6 bg-[#126e51] shadow-md rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedStep === step.id ? 'border-l-4 border-red-700' : ''
                }`}
                onClick={() => setSelectedStep(step.id)}
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center p-4 relative">
        <motion.div
          key={selectedContent?.id}
          className="flex flex-col items-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-gradient-to-r from-green-500 via-teal-500 to-green-400 rounded-full w-80 h-80 opacity-30 blur-lg"></div>
          </div>
            {selectedContent && (
              <Image
                src={selectedContent.image}
                alt={selectedContent.title}
                width={400}
                height={300}
                className="mb-4"
              />
            )}
          </motion.div>
         </div>
        </div>
      </div>
    </div>
  );
}

'use client'

import React from 'react'
import clsx from 'clsx';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


const Faq = () => {
  const items = [
    {
      questions: "Qu'est-ce que Winichange ?", 
      answers:"Winichange est une plateforme qui permet l'interopérabilité entre les solutions de transfert d'argent, en reliant les cryptomonnaies aux services de transfert mobile et bancaire en Afrique et à l'international. Notre mission est de faciliter les échanges d'argent de manière simple, rapide et sécurisée",
    },
    {
      questions: "Comment puis-je m'inscrire sur la plateforme ", 
      answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
    },
    {
      questions: "Comment puis-je m'inscrire sur la plateforme ", 
      answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
    },
    {
      questions: "Comment puis-je m'inscrire sur la plateforme ", 
      answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
    },
  ]

  const AccordionItem = ({ questions, answers}:{questions: string, answers:string}) => {
    const [isOpen, setIsOpen ] = useState(false);
    return (
      <div className='cursor-pointer border-b border-white/30 py-7' onClick={() => setIsOpen(!isOpen)}>
      <div className='flex items-center'>
        <span className='flex-1 text-lg font-bold'>{questions}</span>
        {isOpen ? <FaMinus/> : <FaPlus/> }
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
          initial={{
            opacity: 0,
            height: 0,
            marginTop: 0,
          }}
          animate={{
            opacity:1,
            height:'auto',
            marginTop: "16px"
          }}
          exit={{
            opacity: 0,
            height: 0,
            marginTop: 0,
          }}
          >
          {answers}
        </motion.div>
        )}
      </AnimatePresence>
    </div> 
    )
  }


  return (
    <div className='bg-black text-white bg-gradient-to-b from-[rgba(31,198,109,0.272)]  to-black py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-center
         text-5xl md:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>Questions frequemment posées</h2>
        <div className='mt-12 max-w-[648px] mx-auto'>
          {items.map(({ questions, answers}) => (
            <AccordionItem key={questions}  questions={questions} answers={answers}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq

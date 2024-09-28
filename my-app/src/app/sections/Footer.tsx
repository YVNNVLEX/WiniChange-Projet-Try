'use client';

import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const socials = [
    {
      name: 'Instagram',
      image: '/insta.png',
    },
    {
      name: 'Facebook',
      image: '/facebook.png',
    },
    {
      name: 'WhatsApp',
      image: '/wha.png',
    },
  ];

  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [cliked, setCliked] = useState<boolean>(false);
  const animation = {
    scale: cliked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  };

  useEffect(() => {
    const handleClick = () => {
      setCliked(true);
      setTimeout(() => {
        setCliked(false);
      }, 200);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [cliked]);

  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className='container'>
         <div className='flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-white/60'>Email: contact@winichange.com</p>
            <p className='text-white/60'>Tel: +123 456 7890</p>
          </div>
          <div className='text-center md:text-right flex gap-4'>
            <a href='' className='text-white/60'>Devenir Partenaire</a>
            <a href="" className='text-white/60'>Telecharger l'APP</a>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between'>
          <div className='text-center'>
            ©2024 WiniChange. All rights reserved
          </div>
          <ul className='flex justify-center gap-2.5'>
            {isMobile ? (
              <div className="flex gap-2.5">
                <FaInstagram size="1.5em" />
                <FaFacebook size="1.5em" />
                <FaWhatsapp size="1.5em" />
              </div>
            ) : (
              socials.map((social, index) => (
                <li
                  className={`relative cursor-pointer px-5 py-2 transition-opacity duration-200 ${
                    hoveredSocial && hoveredSocial !== social.name
                      ? 'opacity-50'
                      : 'opacity-100'
                  }`}
                  key={index}
                  onMouseEnter={() => {
                    setHoveredSocial(social.name);
                    setRotation(Math.random() * 20 - 10);
                  }}
                  onMouseLeave={() => setHoveredSocial(null)}
                  onClick={() => {
                    setCliked(true);
                  }}
                >
                  <span className="block text-lg">{social.name}</span>
                  <AnimatePresence>
                    {hoveredSocial === social.name && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center"
                        animate={animation}
                      >
                        <motion.img
                          key={social.name}
                          src={social.image}
                          alt={social.name}
                          className="size-10"
                          initial={{
                            y: -40,
                            rotate: rotation,
                            opacity: 0,
                            filter: 'blur(2px)',
                          }}
                          animate={{ y: -50, opacity: 1, filter: 'blur(0px)' }}
                          exit={{ y: -40, opacity: 0, filter: 'blur(2px)' }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))
            )}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

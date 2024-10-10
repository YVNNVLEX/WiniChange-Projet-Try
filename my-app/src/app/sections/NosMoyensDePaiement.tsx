'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/app/assets/logo.png';

const MoyensDePaiement = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black">
      <div className="container mx-auto px-4 py-24 text-white" id="countrysection">
        <div className="flex flex-col md:flex-row items-center justify-center p-8">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <div className="text-start">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-gray-400">
                Plus de <span className="font-bold">40</span> Moyens <br /> de Paiement
              </h3>
              <h6 className="text-lg font-medium mb-4 text-gray-300 leading-relaxed">
                Achetez et vendez vos cryptos aux meilleurs tarifs du marché avec plus de 30 moyens de paiement mobile money:
                <span className="ml-2 font-bold">MTN, MOOV, Orange, Airtel, Tmoney, Wave, Safaricom, Equity Bank, et bien d'autres.</span>
              </h6>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative flex justify-center items-center h-[450px] w-[450px]">
              {/* Cercle central avec effet de pulsation */}
              <motion.div
                className="absolute bg-gradient-to-r from-green-600 via-gray-400 to-green-600 opacity-80 rounded-full h-56 w-56 flex items-center justify-center shadow-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
              >
                <Image src={Logo} alt="logo Izichange" width={120} height={120} className="rounded-full shadow-xl" />
              </motion.div>

              {/* Premier cercle de rotation (5 logos) avec blur */}
              <motion.div
                className="absolute h-full w-full rounded-full border border-green-500/30 backdrop-blur-lg animate-rotate-infinity"
                style={{ animationDuration: '30s', animationTimingFunction: 'ease-in-out' }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/orange_1.png" alt="Logo Orange" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
                <div className="absolute top-1/4 left-0 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/freemoney_1.png" alt="Logo Free Money" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
                <div className="absolute bottom-1/4 left-0 transform translate-y-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/wave_1.png" alt="Logo Wave" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/moov_1.png" alt="Logo Moov" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
                <div className="absolute bottom-1/4 right-0 transform translate-y-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/airtel.png" alt="Logo Airtel" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
              </motion.div>

              {/* Deuxième cercle de rotation opposée avec glow effect */}
              <motion.div
                className="absolute h-80 w-80 rounded-full border border-gray-400/30 animate-rotate-opposite backdrop-blur-lg"
                style={{ animationDuration: '35s', animationTimingFunction: 'ease-in-out' }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/tmoney_1.png" alt="Logo Tmoney" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/mtn_1.png" alt="Logo MTN" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300">
                  <Image src="/images/mpsea_1.png" alt="Logo MPsea" width={60} height={60} className="rounded-full bg-white shadow-xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoyensDePaiement;

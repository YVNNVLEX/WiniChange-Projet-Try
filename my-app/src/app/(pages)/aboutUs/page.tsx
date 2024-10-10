'use client'

import React from 'react'
import Image from "next/image"
import photo1 from "@/app/assets/ph1.webp"
import photo2 from "@/app/assets/ph2.webp"
import photo4 from "@/app/assets/photo4.jpg"
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const Apropos = () => {
  return (
    <>
      <Header />
      <div className='pt-24 md:py-24 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col lg:flex-row-reverse items-center gap-12'>
          <div className='flex-1'>
            <Image
              src={photo1}
              width={500}
              height={500}
              alt="Support"
              objectFit="cover"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className='flex-1 text-center lg:text-left space-y-5'>
            <h1 className='text-[#126e51] text-4xl lg:text-5xl font-extrabold leading-tight'>
              À Propos de <br /> WiniChange
            </h1>
            <p className='text-black/80 text-sm md:text-lg'>
              Winichange est la plus grande plateforme d'achat et de vente de cryptomonnaies en Afrique.
              Notre vision est de promouvoir l'inclusion financière pour les populations africaines.
            </p>
            <Image
              src={photo2}
              width={500}
              height={300}
              alt="Support"
              objectFit="cover"
              className="rounded-2xl shadow-lg hidden lg:block mt-5"
            />
          </div>
        </div>
        <div className='bg-[#126e51] h-1 w-3/4 mx-auto rounded-full my-10'></div>
        <div className='container mx-auto px-5 lg:px-20 flex flex-col lg:flex-row items-center gap-12 py-16'>
          <div className='flex-1'>
            <Image
              src={photo4}
              width={500}
              height={500}
              alt="Support"
              objectFit="cover"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className='flex-1 text-center lg:text-left space-y-5'>
            <h1 className='text-[#126e51] text-4xl md:text-5xl font-extrabold leading-tight'>
              Travailler <br /> chez WiniChange
            </h1>
            <p className='text-black/80 text-sm md:text-lg'>
              Si vous êtes passionné par la finance et/ou la technologie numérique, et que vous avez des compétences dans ce domaine, 
              Winichange vous offre l'opportunité de rejoindre ses équipes et de participer à une belle aventure professionnelle et humaine.
            </p>
            <p className='text-sm md:text-lg'>
              Envoyez votre CV à : 
              <span className='text-[#126e51] underline ml-2 hover:text-green-800 transition'>
                <a href="mailto:info@winichange.com">info@winichange.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Apropos

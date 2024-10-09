'use client'

import React from 'react'
import Image from "next/image"
import photo1 from "@/app/assets/ph1.webp"
import photo2 from "@/app/assets/ph2.webp"
import photo3 from "@/app/assets/employment.jpg"
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const Apropos = () => {

  return (
    <>
      <Header />
      <div className='bg-black text-white bg-gradient-to-b from-[rgba(31,198,109,0.272)] to-black py-[72px] h-full w-full sm:py-24'>

        <div className='container flex flex-col sm:flex-row gap-5 mt-10 items-center'>
          <div className='w-full sm:w-1/2'>
            <p className='text-lg'>Qui sommes-nous ?</p>
            <h1 className='font-bold text-green-700 text-3xl'>À Propos <br /> de WiniChange</h1>
            <p className='text-sm leading-6 mt-4'>
              Winichange est la plus grande plateforme d'achat et de vente de cryptomonnaies en Afrique. <br />
              Notre vision est de promouvoir l'inclusion financière pour les populations africaines.
            </p>
          </div>
          <div className='flex gap-5 ml-10'>
            <Image
              src={photo1}
              width={400}
              height={400}
              alt="Support"
              objectFit="cover"
              className="rounded-lg w-full sm:w-auto"
            />
            <Image
              src={photo2}
              width={400}
              height={400}
              alt="Support"
              objectFit="cover"
              className="rounded-lg w-full sm:w-auto"
            />
          </div>
        </div>
        
        <div className='container flex flex-col sm:flex-row gap-5 mt-10 items-center'>
          <div className='w-full sm:w-1/2'>
            <h1 className='font-bold text-green-700 text-3xl'>Travailler <br /> chez WiniChange</h1>
            <p className='text-sm leading-6 mt-4'>
              Si vous êtes passionné par la finance et/ou la technologie numérique <br /> 
              et que vous avez des compétences dans ce domaine,
              Winichange, une entreprise en pleine croissance, <br /> 
              vous offre l'opportunité de rejoindre ses équipes et de participer à une belle aventure professionnelle et humaine.
            </p>
            <p className='mt-5 text-sm'>
                Envoyez vos CV au: <span className='text-green-700 pointer'> <a href="mailto:info@winichange.com">info@winichange.com</a> </span>
            </p>
          </div>
          <div className='w-full sm:w-1/2 flex justify-center'>
            <Image
              src={photo3}
              width={400}
              height={400}
              alt="Support"
              objectFit="cover"
              className="rounded-lg w-full sm:w-auto"
            />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Apropos

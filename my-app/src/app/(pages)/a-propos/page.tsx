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
      <div className='bg-black text-white bg-gradient-to-b from-[rgba(31,198,109,0.272)] to-black py-[72px] h-full w-full sm:py-24'>

        <div className='container flex flex-col w-full gap-5 mt-10 items-center justify-center content-center lg:flex-row'>
          <div className='ml-5'>
            <p className='text-lg'>Qui sommes-nous ?</p>
            <h1 className='font-bold text-green-700 text-3xl'>À Propos <br /> de WiniChange</h1>
            <p className='text-sm leading-6 mt-4'>
              Winichange est la plus grande plateforme d'achat et de vente de cryptomonnaies en Afrique. <br />
              Notre vision est de promouvoir l'inclusion financière pour les populations africaines.
            </p>
          </div>
          <div className='flex flex-col gap-5 lg:flex-row'>
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
        
        <div className='container flex flex-col w-full gap-5 mt-10 items-center justify-center content-center lg:flex-row'>
          <div className='lg:ml-5'>
            <h1 className='font-bold text-green-700 text-3xl'>Travailler <br /> chez WiniChange</h1>
            <p className='text-sm leading-6 mt-4 lg:w-full'>
              Si vous êtes passionné par la finance et/ou la technologie numérique 
              et que vous avez des compétences dans ce domaine,
              Winichange, une entreprise en pleine croissance, 
              vous offre l'opportunité de rejoindre ses équipes et de participer à une belle aventure professionnelle et humaine.
            </p>
            <p className='mt-5 text-sm'>
                Envoyez votre CV au: <span className='text-green-700 pointer'> <a href="mailto:info@winichange.com">info@winichange.com</a> </span>
            </p>
          </div>
          <div className='w-full justify-center'>
            <Image
              src={photo4}
              width={400}
              height={400}
              alt="Support"
              objectFit="cover"
              className="rounded-lg w-full"
            />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Apropos

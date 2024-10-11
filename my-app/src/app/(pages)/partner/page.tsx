'use client'

import React from 'react'
import Image from "next/image"
import walletSky from "@/app/assets/wallsky.png"
import { twMerge } from 'tailwind-merge'
import partner from "@/app/assets/servPhotos.webp"
import crypPart from "@/app/assets/crypPart.webp"
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const Partner = () => {
  const walletSky = "/wallsky.png"

  const becomePartner = [
    {
      id: "1",
      text: "Être propriétaire d'une entreprise ",
      specialText:"officiellement enregistrée.",
      color:"blue",
    },
    {
      id: "2",
      text: "Avoir des activités qui impliquent l'utilisation de crypto-monnaies.", 
      specialText:"Ex : (être un trader de crypto-monnaies, un revendeur de crypto-monnaies...).",
      color:"indigo",
    },
    {
      id: "3",
      text: "Effectuez des transactions jusqu’à un volume moyen de ",
      specialText:"2 000 ou plus par semaine.",
      color:"green",
    },
    {
      id: "4",
      text: "Disposer de moyens de paiement tels que ",
      specialText:"Mobile Money ou compte bancaire.",
      color:"blue",
    },
  ];
  const Advantages = [
    {
      id:1,
      images: "/walletsky",
      title: "Être propriétaire d'une entreprise ",
      text:"officiellement enregistrée.",
      color:"red"
    },
    {
      id:2,
      icons: "2",
      title: "Être propriétaire d'une entreprise ",
      text:"officiellement enregistrée.",
      color:"red"
    },
    {
      id:3,
      icons: "1",
      title: "Être propriétaire d'une entreprise ",
      text:"officiellement enregistrée.",
      color:"red"
    }
  ];

  return (
    <>
      <Header />
      <div className='pt-10 md:py-24 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col lg:flex-row-reverse items-center gap-12'>
            <div>
              <h5 className='text-[#126e51] text-lg lg:text-4xl font-semibold leading-normal mb-4'>
                Devenir Partenaire
              </h5>
              <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                  Un Partenaire Winichange
              </h1>
              <p className='text-black/80 text-sm md:text-[1rem] md:leading-6'>
                Effectuez vos transactions en toute <span className='font-bold text-[#126e51]'>liberté, avec simplicité et aux meilleurs taux.</span>
              </p>
              <button className='rounded-xl bg-[#126e51] text-white mt-5 px-4 py-2 text-sm'>
                  <span>Devenir Partenaire</span>
                  
              </button>
              <Image
                src={partner}
                width={500}
                height={500}
                alt="PartnerSmile"
                objectFit="cover"
              />
            </div>
            <div className='flex flex-col items-center align-center'>
                <h1 className='font-bold text-sm'>Condition Pour Devenir Un Partenaire</h1>
                <Image
                src={crypPart}
                width={400}
                height={400}
                alt="PartnerSmile"
                className='max-w-[200px] ml-10'
                />
                <div className='flex flex-col gap-5'>
                    {
                      becomePartner.map(items => (
                        <div key={items.id} className={
                          twMerge({
                              blue: 'bg-blue-100',
                                indigo: 'bg-indigo-100',
                                green: 'bg-green-100',
                          }[items.color] || 'bg-gray-100', "p-2 rounded-lg")
                        }>
                            <h1 className={
                              twMerge({
                                blue: 'text-blue-800',
                                indigo: 'text-indigo-800',
                                green: 'text-green-800',
                              }[items.color] || 'text-gray-800', 'text-lg font-bold mb-2')
                            } >{items.id}</h1>
                            <p className='ml-5'>
                              {items.text} <span className='font-bold'>{items.specialText}</span>
                            </p>
                        </div>
                      ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center align-center'>
                <h1 className='font-bold text-lg text-center'>Avantages du partenariat WinChange</h1>
                {/* <div className='flex flex-col gap-5'>
                {
                      Advantages.map(items => (
                        <div key={items.id} className={
                          twMerge({
                              blue: 'bg-blue-100',
                                indigo: 'bg-indigo-100',
                                green: 'bg-green-100',
                          }[items.color] || 'bg-gray-100', "p-2 rounded-lg")
                        }>
                            
                        </div>
                      ))
                  }
                </div> */}
                <div className=''>
                    {
                      Advantages.map(items =>(
                        <div className='flex flex-col gap-3'>
                            <div className='w-[70px] h-[70px] p-2 rounded-full bg-green-400'>
                              <Image
                              src={items.icons}
                              width={400}
                              height={400}
                              alt="PartnerSmile"
                              className='max-w-[50px] -translate-x-2 translate-y-5'
                              />
                            </div>
                            <h5 className='text-lg font-bold'>Meilleurs taux</h5>
                            <p>Obtenez un taux des plus avantageux sur vos transactions</p>
                        </div>
                      ))
                    }
                </div>
            </div>
            <div>
              <h5 className='text-[#126e51] text-lg lg:text-4xl font-semibold leading-normal mb-4'>
                Devenir Partenaire
              </h5>
              <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                  Un Partenaire Winichange
              </h1>
              <p className='text-black/80 text-sm md:text-[1rem] md:leading-6'>
                Effectuez vos transactions en toute <span className='font-bold text-[#126e51]'>liberté, avec simplicité et aux meilleurs taux.</span>
              </p>
              <button className='rounded-xl bg-[#126e51] text-white mt-5 px-4 py-2 text-sm'>
                  <span>Devenir Partenaire</span>
                  
              </button>
              <Image
                src={partner}
                width={500}
                height={500}
                alt="PartnerSmile"
                objectFit="cover"
              />
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Partner

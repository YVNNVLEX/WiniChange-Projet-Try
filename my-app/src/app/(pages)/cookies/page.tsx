'use client'

import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import { BiCookie } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const GeneralConditions = () => {
  
    const cookies = [
        {
            title: "C'est quoi un Cookies ?", 
            text:"Les cookies sont de petits fichiers d'information qu'un serveur web génère et envoie à un navigateur web. Les navigateurs stockent les cookies qu'ils reçoivent pour une période prédéterminée ou pour la durée de la session d'un utilisateur sur un site web. Ils joignent les cookies pertinents à toutes les futures requêtes que l'utilisateur fait au serveur web. Les cookies permettent aux sites web de recueillir des informations sur l'utilisateur, ce qui permet de personnaliser l'expérience utilisateur. Par exemple, les sites d'e-commerce utilisent des cookies pour savoir quels articles les utilisateurs ont ajoutés à leurs paniers. De plus, certains cookies sont nécessaires à des fins de sécurité, comme les cookies d'authentification (voir ci-dessous). Les cookies utilisés sur Internet sont également appelés cookies HTTP. Comme une grande partie du web, les cookies sont envoyés via le protocole HTTP.",
        },
        {
          title: "Comment utilisons nous les cookies ?", 
          text:"Nous utilisons des cookies pour diverses raisons, détaillées ci-dessous. Malheureusement, dans la plupart des cas, il n'existe pas d'option standard pour désactiver les cookies sans désactiver complètement les fonctionnalités et services ajoutés à ce site. Il est recommandé de laisser tous les cookies activés si vous n'êtes pas certain de leur nécessité, car ils peuvent être essentiels à la fourniture de services en cours d'exécution.",
        },
        {
          title: "Vous souhaitez désactiver les Cookies", 
          text:"Vous pouvez empêcher l'activation des cookies en ajustant les paramètres de votre navigateur (consultez le fichier d'aide de votre navigateur pour des instructions). Veuillez noter que la désactivation des cookies affectera la fonctionnalité de ce site ainsi que de nombreux autres sites que vous visitez. Il est donc conseillé de ne pas désactiver les cookies.",
        },
        {
          title: "Cookies Tiers", 
          text:"Dans certains cas, nous utilisons également des cookies fournis par des tiers de confiance. La section suivante détaille les cookies tiers que vous pourriez rencontrer sur ce site. Nous utilisons Google Analytics, l'une des solutions d'analyse les plus répandues et fiables sur le web, pour nous aider à comprendre comment vous utilisez le site et comment nous pouvons améliorer votre expérience. Ces cookies peuvent suivre des éléments tels que la durée de votre visite sur le site et les pages que vous consultez, afin que nous puissions continuer à produire un contenu engageant. Pour plus d'informations sur les cookies de Google Analytics, consultez la page officielle de Google Analytics. Nous intégrons également des boutons et des plugins de médias sociaux sur ce site, qui vous permettent de vous connecter à vos réseaux sociaux de différentes manières. Pour permettre au site de se connecter à des plateformes telles que Twitter ou Facebook, nous utilisons des cookies qui peuvent être utilisés pour enrichir votre profil sur leur site ou contribuer aux données qu'ils détiennent pour divers objectifs définis dans leurs politiques de confidentialité respectives",
        },
        {
          title: "Qu'est-ce que Winichange ?", 
          text:"Nous espérons que cela a clarifié les choses pour vous. Comme mentionné précédemment, si vous n'êtes pas certain de la nécessité d'activer ou non les cookies, il est généralement plus prudent de les laisser activés, car ils peuvent interagir avec certaines fonctionnalités que vous utilisez sur notre site. Toutefois, si vous souhaitez obtenir de plus amples informations, vous pouvez nous contacter à l'adresse suivante : ",
        },
      ]

  return (
    <>
      <Header />
      <div>
          <h1 className='bg-gradient-to-tl from-[#126e51]  to-black min-h-56 py-56 text-white text-[70px] text-center overflow-hidden'>
              <span className='font-semibold text-[#126e51] bg-white py-0.5 px-2'>COOKIES</span>
          </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-full'>
            <a href="" className='rounded-2 p-4 '>
              C'est Quoi un Cookies
            </a>
        </div>
        <div className='pt-10 md:py-24 h-full w-full grow'>
          <div className='mx-auto px-5 lg:px-20 py-10 '>
              <h1 className='font-bold text-green-800 text-3xl'>Winichange Cookies</h1>
              {
                  cookies.map(items=>(
                      <div className='mt-10' key={cookies.indexOf(items)}>
                          <div className='flex '>
                              <h1 className='font-semibold'>
                                  <span className='mr-2'>{cookies.indexOf(items)+1}.</span>
                                  {items.title}
                              </h1>
                          </div>
                          <p className='mt-2'>
                              {items.text}
                          </p>
                      </div>
                  ))
              }
              <a href='mailto:recrutement@winichange.com' className='text-blue-700'>info@izichange.com.</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GeneralConditions

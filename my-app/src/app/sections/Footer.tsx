import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
   <footer className='py-5 bg-black text-white/60 border-t border-white/20 '>
      <div className='container'>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='text-center'>
            ©2024 WiniChange . All rights reserved
          </div>
          <ul className='flex justify-center gap-2.5'>
           <li>
            <FaWhatsapp size="1.5em"/>
           </li>
           <li>
            <FaFacebook size="1.5em"/>
           </li>
           <li>
            <FaInstagram size="1.5em"/>
           </li>
        </ul>
       </div> 
      </div>
   </footer>
  )
}

export default Footer

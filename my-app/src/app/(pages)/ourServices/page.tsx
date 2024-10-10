import Footer from '@/app/sections/Footer'
import { Header } from '@/app/sections/Header'
import SolutionsProposees from '@/app/sections/NosSolutionsProposees'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-black pt-20'>
        <Header/>
        <SolutionsProposees/>
        <Footer/>

    </div>
    </>
  )
}

export default page

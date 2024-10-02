"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { TbExchange } from "react-icons/tb";
import Logo from '@/app/assets/logo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io5"
import { IoLogoApple } from "react-icons/io5"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <header >
           <div className="flex items-center text-center justify-center gap-2 fixed top-0 mb-2 custom-width font-semibold z-20 left-20">
                <a href="#" className="flex items-center justify-center gap-2 uppercase rounded-sm flex-1 h-[3rem] w-full bg-black border-purple-200 border-l-2 border-b-2 rounded-b-3xl  text-white hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-x-90">
                <IoLogoApple className="w-5 h-5" />
                    <div className='md:flex hidden'>Application IOS</div>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 uppercase rounded-sm flex-1 w-full h-[3rem] border-purple-300 border-l-2  border-b-2 rounded-b-3xl  bg-black text-white hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-x-90">
                    <IoLogoAndroid className="w-5 h-5 "/>
                    <div className='md:flex hidden'>Application Android </div>
                </a>
            </div>
            <div className="py-5 mt-14 bg-gradient-to-r from-purple-100 to-indigo-200">
                <div className="custom-width mx-auto flex items-center justify-center ">
                    <div className="flex items-center">
                        <nav className="flex items-center gap-4 flex-1 justify-between box-content px-4">
                          <div className="flex items-center cursor-pointer">
                                <Image src={Logo} alt="mon_logo" height={55} width={55} />
                                <h1 className="text-sm mx-1 sm:mx-2 sm:text-xl font-extrabold hidden lg:flex">WINICHANGE</h1>
                          </div>
                            <div className="hidden lg:flex space-x-4">
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">A propos</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Services</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Moyens de changes</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Nos tarifs</a>
                            </div>
                            <div className="hidden lg:flex space-x-4">
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Support</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">FAQ</a>
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <a href="#"  className=' rounded-xl bg-black text-white px-8 py-2'>Se connecter</a>
                                <button className="hidden md:inline-flex bg-black/60 text-white px-8 py-2 rounded-lg font-medium  justify-center align-items tracking-tight">
                                    Devenir partenaire
                                </button>
                        </div>
                            <div  className="lg:hidden flex" >
                                <IoMenu onClick={toggleMenu} className='h-8 w-8 cursor-pointer'/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black uppercase font-light z-50 flex flex-col items-center justify-center text-white">
                    <IoClose className="h-8 w-8 cursor-pointer absolute top-5 right-5" onClick={toggleMenu} />
                    <nav className="flex flex-col gap-6 text-lg">
                    <div className="flex space-x-4">
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">A propos</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Services</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Moyens de changes</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Nos tarifs</a>
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">Support</a>
                                <a href="#" className="text-gray-700 hover:text-black transition duration-300">FAQ</a>
                            </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
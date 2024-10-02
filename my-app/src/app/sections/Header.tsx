'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { TbExchange } from "react-icons/tb";
import Logo from '@/app/assets/logo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io5";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="flex items-center text-center justify-center gap-2 w-full px-10">
                <a href="#" className="flex items-center justify-center gap-2 uppercase flex-1 h-[3rem] bg-black border-purple-200 border-l-2 border-b-2 rounded-b-3xl text-white hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-x-90">
                    <IoLogoApple className="w-5 h-5" />
                    <div className='hidden md:block'>Application IOS</div>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 uppercase flex-1 h-[3rem] bg-black border-purple-300 border-l-2 border-b-2 rounded-b-3xl text-white hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-x-90">
                    <IoLogoAndroid className="w-5 h-5" />
                    <div className='hidden md:block'>Application Android</div>
                </a>
            </div>

            <div className={ `py-5 mt-2 transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-purple-100 to-purple-200 bg-opacity-30 backdrop-blur-lg' : 'bg-gradient-to-l from-purple-100 to-purple-200 bg-opacity-30 backdrop-blur-lg border-b border-white border-opacity-20'} `}>
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="flex items-center cur">
                        <Image src={Logo} alt="mon_logo" height={55} width={55} />
                        <h1 className="text-sm mx-1 sm:mx-2 sm:text-xl font-extrabold hidden lg:block">WINICHANGE</h1>
                    </div>
                    <nav className="hidden lg:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-black transition duration-300">A propos</a>
                        <a href="#" className="text-gray-700 hover:text-black transition duration-300">Services</a>
                        <a href="#" className="text-gray-700 hover:text-black transition duration-300">Moyens de changes</a>
                        <a href="#" className="text-gray-700 hover:text-black transition duration-300">Nos tarifs</a>
                        <a href="#" className="text-gray-700 hover:text-black transition duration-300">Support</a>
                        <a href="#" className="text-gray-700 hover:text-black transition duration-300">FAQ</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <a href="#" className='rounded-xl bg-black text-white px-4 py-2'>Se connecter</a>
                        <button className="hidden md:inline-flex bg-black/60 text-white px-4 py-2 rounded-lg">Devenir partenaire</button>
                        <IoMenu onClick={toggleMenu} className="h-8 w-8 lg:hidden cursor-pointer" />
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex flex-col items-center justify-center lg:hidden">
                    <IoClose onClick={toggleMenu} className="absolute top-5 right-5 h-8 w-8 text-white cursor-pointer" />
                    <nav className="flex flex-col items-center space-y-6 text-white text-xl">
                        <a href="#" className="hover:text-gray-300 transition duration-300">A propos</a>
                        <a href="#" className="hover:text-gray-300 transition duration-300">Services</a>
                        <a href="#" className="hover:text-gray-300 transition duration-300">Moyens de changes</a>
                        <a href="#" className="hover:text-gray-300 transition duration-300">Nos tarifs</a>
                        <a href="#" className="hover:text-gray-300 transition duration-300">Support</a>
                        <a href="#" className="hover:text-gray-300 transition duration-300">FAQ</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

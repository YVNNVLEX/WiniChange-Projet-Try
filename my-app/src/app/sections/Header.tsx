import Image from "next/image";
import { TbExchange } from "react-icons/tb";
import Logo from '@/app/assets/logo.png'
import { IoMenu } from "react-icons/io5";


export const Header = () => {
    return (
        <header>
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
             <p className="text-white/60 hidden md:block">Échangez vos cryptomonnaies facilement et en toute sécurité</p>
                <div className="inline-flex gap-1 items-center">
                    <p>Commencez maintenant !</p>
                    <TbExchange className="w-6 h-6 inline-flex justify-center items-center"/>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <Image src={Logo} alt="mon_logo" height={40} width={40} />
                        <h1 className="text-sm mx-1 sm:mx-2 sm:text-xl font-extrabold">WINICHANGE</h1>
                        </div>
                        <IoMenu className="h-5 w-5 md:hidden"/>
                        <nav className="hidden md:flex gap-6 text-black/60 items-center">
                           <div className="lg:flex hidden gap-6">
                             <a href="#">Nos moyens d'échanges</a>
                                <a href="#">Nos tarifs</a>
                                <a href="#">Support</a>
                                <a href="#">FAQ</a>
                           </div>
                            <a href="#">Connexion</a>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center align-items tracking-tight">
                                Inscription
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
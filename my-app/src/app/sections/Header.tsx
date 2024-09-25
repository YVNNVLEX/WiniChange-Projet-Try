import Image from "next/image";
import { TbExchange } from "react-icons/tb";
import Logo from '@/app/assets/logo.png'
import { IoMenu } from "react-icons/io5";


export const Header = () => {
    return (
        <header className="sticky top-0">
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
             <p className="text-white/60 hidden md:block">Échangez vos cryptomonnaies facilement et en toute sécurité</p>
                <div className="inline-flex gap-1 items-center">
                    <p>Commencez maintenant !</p>
                    <TbExchange className="w-6 h-6 inline-flex justify-center items-center"/>
                </div>
            </div>
            <div className="py-5">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <Image src={Logo} alt="mon_logo" height={45} width={45} />
                        <IoMenu className="h-5 w-5 md:hidden"/>
                        <nav className="hidden md:flex gap-6 text-black/60 items-center">
                            <a href="#">À propos</a>
                            <a href="#">Nos moyens d'échanges</a>
                            <a href="#">FAQ</a>
                            <a href="#">Support</a>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center align-items tracking-tight">
                                S'inscrire
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
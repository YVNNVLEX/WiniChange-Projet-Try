'use client'

import { FaMoneyBillWave, FaExchangeAlt, FaRocket, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import { Feature } from '../components/Feature';

export const Features = () => {
    const features = [
        {
            title : 'Frais compétitifs',
            description: "Bénéficiez des taux parmi les plus bas du marché pour vos transferts d'argent, sans frais cachés",
            icon: FaMoneyBillWave 
        },
        {
            title : 'Interopérabilité mondiale',
            description: "Reliez vos cryptomonnaies aux services bancaires et de mobile money partout dans le monde, facilement et rapidement",
            icon: FaExchangeAlt  
        },
        {
            title : 'Vitesse de transaction ultra rapide',
            description: "Profitez de transferts d'argent quasi instantanés, où que vous soyez",
            icon: FaRocket 
        },
        {
            title : 'Transfert sécurisé',
            description: "Nous assurons la sécurité de vos transactions afin qu'elles aboutissent à temps !",
            icon: FaShieldAlt
        },
    ];

    return (
        <div className="bg-black text-white py-[20px] sm:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">
                    Pourquoi Winichange est le choix idéal
                </h2>
                <p className="text-center mt-5 text-xl text-white/70">
                    Découvrez ce qui rend Winichange unique et pourquoi vous devriez nous faire confiance
                </p>
                <div className="mt-16 flex flex-col md:flex-row flex-wrap gap-4 justify-center">
                    {features.map(({ title, description, icon }) => (
                        <Feature title={title} description={description} icon={icon} key={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

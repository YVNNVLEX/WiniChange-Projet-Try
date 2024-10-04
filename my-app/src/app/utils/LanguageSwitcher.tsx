import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa'; 
import logoFr from '@/app/assets/Language/fr.png';
import logoEn from '@/app/assets/Language/Etats-unis.png';

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useState('fr');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const switchLanguage = (lang: string) => {
    setActiveLang(lang);
    setIsOpen(false);
    if (lang === 'fr') {
      router.push('/fr');
    } else {
      router.push('/en');
    }
  };

  const toggleLanguageList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer">
        <Image
          src={activeLang === 'fr' ? logoFr : logoEn}
          alt={activeLang === 'fr' ? 'Logo Français' : 'Logo Anglais'}
          width={20}
          height={20}
          className="mr-2"
        />
        <span>{activeLang === 'fr' ? 'FR' : 'EN'}</span>
        <FaGlobe className="ml-2" onClick={toggleLanguageList} />
      </div>

      {isOpen && (
        <ul className="absolute mt-2 p-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {activeLang !== 'fr' && (
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => switchLanguage('fr')}>
              <div className="flex items-center justify-center">
                <Image src={logoFr} alt="Logo Français" width={20} height={20} className="mr-2" />
                <span>FR</span>
              </div>
            </li>
          )}
          {activeLang !== 'en' && (
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => switchLanguage('en')}>
              <div className="flex items-center justify-center">
                <Image src={logoEn} alt="Logo Anglais" width={20} height={20} className="mr-2" />
                <span>EN</span>
              </div>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;

import Image from "next/image";
import logoEnter from "@/app/assets/logo.png";
import check from '@/app/assets/icone.webp';
import moov from "@/app/assets/moov.svg";
import orange from "@/app/assets/orange.svg";
import wave from "@/app/assets/wave.png";
import btc from "@/app/assets/btc.svg";
import perfect from '@/app/assets/perfect.svg';
import payer from '@/app/assets/payer.svg';
import freemoney from '@/app/assets/freemoney.png';
import emoney from '@/app/assets/emoney.png';
import { LeftCurve } from "./Design/Collaboration";
import { RightCurve } from './Design/Collaboration';
import { FaArrowRight } from 'react-icons/fa';

const winichangeText = 
  "Winichange est la solution idéale pour répondre à tous vos besoins de transfert d'argent. Quelques uns de nos moyens d'echanges";

const winichangeServices = [
  {
    id: "0",
    title: "Achat et Vente",
    text: "Découvrez une plateforme intuitive pour acheter et vendre des cryptomonnaies avec facilité.",
  },
  {
    id: "1",
    title: "Binance Direct",
    text: "Accédez à Binance directement depuis notre plateforme pour des transactions simplifiées.",
  },
  {
    id: "2",
    title: "Transferts d'Argent",
    text: "Envoyez de l'argent à vos proches rapidement et en toute sécurité.",
  },
  {
    id: "3",
    title: "Achat de Crédit de Communication",
    text: "Achetez facilement des crédits de communication pour rester connecté.",
  },
];

const winichangeApps = [
  {
    id: "0",
    title: "Moov Money",
    icon: moov,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Orange Money",
    icon: orange,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Wave",
    icon: wave,
    width: 360,
    height: 280,
  },
  {
    id: "3",
    title: "BitCoin",
    icon: btc,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Perfect Money",
    icon: perfect,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "Payer",
    icon: payer,
    width: 34,
    height: 35,
  },
  {
    id: "6",
    title: "Free Money",
    icon: freemoney,
    width: 34,
    height: 35,
  },
  {
    id: "7",
    title: "E-money",
    icon: emoney,
    width: 34,
    height: 35,
  },
];

const SolutionsProposees = () => {
  return (
    <div
      id="#echange"
      className="relative py-24 lg:py-24 xl:py-40 bg-black text-white"
    >
      <div className="container lg:flex">
        <div className="flex items-center justify-center">
          <div className="lg:max-w-[25rem] max-w-full">
            <h2 className="mb-8 md:mb-8 text-3xl md:text-4xl font-bold leading-9">
              Nos services que nous proposons
            </h2>
            <ul className="max-w-[22rem] mb-10">
              {winichangeServices.map((item) => (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <Image src={check} width={40} height={40} alt="Check icon" />
                    <h6 className="ml-5 text-[16px] font-semibold">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="text-sm text-white/60 pt-2 md:pt-4">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>
            <button className="bg-white hover:bg-white/80 text-black py-3 px-8 rounded-lg font-medium flex items-center">
              Je m'inscris
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-20">
          <p className="mb-4 md:mb-8 text-white/80 lg:w-[22rem] lg:mx-auto">
            {winichangeText}
          </p>

          <div className="relative left-1/2  flex w-[22rem] sm:w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mt-20 md:mt-0">
            <div className="flex w-60 aspect-square m-auto border border-purple-400 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src={logoEnter}
                    width={38}
                    height={38}
                    alt="Winichange Logo"
                  />
                </div>
              </div>
            </div>
            <ul>
              {winichangeApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-white border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <Image
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      <div className="hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 pointer-events-none lg:block xl:left-10 right-10" />
    </div>
  );
};

export default SolutionsProposees;

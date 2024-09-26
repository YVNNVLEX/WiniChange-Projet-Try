import logoEnter from "@/app/assets/logo.png";
import check from '@/app/assets/icone.webp';
import moov from "@/app/assets/moov.svg";
import orange from "@/app/assets/orange.svg";
import wave from "@/app/assets/wave.png";
import btc from "@/app/assets/btc.svg";
import perfect from '@/app/assets/perfect.svg'
import payer from '@/app/assets/payer.svg'
import freemoney from '@/app/assets/freemoney.png';
import emoney from '@/app/assets/emoney.png'
import { LeftCurve} from "./Design/Collaboration";
import {RightCurve}  from './Design/Collaboration';
import { FaArrowRight } from 'react-icons/fa';



const winichangeText = 
  " Winichange est la solution idéale pour répondre à tous vos besoins de transfert d'argent. Nos moyens d'echanges sont les suivants";

const winichangeContent = [
  {
    id: "0",
    title: "Interopérabilité Totale",
    text: "Connectez les cryptomonnaies, mobile money et services bancaires dans une seule plateforme facile à utiliser.",
  },
  {
    id: "1",
    title: "Transferts Sécurisés",
    text: "Des systèmes de sécurité de pointe garantissent la protection de vos transactions financières.",
  },
  {
    id: "2",
    title: "Rapidité des Transactions",
    text: "Effectuez des transferts d'argent instantanés, qu'ils soient nationaux ou internationaux.",
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
    title: "payer",
    icon: payer,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "Free Money",
    icon: freemoney,
    width: 34,
    height: 35,
  },
  {
    id: "6",
    title: "E-money",
    icon: emoney,
    width: 34,
    height: 35,
  },
];

const SolutionsProposees = () => {
  return (
    <div
      id="solutionsProposees"
      className="
        relative
        py-10 xl:py-20 
        lg:py-24 xl:py-40
        bg-black text-white
      "
    >
      <div className="container lg:flex">
        <div className="flex items-center justify-center">
        <div className="lg:max-w-[25rem] max-w-full">
          <h2 className="h2 mb-8 md:mb-8 text-5xl md:text-6xl font-bold">
            Nos services que nous proposons
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-10">
            {winichangeContent.map((item) => (
              <li className="mb-3 md:mb-0 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check.src} width={40} height={40} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="text-sm text-white/60 pt-2 md:pt-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <button className="bg-white text-black py-3 px-8 rounded-lg font-medium flex items-center">
            Je m'inscris
        <FaArrowRight className="ml-2" /> 
      </button>
        </div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-20">
          <p className="mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-white/80">
            {winichangeText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] sm:w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mt-20 md:mt-0">
            <div className="flex w-60 aspect-square m-auto border border-purple-400 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={logoEnter.src}
                    width={38}
                    height={38}
                    alt="WiniLogo"
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
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon.src}
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

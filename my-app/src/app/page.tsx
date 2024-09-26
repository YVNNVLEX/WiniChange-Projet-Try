import Image from "next/image";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Country } from "./sections/Country";
import { LogoTickerSection } from "./sections/LogoTickerSection";
import { Features } from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import AppSection from "./sections/AppSection";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import FloatingButtons from "./components/FloatingCompoAndGoUp";
import SolutionsProposees from "./sections/NosSolutionsProposees";

export default function Home() {
  return (
   <>
   <FloatingButtons/>
    <Header/>
    <Hero/>
    {/*<Country/>*/}
    <LogoTickerSection/>
    <Features />
    <SolutionsProposees/>
    <Testimonials/>
    <AppSection />
    <Faq/>
    <Footer />
   </>
  );
}

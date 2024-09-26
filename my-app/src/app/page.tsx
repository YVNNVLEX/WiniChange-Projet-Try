import Image from "next/image";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Country } from "./sections/Country";
import { LogoTickerSection } from "./sections/LogoTickerSection";
import { Features } from "./sections/Features";
import NosSolutionsProposees from "./sections/NosSolutionsProposees";
import Testimonials from "./sections/Testimonials";
import AppSection from "./sections/AppSection";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import FloatingButtons from "./components/FloatingCompoAndGoUp";

export default function Home() {
  return (
   <>
   <FloatingButtons/>
    <Header/>
    <Hero/>
    {/*<Country/>*/}
    <LogoTickerSection/>
    <Features />
    <NosSolutionsProposees/>
    <Testimonials/>
    <AppSection />
    <Faq/>
    <Footer />
   </>
  );
}

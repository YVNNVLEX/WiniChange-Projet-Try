import Image from "next/image";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTickerSection } from "./sections/LogoTickerSection";
import { Features } from "./sections/Features";
import AppSection from "./sections/HowItWork";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import FloatingButtons from "./components/FloatingCompoAndGoUp";
import SolutionsProposees from "./sections/NosSolutionsProposees";
import TestimonialsSection from "./sections/Testimonialss";
import SupportSection from "./sections/SupportSection";

export default function Home() {
  return (
   <>
   <FloatingButtons/>
    <Header/>
    <Hero/>
    <LogoTickerSection/>
    <Features />
    <SolutionsProposees/>
    <TestimonialsSection/>
    <AppSection />
    <SupportSection/>
    {/*<Faq/>*/}
    <Footer />
   </>
  );
}

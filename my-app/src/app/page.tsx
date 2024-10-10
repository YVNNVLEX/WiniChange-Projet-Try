import Image from "next/image";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTickerSection } from "./sections/LogoTickerSection";
import { Features } from "./sections/Features";
import HowItWorks from "./sections/HowItWork";
import Footer from "./sections/Footer";
import FloatingButtons from "./components/FloatingCompoAndGoUp";
import SolutionsProposees from "./sections/NosSolutionsProposees";
import TestimonialsSection from "./sections/Testimonialss";
import SupportSection from "./sections/SupportSection";
import BlogSection from "./sections/BlogSection";

export default function Home() {
  return (
   <>
   <FloatingButtons/>
    <Header/>
    <Hero/>
    <LogoTickerSection/>
    <Features />
    <HowItWorks />
    <TestimonialsSection/>
    <SupportSection/>
    {/*<Faq/>*/}
    <BlogSection/>
    <Footer />
   </>
  );
}

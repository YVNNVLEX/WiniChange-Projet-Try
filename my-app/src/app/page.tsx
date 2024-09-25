import Image from "next/image";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Country } from "./sections/Country";

export default function Home() {
  return (
   <>
    <Header/>
    <Hero/>
    <Country/>
   </>
  );
}

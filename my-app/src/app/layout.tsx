import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge"

const dmSans = DM_Sans({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "WiniChange - Official Website",
  description: "Winichange est une plateforme d'interconnexion qui favorise l'interopérabilité des solutions de transfert d'argent en reliant les cryptomonnaies aux services de transfert mobile et bancaire en Afrique et dans le monde.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="relative">
      <body
        className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}
      >
        {children}
      </body>
    </html>
  );
}

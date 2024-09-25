export const Hero = () => {
    return (
        <div className="bg-black text-white bg-hero-gradient relative overflow-clip py-[72px] sm:py-20">
             <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border
              border-[#4CAF50] bg-[radial-gradient(closest-side,#000_82%,#4CAF)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]">
            </div>
            <div className="container relative">
                <div className="flex justify-center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center mt-4 inline-flex">L'avenir des transferts d'argent,<br /> sans frontières</h1>

                </div>
              <div className="flex justify-center">
              <p className="text-center text-xl mt-8 max-w-md">
                   Interopérabilité entre cryptomonnaies, mobile money et banques
                </p>
              </div>
                <div className="flex justify-center mt-8">
                  <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">S'inscrire maintenant</button>
                </div>
            </div>
           
        </div>
    )
}
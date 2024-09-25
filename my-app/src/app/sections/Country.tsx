import beninLogo from '@/app/assets/benin-logo.png';
import civLogo from '@/app/assets/civ-logo.png';
import togoLogo from '@/app/assets/Togo-logo.png';
import nigerLogo from '@/app/assets/Niger-logo.png';
import senegalLogo from '@/app/assets/senegal-logo.png';
import camerLogo from '@/app/assets/Camer-logo.png';
import bfLogo from '@/app/assets/bf-logo.png';

import Image from 'next/image'

export const Country = () => {
    return (
        <div className='py-8 bg-white md:py-12'>
           <div className='container'>
                <div className='flex overflow-hidden mask-gradient'>
                    <div className="flex gap-6 flex-none">
                    <div>
                        <Image src={beninLogo}
                        alt='benin-log'
                        className="logo-ticker-image"  
                        />
                    </div>
                    <div>
                        <Image src={civLogo}
                        alt='civ-logo'
                        className="logo-ticker-image"  
                        />
                    </div>
                    <div>
                        <Image src={senegalLogo}
                        alt='senegal-logo'
                        className="logo-ticker-image"  
                        />
                    </div>
                    <div>
                        <Image src={bfLogo}
                        alt='bf-logo'
                        className="logo-ticker-image"  
                        />
                    </div>
                    <div>
                        <Image src={nigerLogo}
                        alt='Niger-log'
                        className="logo-ticker-image"  
                        />
                    </div>
                    <div>
                        <Image src={camerLogo}
                        alt='camer-logo'
                        className="logo-ticker-image"  
                        />
                    </div>
                    <div>
                        <Image src={togoLogo}
                        alt='togo-logo'
                        className="logo-ticker-image"  
                        />
                    </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
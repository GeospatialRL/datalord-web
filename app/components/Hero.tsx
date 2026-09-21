import React from 'react';
import Btn from './Btn';


// interface BannerProps {
//     bannerTitle: string;
//     bannerDescription: string;
// }

// function Hero({ bannerTitle, bannerDescription }: BannerProps) {
    function Hero() {

    return (
        <div className="bg-[url('/images/hero_bg.svg')] bg-cover bg-center bg-no-repeat flex items-center w-full">
            {/* <div className='absolute inset-0 bg-black/50'></div> */}
            <div className="container max-w-[665px] ml-[67px] mt-[121px] mb-[92px]">
                <h1 className="text-4xl font-md text-white">Technology Built for Business.
Delivered for Results.</h1>
                <p className="py-[27px] text-white leading-relaxed">We build enterprise-grade IT solutions that transform organisations and drive measurable business outcomes.</p>

                <div className='flex text-sm gap-3'>
                    <Btn className='hover:bg-transparent'>Learn more</Btn>
                    <Btn className='bg-transparent ring-2 ring-white hover:bg-primary/50'>View our work</Btn>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Hero;
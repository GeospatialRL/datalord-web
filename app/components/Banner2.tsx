import React from 'react';


interface BannerProps {
    bannerTitle: string;
    bannerDescription: string;
}

function Banner2({ bannerTitle, bannerDescription }: BannerProps) {

    return (
        <div className="relative bg-[url('/images/services-b.jpg')] bg-cover bg-center bg-no-repeat
         flex flex-col py-6 w-full">
            <p className="text-lg text-white leading-relaxed pl-15 mb-3">{bannerDescription}</p>
            {/* <div className='absolute inset-0 bg-black/50'></div> */}
            <div className="container relative  max-w-[726px] ml-15 pl-5 px-10 w-2/3 border-l-2
             border-red-500">
                <h1 className="text-4xl font-bold mb- text-white">{bannerTitle}</h1>
                
            </div>
        </div>
    )
}

export default Banner2;
import React from 'react';


interface BannerProps {
    bannerTitle: string;
    bannerDescription: string;
}

function Banner({ bannerTitle, bannerDescription }: BannerProps) {

    return (
        <div className="relative bg-[url('/images/banner-image.jpg')] bg-cover bg-center bg-no-repeat flex items-center py-15 w-full">
            <div className='absolute inset-0 bg-black/50'></div>
            <div className="container relative  max-w-[726px] ml-15 pl-10 px-10 w-2/3 border-l-3 border-red-500">
                <h1 className="text-4xl font-bold mb-4 text-white">{bannerTitle}</h1>
                <p className="text-lg text-white leading-relaxed">{bannerDescription}</p>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Banner;
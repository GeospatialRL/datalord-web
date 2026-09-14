import React from 'react'
import Link from "next/link";
import Banner2 from '../../components/Banner2'


export default function SoftwareDev() {
    return (
        <>
            <Banner2 bannerDescription="Services/Software Development" bannerTitle="Software Development" />
            <section className='border-2'>
                <div className='justify-center border-2 border-red-500 w-[93%] mx-auto my-10'>
                    <div className='text-lg text-black-500'>
                        DataLord Technologies: Leading Software Development Company in Lagos, Nigeria
                    </div><br />
                    <h3 className='text-lg  text-gray-500'>At DataLord Technologies, we specialize in designing and developing customized software solutions to meet the unique needs of businesses across various industries. Whether you’re a startup looking for a scalable solution or an enterprise in need of complex system integrations, we ensure that our projects align with your budget and timeline—without ever compromising on quality. <br /><br />

                        Moreover, our team of highly skilled developers is proficient in the latest programming languages, frameworks, and cutting-edge technologies. As a result, we consistently deliver top-tier software solutions tailored to businesses of all sizes. From desktop and mobile applications to cloud-based systems and AI-powered innovations, we help businesses stay ahead in today’s fast-paced digital landscape.</h3>
                </div>
            </section>

            <section className='justify-center py-5 px-2 border-y mb-5 border-gray-300'>
                <div className='flex px-45  '>
                    <div className='px-8'>
                        <p className='text-red-500 text-3xl '>100%</p>
                        <h3 className='text-gray-500 py-3'>Client satisfaction rate</h3>
                    </div>
                    <div className='px-9'>
                        <p className='text-red-500 text-5xl'>End-to-End</p>
                        <h3 className='text-gray-500 py-3'>Complete solution delivery</h3>
                    </div>
                    <div className='px-9'>
                        <p className='text-red-500 text-5xl'>All Platforms</p>
                        <h3 className='text-gray-500 py-3'>Web, mobile, cloud, desktop</h3>
                    </div>
                    <div className='px-9'>
                        <p className='text-red-500 text-5xl'>Agile</p>
                        <h3 className='text-gray-500 py-3'>Iterative development approach</h3>
                    </div>
                </div>
            </section>

            <section >
                <div>
                    <div></div>
                </div>
            </section>
        </>
    )
}

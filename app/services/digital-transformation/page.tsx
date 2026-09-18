import React from 'react'
import Link from 'next/link'
import Banner2 from '../../components/Banner2'

export default function portalManagement() {
    return (
        <>
            <Banner2
                bannerDescription=" Services/Digital Transformation "
                bannerTitle="Digital Transformation"
            />
            <section>
                <div className='w-[85%] mx-auto my-10'>
                    <h2 className='text-xl font-bold text-[#0D1B2A] mb-4'>
                        DataLord Technologies: Driving Digital Transformation for Organisations in Lagos
                    </h2>
                    <p className='text-gray-500 text-sm leading-relaxed mb-4'>
                        DataLord Technologies is a premier document scanning company and trusted scanning bureau in Nigeria, known for providing secure and reliable services to both public and private organizations. We specialize in transforming physical documents into high-quality digital formats, ensuring efficiency, accessibility, and security for all your document management needs. Our onsite storage facilities and advanced scanning technologies set us apart as industry leaders in document digitization.
                    </p>
                </div>
            </section>

            <section className='border-y border-gray-200 py-6 mb-8'>
                <div className='w-[85%] mx-auto flex items-center 
                                justify-between gap-6'>
                    <div>
                        <p className='text-red-500 text-2xl font-bold pl-20'>
                            50%
                        </p>
                        <p className='text-gray-500 text-sm mt-1'>
                            Reduction in manual processing time
                        </p>
                    </div>
                    <div>
                        <p className='text-red-500 text-2xl font-bold pl-15'>
                            60%
                        </p>
                        <p className='text-gray-500 text-sm mt-1'>
                            Reduction in operational costs
                        </p>
                    </div>

                    <div>
                        <p className='text-red-500 text-2xl font-bold pl-15'>
                            3x
                        </p>
                        <p className='text-gray-500 text-sm mt-1'>
                            Increase in team productivity
                        </p>
                    </div>

                    <div>
                        <p className='text-red-500 text-2xl font-bold pl-20'>AI + IoT</p>
                        <p className='text-gray-500 text-sm mt-1'>
                            Intelligent systems for smarter operations
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex gap-10 w-[85%] mx-auto mb-16">
                <div className="flex flex-col w-[68%]">
                    {/* SERVICES SIDE  */}
                    <section className=" mb-10 ">
                        <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
                            Services
                        </h2>
                        <div className="flex mb-5">
                            <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Re-Invention of Products & Services
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Enhancing your existing offerings with advanced digital tools to keep your business relevant & competitive.
                                </p>
                            </div>

                            <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Automation of Manual Processes
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Automated workflows that eliminate inefficiencies, reduce human error, and enable faster, more accurate operations.
                                </p>
                            </div>

                        </div>

                        <div className="flex mb-5">
                            <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Data-Driven Decision-Making
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Advanced analytics, AI, and machine learning to help organisations make precise, informed decisions that drive success.
                                </p>
                            </div>
                            <div className="w-1/2 px-6 py-6 border-l border-red-500 ">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Adoption of Emerging Technologies
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Transitioning businesses to Cloud, AI, and IoT,  for smarter operations, better customer experiences, and real-time intelligence.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-5">
                            <div className="w-1/2 border-l border-red-400 
                                            px-6 py-6">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Legacy System Modernisation
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    We evaluate, restructure, and upgrade outdated systems to ensure seamless integration with modern solutions.
                                </p>
                            </div>
                            <div className="w-1/2 px-6 py-6 border-l border-red-500">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2 ">
                                    Training & Change Management
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Comprehensive training and support that empowers your people to confidently embrace new tools and workflows.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Our Process */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
                            What we offer
                        </h2>
                        <div className="flex items-start gap-5 py-5 
                                        border-b border-gray-100">
                            <span className="text-red-500 font-bold text-sm 
                                             w-8  mt-0.5">
                                01
                            </span>
                            <div>
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                    Holistic Approach
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    We focus on both technological upgrades and the cultural shift required for successful digital transformation.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 py-5 
                                        border-b border-gray-100">
                            <span className="text-red-500 font-bold text-sm 
                                             w-8  mt-0.5">
                                02
                            </span>
                            <div>
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                    Customized Solutions
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Each transformation strategy is tailored to the unique needs and goals of the client.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 py-5 
                                        border-b border-gray-100">
                            <span className="text-red-500 font-bold text-sm 
                                             w-8  mt-0.5">
                                03
                            </span>
                            <div>
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                    Future-Ready Strategies
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    We implement scalable solutions that allow businesses to adapt and thrive in evolving markets.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 py-5">
                            <span className="text-red-500 font-bold text-sm 
                                             w-8  mt-0.5">
                                04
                            </span>
                            <div>
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                    Commitment to Quality
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Our team ensures that all new and existing systems align with industry best practices and organizational objectives.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/*  RIGHT SIDE 0ooooo */}
                <div className="w-[32%] flex flex-col gap-6 pt-5">
                    <div className="bg-gray-50 rounded-sm p-6 mt-15">
                        <h4 className="text-red-500 font-bold text-xs 
                                       tracking-widest uppercase mb-4">
                            TECHNOLOGIES WE LEVERAGE
                        </h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Cloud (AWS, Azure, GCP)
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Artificial Intelligence & ML
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Internet of Things (IoT)
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Robotic Process Automation
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Business Intelligence Tools
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                API & System Integration
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                DevOps & CI/CD Pipelines
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-sm p-6">
                        <h4 className="text-red-500 font-bold text-xs 
                                       tracking-widest uppercase mb-4">
                            Industries Served
                        </h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Government & Public Sector
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Banking & Finance
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Healthcare
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Legal & Judiciary
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Education
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Telecoms and Manufacturing
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Information & Technology
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className=" mb-5 ">
                <div className="w-[85%] mx-auto">
                    <h2 className="text-xl font-bold text-[#0D1B2A] mb-8">
                        Related Services
                    </h2>
                    <div className="flex gap-6">
                        <div className="flex-1 border border-gray-200 
                                        rounded-lg p-6">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                                <img src="/images/document-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-[#0D1B2A] 
                                          text-sm mb-2">
                                Document Management System
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed 
                                          mb-4">
                                Comprehensive document management systems to organize, secure, and streamline your document workflows.
                            </p>
                            <Link
                                href="/services/document-management"
                                className="text-red-500 text-xs font-semibold 
                                           hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>

                        <div className="flex-1 border border-gray-200 rounded-lg p-6">
                            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-lg '>
                                <img src="/images/dev-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-[#0D1B2A] 
                                          text-sm mb-2">
                                Software Development
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed 
                                          mb-4">
                                Custom software solutions built with cutting-edge technologies to meet your unique business requirements.
                            </p>
                            <Link
                                href="/services/digital-transformation"
                                className="text-red-500 text-xs font-semibold 
                                           hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>

                        <div className="flex-1 border border-gray-200 
                                        rounded-lg p-6">
                            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-lg '>
                                <img src="/images/portal-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-[#0D1B2A] 
                                          text-sm mb-2">
                                Portal Management Systems
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed 
                                          mb-4">
                                Scalable cloud infrastructure and enterprise portals designed for performance, security, and user experience.
                            </p>
                            <Link
                                href="/services/portal-management"
                                className="text-red-500 text-xs font-semibold 
                                           hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

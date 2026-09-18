import React from 'react'
import Link from 'next/link'
import Banner2 from '../../components/Banner2'

export default function portalManagement() {
    return (
        <>
            <Banner2
                bannerDescription=" Services/Scanning Bureau Services "
                bannerTitle="Scanning Bureau Services"
            />
            <section>
                <div className='w-[85%] mx-auto my-10'>
                    <h2 className='text-xl font-bold text-[#0D1B2A] mb-4'>
                        DataLord Technologies: Professional Document Scanning and Digitisation Services
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
                            3M+
                        </p>
                        <p className='text-gray-500 text-sm mt-1'>
                            Documents digitized monthly
                        </p>
                    </div>

                    <div>
                        <p className='text-red-500 text-2xl font-bold pl-25'>
                            A0
                        </p>
                        <p className='text-gray-500 text-sm mt-1'>
                            Largest document size we support
                        </p>
                    </div>

                    <div>
                        <p className='text-red-500 text-2xl font-bold pl-10'>
                            99%
                        </p>
                        <p className='text-gray-500 text-sm mt-1'>
                            OCR accuracy rate
                        </p>
                    </div>

                    <div>
                        <p className='text-red-500 text-2xl font-bold pl-20'>24hr</p>
                        <p className='text-gray-500 text-sm mt-1'>
                            Average turnaround for urgent projects
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex gap-10 w-[90%] mx-auto mb-16">
                <div className="flex flex-col w-[68%]">
                    {/* Wrapping DIV */}
                    <section className=" mb-10 ">
                        <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
                            Services
                        </h2>
                        <div className="flex mb-5">

                            <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Comprehensive Scanning Solutions
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    350+ images per minute, 3M+ captured monthly,  from small to large-scale archiving projects.
                                </p>
                            </div>

                            <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Bureau Management Excellence
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Meticulous quality checks, secure audit trails, and flexible output in client-specific formats.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-5">
                            <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Industry-Specific Solutions
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Tailored scanning solutions for banking, healthcare, telecoms, manufacturing, and government sectors.
                                </p>
                            </div>
                            <div className="w-1/2 px-6 py-6 border-l border-red-500 ">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Security & Quality
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Accredited, secure, and reliable — strict data protection protocols on every project.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-5">
                            <div className="w-1/2 border-l border-red-400 
                                            px-6 py-6">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Indexing and Categorization
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Organizing scanned files for easy retrieval and use.
                                </p>
                            </div>
                            <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2 ">
                                    Data Backup and Archiving
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Ensuring long-term preservation and disaster recovery.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-5">
                            <div className="w-1/2 border-l border-red-400 
                                            px-6 py-6">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Optical Character Recognition
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Converting scanned documents into editable and searchable formats.
                                </p>
                            </div>
                            <div className="w-1/2 border-l border-red-400 
                                            px-6 py-6">
                                <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                    Document Shredding
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Providing secure disposal of physical copies post-digitization.
                                </p>
                            </div>
                        </div>
                    </section>

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
                                    High-Volume Expertise
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Proven capability in handling complex, large-scale scanning projects with precision and efficiency.
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
                                    Advanced Technology
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Rapid, high-quality output powered by industry-leading scanning equipment and software.
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
                                    Secure & Scalable Solutions
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Tailored solutions built around your needs — with robust data protection at every stage.
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
                                    Proven Track Record
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    A diverse clientele across multiple industries, backed by a commitment to innovation and excellence.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/*  RIGHT SIDE 0ooooo */}
                <div className="w-[32%] flex flex-col gap-6 pt-5">
                    <div className="bg-gray-50 rounded-sm p-6 mt-15">
                        <h4 className="text-red-500 font-bold text-xs uppercase mb-4">
                            DOCUMENT TYPES WE HANDLE
                        </h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Legal & court documents
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Historical archives & records
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Engineering blueprints (up to A0)
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Medical records & patient files
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Financial & accounting records
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                HR & personnel files
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                Government & public records
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-sm p-6">
                        <h4 className="text-red-500 font-bold text-xs uppercase mb-4">
                            Industries Served
                        </h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                Government & Public Sector
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                Banking & Finance
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                Healthcare
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                Legal & Judiciary
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                Education
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                Telecoms and Manufacturing
                            </li>
                            <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                Information & Technology
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className=" mb-5 ">
                <div className="w-[90%] mx-auto">
                    <h2 className="text-xl font-bold text-[#0D1B2A] mb-8">
                        Related Services
                    </h2>
                    <div className="flex gap-6">
                        <div className="flex-1 border border-gray-200 
                                        rounded-lg p-6">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                                <img src="/images/gis-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-[#0D1B2A] 
                                          text-sm mb-2">
                                GIS and Remote Sensing Consultancy
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed 
                                          mb-4">
                                Our team is highly skilled in GIS and remote sensing techniques with over twenty-five years of experience.
                            </p>
                            <Link
                                href="/services/gis-remote"
                                className="text-red-500 text-xs font-semibold 
                                           hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>

                        <div className="flex-1 border border-gray-200 rounded-lg p-6">
                            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-lg '>
                                <img src="/images/transformation-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-[#0D1B2A] 
                                          text-sm mb-2">
                                Digital Transformation
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed 
                                          mb-4">
                                We help organisations adopt modern systems and
                                technologies to improve efficiency and drive growth.
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
                                href="/services/scanning-services"
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

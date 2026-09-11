import React from 'react'

export default function About() {
    return (
        <section className='bg-white text-black'>
            <div className='flex border-red-500 border-2 h-min-[50%] mx-auto px-10 bg-white py-10 gap-10 text-black'>
                <div className='w-1/2 w-full lg:w-1/2 text-justify lg:text-justify sm:text-justify'>
                    <h2 className='text-3xl font-bold mb-5'>Our Story</h2>
                    <p className='text-gray-600 leading-relaxed mb-3 text-10xl'>
                        DataLord Technologies Ltd is a Lagos-based software development
                        company committed to helping businesses unlock greater
                        productivity through smart, scalable technology solutions. Founded
                        to bridge the gap between complex business challenges and
                        innovative digital systems, we have grown into a trusted partner
                        across multiple sectors. </p><br />

                    <p className="text-gray-600 leading-relaxed mb-3">
                        Datalord Technologies Ltd is a Lagos-based software development
                        company committed to helping businesses unlock greater
                        productivity through smart, scalable technology solutions. Founded
                        to bridge the gap between complex business challenges and
                        innovative digital systems, we have grown into a trusted partner
                        across multiple sectors.
                    </p><br />
                    <p className='text-gray-600 leading-relaxed mb-3'> We work closely with clients to understand their goals and
                        challenges, designing solutions that improve efficiency, enhance
                        decision-making, and deliver measurable impact.
                        Guided by our mission to create a better everyday life through
                        innovative solutions and our vision to build the best innovative
                        solutions for today and the future needs of our clients, we remain
                        committed to excellence and lasting value.
                    </p>
                </div>

                <div className='max-w-[660px] max-h-[618px] overflow-hidden rounded-xl shadow-lg'>
                    <img src="/images/Our story.jpg" alt="Logo" className='w-full h-full rounded-xl object-cover object-center shadow-lg' />
                </div>
            </div>


            {/* // Core Values Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 p-8 lg:p-10">
                <div className="h-full overflow-hidden">
                    <img
                        src="/images/core-values.png"
                        alt="Core values"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 p-8 lg:p-10">
                    <div>
                        <h2 className="mb-5 text-3xl font-bold">
                            Our Core Values
                        </h2>

                        <p className="max-w-xs text-gray-500 leading-relaxed">
                            These are the principles that guide our work ethic
                        </p>
                    </div>
                    <div>
                        <span className="mb-3 block text-xl font-medium text-red-500">
                            01
                        </span>
                        <h3 className="mb-4 text-xl font-semibold">
                            Innovation
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            We leverage modern technology and forward-thinking
                            approaches to build scalable solutions that solve real
                            business challenges.
                        </p>
                    </div>

                    <div>
                        <span className="mb-3 block text-xl font-medium text-red-500">
                            02
                        </span>
                        <h3 className="mb-4 text-xl font-semibold">
                            Integrity
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            We operate with transparency, accountability, and trust,
                            ensuring every solution and partnership is built on honesty
                            and reliability.
                        </p>
                    </div>

                    <div>
                        <span className="mb-3 block text-xl font-medium text-red-500">
                            03
                        </span>

                        <h3 className="mb-4 text-xl font-semibold">
                            Excellence
                        </h3>

                        <p className="text-gray-500 leading-relaxed">
                            We are committed to delivering high-quality software
                            systems that are robust, efficient, and aligned with
                            global standards.
                        </p>
                    </div>

                </div>
            </div>

            {/* // Industry Expertise Section */}
            <section className="bg-gray-100">
                <div className="flex flex-col items-center justify-center text-left py-10 px-4 sm:px-6 lg:px-8 ">
                    <h2 className="mb-5 text-3xl font-bold">
                        Our Industry Expertise
                    </h2>
                    <p className="max-w-1xl text-gray-500 leading-relaxed">
                        Our expertise spans across multiple sectors, allowing us to provide tailored
                        technology solutions that drive success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-3 lg:p-10">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Finance and Banking</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Secure, compliant solutions for financial institutions and banking operations.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Healthcare</h3>
                        <p className="text-gray-500 leading-relaxed">
                            HIPAA-compliant systems for hospitals,
                            clinics, and healthcare providers.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">E-commerce</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Scalable platforms for online stores and retail management.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-3 lg:p-10">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Logistics and Supply Chain</h3>
                        <p className="text-gray-500 leading-relaxed">
                            End-to-end tracking and management
                            solutions for supply chain optimization.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Government & Public Sector</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Robust enterprise solutions for government
                            agencies and public organizations.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Real Estate & Property Management</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Digital solutions for property management
                            and real estate operations.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-8 lg:p-10">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Manufacturing & Industrial Automation</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Smart automation systems for modern
                            manufacturing and production facilities
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Telecommunication</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Advanced infrastructure solutions for
                            telecom providers and networks.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="mb-4 text-xl font-semibold">Energy & Utilities</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Smart grid and utility management systems
                            for energy providers.
                        </p>
                    </div>
                </div>
            </section>

            {/* LAST SECTION */}
            <section>
                <div>
                    <div className="text-center py-10">
                        <h3 className="mb-5 text-3xl font-bold">
                            Meet the People Behind DataLord
                        </h3>
                    </div>

                    <div className='flex border-2 h-min-[50%] mx-auto px-10 bg-white py-10 gap-10 text-black'>
                        <div className='max-w-[660px] max-h-[618px] overflow-hidden rounded-xl shadow-lg'>
                            <img src="/images/Meet.jpg" alt="Logo" className='w-full h-full rounded-xl object-cover object-center shadow-lg' />

                        </div>


                        <div className='w-1/2 w-full lg:w-1/2 text-justify lg:text-justify sm:text-justify'>
                            <p className='text-gray-600 leading-relaxed mb-3 text-10xl'>
                                A diverse team of experts passionate about building intelligent
                                digital systems for modern businesses. <br /> <br />

                                We combine deep expertise in software engineering, enterprise
                                systems, and digital transformation to help organizations simplify
                                operations and improve efficiency through technology. <br /><br />

                                From engineering to support, everyone at DataLord Technologies is
                                committed to delivering reliable, scalable, and high-performing
                                solutions.
                            </p>  

                            <div className='bg-red-100 rounded-lg shadow-md p-6'>
                            <h3 className='mb-3 text-xl font-semibold'>Expert Leadership</h3>
                            <p className='text-gray-600 leading-relaxed mb-3 text-10xl'>
                                Ledlby industry vertenins with proven trackrecords.
                            </p>
                            </div><br />

                            <div className='bg-red-100 rounded-lg shadow-md p-6 pt-3'>
                            <h3 className='mb-3 text-xl font-semibold'>Global perspective</h3>
                            <p className='text-gray-600 leading-relaxed mb-3 text-10xl'>
                                Team members from across Nigeria and beyond
                            </p>
                            </div><br />
        
                            <div className='bg-red-100 rounded-lg shadow-md p-6 pt-3'>
                            <h3 className='mb-3 text-xl font-semibold'>Continous Growth</h3>
                            <p className='text-gray-600 leading-relaxed mb-3 text-10xl'>
                                Always learning and evolving with technology
                            </p>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
            </section>

        </section>
    )
}

import React from 'react'
import Link from "next/link";
import Banner from '../components/Banner'

export default function Services() {
  return (
    <>
      <Banner bannerTitle="Services" bannerDescription="From software development and digital transformation to document 
management and GIS, we bring the right technology to every challenge." />
      <section className="py-10 px-30 justify-center">
        {/* SOFTWARE DEVELOPMENT  */}
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                <img src="images/dev-icon.jpg" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Software Development
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg mb-6">
                Custom software solutions built with cutting-edge
                technologies to meet your unique business requirements.
              </p>
              <h3 className="font-semibold text-gray-800 mb-4">
                Key Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-7">
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Custom application development</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Enterprise software solutions</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Mobile app development</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>API development & integration</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Legacy system modernization</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Agile development methodology</h3>
                </div>
              </div>
              <Link href="/services/software-development" className="bg-red-500 hover:bg-red-600 text-white
               text-sm font-medium px-5 py-2.5 rounded-md transition">
                Learn More
              </Link >
            </div>
            <div>
              <img
                src="/images/laptop.jpg"
                alt="Software Development"
                className="w-[602px] h-[454px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT MANAGEMENT SYSTEM */}
      <section className="py-16 px-30 ">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div>
              <img
                src="/images/dms.jpg"
                alt="Software Development"
                className="w-[602px] h-[454px] object-cover rounded-xl shadow-md"
              />
            </div>
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                <img src="images/document-icon.jpg" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Document Management System
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg mb-6">
                Comprehensive document management systems to organize, secure, and streamline your document workflows.
              </p>
              <h3 className="font-semibold text-gray-800 mb-4">
                Key Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-7">
                <div className='flex space-x-2'>
                  <img src="/images/check-icon.jpg" alt='' />
                  <h3 className='text-sm text-gray-500'>EDMS</h3>
                </div>
                <div className='flex space-x-2'>
                  <img src="/images/check-icon.jpg" alt='' />
                  <h3 className='text-sm text-gray-500'>Version control & tracking</h3>
                </div>
                <div className='flex space-x-2'>
                  <img src="/images/check-icon.jpg" alt='' />
                  <h3 className='text-sm text-gray-500'>Advanced search capabilities</h3>
                </div>
                <div className='flex space-x-2'>
                  <img src="/images/check-icon.jpg" alt='' />
                  <h3 className='text-sm text-gray-500'>Workflow automation</h3>
                </div>
                <div className='flex space-x-2'>
                  <img src="/images/check-icon.jpg" alt='' />
                  <h3 className='text-sm text-gray-500'>Secure document storage</h3>
                </div>
                <div className='flex space-x-2'>
                  <img src="/images/check-icon.jpg" alt='' />
                  <h3 className='text-sm text-gray-500'>Compliance & audit trails</h3>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GIS & REMOTE CONSULTING */}
      <section className="py-16 px-30 justify-center">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                <img src="images/gis-icon.jpg" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                GIS & Remote Sensing Consultancy
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg mb-6">
                Our team is highly skilled in GIS and remote sensing techniques with over twenty-five years of experience.
              </p>
              <h3 className="font-semibold text-gray-800 mb-4">
                Key Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-7">
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm px-2 text-gray-500'>Geospatial data analysis</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm px-2 text-gray-500'>Location intelligence solutions</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm px-2 text-gray-500'>Environmental & land-use analysis</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm px-2 text-gray-500'>Mapping & visualization</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm px-2 text-gray-500'>Expert consulting & support</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm px-2 text-gray-500'>Geospatial data analysis</h3>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition">
                Learn More
              </button>
            </div>
            <div>
              <img
                src="/images/gis-image.jpg"
                alt="Software Development"
                className="w-[602px] h-[454px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL MANAGEMENT SYSTEM  */}
      <section className="py-16 px-30 justify-center">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div>
              <img
                src="/images/portal-image.jpg"
                alt="Software Development"
                className="w-[602px] h-[454px] object-cover rounded-xl shadow-md"
              />
            </div>
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                <img src="images/portal-icon.jpg" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Portal Management System
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg mb-6">
                Scalable cloud infrastructure and enterprise portals designed for performance, security, and user experience.
              </p>
              <h3 className="font-semibold text-gray-800 mb-4">
                Key Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-7">
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Cloud migration services</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Scalable infrastructure design</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>DevOps & automation</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Enterprise portal development</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Multi-cloud strategies</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Performance optimization</h3>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SCANNING BEAUREAU SERVICES */}
      <section className="py-16 px-30 justify-center">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                <img src="images/scanning-icon.jpg" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Scanning Beaureau Services
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg mb-6">
                Custom software solutions built with cutting-edge
                technologies to meet your unique business requirements.
              </p>
              <h3 className="font-semibold text-gray-800 mb-4">
                Key Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-7">
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>High-volume document scanning</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Metadata extraction & indexing</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Secure handling & disposal</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Data capture & indexing</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>Multiple format support</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-sm text-gray-500 px-2'>High-volume document scanning</h3>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition">
                Learn More
              </button>
            </div>
            <div>
              <img
                src="/images/scanning-image.jpg"
                alt="Software Development"
                className="w-[602px] h-[454px] object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}
      <section className="py-16 px-30 justify-center">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div>
              <img
                src="/images/digital-image.jpg"
                alt="Software Development"
                className="w-[602px] h-[454px] object-cover rounded-xl shadow-md"
              />
            </div>
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg ">
                {/* <span className="text-xl text-red-400">
                  &lt;/&gt;
                </span> */}
                <img src="images/scanning-icon.jpg" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Digital Transformation
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-lg mb-6">
                We help organizations adopt modern technologies to improve efficiency and drive growth.
              </p>
              <h3 className="font-semibold text-gray-800 mb-4">
                Key Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-7">
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Process automation & optimization</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Business workflow digitization</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>System integration & modernization</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Data-driven decision makin</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Cloud adoption strategies</h3>
                </div>
                <div className='flex'>
                  <img src="/images/check-icon.jpg" alt="" />
                  <h3 className='text-gray-500 text-sm px-2'>Scalable technology solutions</h3>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-md transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

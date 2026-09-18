import React from 'react'
import Link from 'next/link'
import Banner2 from '../../components/Banner2'

export default function portalManagement() {
  return (
    <>
          <Banner2
              bannerDescription=" Services/Portal Management Systems "
              bannerTitle="Portal Management Systems"
          />
          <section>
              <div className='w-[85%] mx-auto my-10'>
                  <h2 className='text-xl font-bold text-[#0D1B2A] mb-4'>
                      DataLord Technologies: Building Scalable Enterprise Portals for Organisations 
                  </h2>
                  <p className='text-gray-500 text-sm leading-relaxed mb-4'>
                      At DataLord Technologies, we take pride in delivering solutions and applications designed to address the unique challenges of our clients. We focus on understanding client-specific needs, identifying key challenges, and deploying the most suitable technologies and software to enhance business operations and streamline management processes.
                  </p>
              </div>
          </section>

          <section className='border-y border-gray-200 py-6 mb-8'>
              <div className='w-[90%] mx-auto flex items-center 
                                justify-between flex-wrap gap-6'>
                  <div>
                      <p className='text-red-500 text-2xl font-bold pl-20'>
                        Scalable
                      </p>
                      <p className='text-gray-500 text-sm mt-1'>
                          Built to grow with your organisation
                      </p>
                  </div>

                  <div>
                      <p className='text-red-500 text-2xl font-bold pl-10'>
                          Secure
                      </p>
                      <p className='text-gray-500 text-sm mt-1'>
                          Data protection at every layer
                      </p>
                  </div>

                  <div>
                      <p className='text-red-500 text-2xl font-bold pl-10'>
                          End-to-End
                      </p>
                      <p className='text-gray-500 text-sm mt-1'>
                          Build, design, host, maintain, train
                      </p>
                  </div>

                  <div>
                      <p className='text-red-500 text-2xl font-bold pl-20'>Custom</p>
                      <p className='text-gray-500 text-sm mt-1'>
                          Built to your specific requirements
                      </p>
                  </div>
              </div>
          </section>

          <div className="flex gap-10 w-[90%] mx-auto mb-16">
              <div className="flex flex-col w-[68%]">
                  <section className=" mb-10 ">
                      <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
                          Services
                      </h2>
                      <div className="flex mb-5">

                          <div className="w-1/2 px-6 py-6 border-l border-red-400">
                              <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                  Needs Analysis
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Detailed assessments to ensure solutions are purpose-built to your requirements.
                              </p>
                          </div>

                          <div className="w-1/2 px-6 py-6 border-l border-red-400">
                              <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                  Design
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Our experts craft innovative, user-centric designs tailored to enhance functionality and usability.
                              </p>
                          </div>
                      </div>

                      <div className="flex mb-5">
                          <div className="w-1/2 px-6 py-6 border-l border-red-400">
                              <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                  Development
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Scalable, reliable applications built with cutting-edge technologies.
                              </p>
                          </div>
                          <div className="w-1/2 px-6 py-6 border-l border-red-500 ">
                              <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                  Deployment
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Seamless implementation with minimal disruption to existing systems.
                              </p>
                          </div>
                      </div>

                      <div className="flex mb-5">
                          <div className="w-1/2 border-l border-red-400 
                                            px-6 py-6">
                              <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                  Hosting
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Secure, reliable hosting ensuring your solution stays accessible at all times.
                              </p>
                          </div>
                          <div className="w-1/2 px-6 py-6 border-l border-red-400">
                              <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2 ">
                                  Maintenance
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  We provides ongoing support, ensuring consistent performance, updates, & system optimization.
                              </p>
                          </div>
                      </div>

                      <div className="flex mb-5">
                          <div className="w-1/2 border-l border-red-400 
                                            px-6 py-6">
                              <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                  Training
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Comprehensive sessions to help clients maximise the value of their solution.
                              </p>
                          </div>
                      </div>
                  </section>

                  {/*  Our Process 0ooooo */}
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
                                  Custom Solutions
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Every application is designed to address specific business needs, ensuring maximum relevance and impact.
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
                                  Scalable Technologies
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  Our solutions grow with your business, providing flexibility and adaptability for future needs.
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
                                  Security Focus
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  We prioritize robust data protection measures, ensuring client information is secure at all stages.
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
                                  Client Collaboration
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed">
                                  By actively involving clients in the development process, we create solutions that truly reflect their vision and requirements.
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
                          Key Features
                      </h4>
                      <ul className="space-y-2.5">

                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                              Role based access control
                          </li>

                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                              Single Sign-On (SSO)
                          </li>

                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                              Real time notification
                          </li>

                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                              Document & file management
                          </li>

                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                              Analytics and reporting dashboards
                          </li>

                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                              Third party integration
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
                                                 bg-red-400 flex-shrink-0" />
                              Government & Public Sector
                          </li>
                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 flex-shrink-0" />
                              Banking & Finance
                          </li>
                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 flex-shrink-0" />
                              Healthcare
                          </li>
                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 flex-shrink-0" />
                              Legal & Judiciary
                          </li>
                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 flex-shrink-0" />
                              Education
                          </li>
                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 flex-shrink-0" />
                              Telecoms and Manufacturing
                          </li>
                          <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 flex-shrink-0" />
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
                              href="/services/software-development"
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
                              href="/services/document-management"
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

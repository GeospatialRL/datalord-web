import React from 'react'
import Link from "next/link";
import Banner2 from '../../components/Banner2'

export default function docManagement ()  {
  return (
    <>
        <Banner2
              bannerDescription="Services/Document Management System"
              bannerTitle="Document Management System"
        />

        <section>
              <section>
                  <div className='w-[90%] mx-auto my-10'>
                      <h2 className='text-xl font-bold text-[#0D1B2A] mb-4'>
                          DataLord Technologies: Secure Your Documents, Streamline Your Business
                      </h2>
                      <p className='text-gray-500 text-sm leading-relaxed mb-4'>
                          DataLord Technologies is a trusted provider of Document Management Systems in Nigeria, known for delivering secure and reliable solutions to both public and private organisations. We specialise in helping businesses organise, store, and retrieve critical documents with ease, ensuring efficiency, compliance, and data security at every level. Our multi-user DMS solutions and deep industry expertise set us apart as a leading document management partner across Nigeria.
                      </p>
                      </div>
              </section>

              {/*  Middle */}
              <section className='border-y border-gray-200 py-6 mb-8'>
                  <div className='w-[90%] mx-auto flex items-center 
                                justify-between flex-wrap gap-6'>

                      <div>
                          <p className='text-red-500 text-2xl font-bold'>Multi-User</p>
                          <p className='text-gray-500 text-sm mt-1'>
                              Client satisfaction rate
                          </p>
                      </div>

                      <div>
                          <p className='text-red-500 text-2xl font-bold'>
                              99.9%
                          </p>
                          <p className='text-gray-500 text-sm mt-1'>
                              System uptime guaranteed
                          </p>
                      </div>

                      <div>
                          <p className='text-red-500 text-2xl font-bold'>
                              100%
                          </p>
                          <p className='text-gray-500 text-sm mt-1'>
                              Full audit trail
                          </p>
                      </div>

                      <div>
                          <p className='text-red-500 text-2xl font-bold'>60%</p>
                          <p className='text-gray-500 text-sm mt-1'>
                              Reduction in document retrieval time
                          </p>
                      </div>
                  </div>
              </section>

              {/* ── Main Content + Sidebar ──────────────────────── */}
              <div className="flex gap-10 w-[90%] mx-auto mb-16">
                  <div className="flex flex-col w-[68%]">
                      <section className=" mb-10 ">
                          <div className="flex mb-5">
                              <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                      Electronic Document Management
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      Fully electronic document lifecycle management from creation to archival or disposal.
                                  </p>
                              </div>
                              <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                      Version Control & Tracking
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      Track every change, revert to previous versions, and maintain a clear document history.
                                  </p>
                              </div>
                          </div>

                          <div className="flex mb-5">

                              <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                      Advanced Search Capabilities
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      Full-text search, metadata filters, & category-based retrieval for instant document access.
                                  </p>
                              </div>

                              <div className="w-1/2 px-6 py-6 border-l border-red-500 ">
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                      Workflow Automation
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      Automate approvals, reviews, and document routing, eliminating manual handoffs.
                                  </p>
                              </div>

                          </div>

                          <div className="flex">
                              <div className="w-1/2 border-l border-red-400 
                                            px-6 py-6">
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2">
                                      Secure Document Storage
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      Encrypted, role-based storage ensuring only authorised users can access sensitive files.
                                  </p>
                              </div>
                              <div className="w-1/2 px-6 py-6 border-l border-red-400">
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-2 ">
                                      Compliance & Audit Trails
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      Full activity logs and compliance-ready reporting for regulatory and governance requirements.
                                  </p>
                              </div>
                          </div>
                      </section>

                      <section>
                          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">
                              Our Process
                          </h2>
                          <div className="flex items-start gap-5 py-5 
                                        border-b border-gray-100">
                              <span className="text-red-500 font-bold text-sm 
                                             w-8 flex-shrink-0 mt-0.5">
                                  01
                              </span>
                              <div>
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                      Needs Analysis
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      We assess your current document workflows, identify bottlenecks, and define system requirements.
                                  </p>
                              </div>
                          </div>

                          <div className="flex items-start gap-5 py-5 
                                        border-b border-gray-100">
                              <span className="text-red-500 font-bold text-sm 
                                             w-8 flex-shrink-0 mt-0.5">
                                  02
                              </span>
                              <div>
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                      System Design & Configuration
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      We design the DMS architecture — folder structures, metadata schemas, access levels, and workflows.
                                  </p>
                              </div>
                          </div>

                          <div className="flex items-start gap-5 py-5 
                                        border-b border-gray-100">
                              <span className="text-red-500 font-bold text-sm 
                                             w-8 flex-shrink-0 mt-0.5">
                                  03
                              </span>
                              <div>
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                      Migration & Digitisation
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      Existing documents are migrated, indexed, and categorised — with scanning support if needed.
                                  </p>
                              </div>
                          </div>

                          <div className="flex items-start gap-5 py-5">
                              <span className="text-red-500 font-bold text-sm 
                                             w-8 flex-shrink-0 mt-0.5">
                                  04
                              </span>
                              <div>
                                  <p className="font-semibold text-[#0D1B2A] 
                                              text-sm mb-1">
                                      Training & Ongoing Support
                                  </p>
                                  <p className="text-gray-500 text-xs leading-relaxed">
                                      We train your team and provide continuous maintenance, updates, and system optimisation.
                                  </p>
                              </div>
                          </div>
                      </section>
                  </div>

                  {/* RIGHT SIDEBAR 0oooooo*/}
                  <div className="w-[32%] flex flex-col gap-6 pt-1">

                      {/* Technologies */}
                      <div className="bg-gray-50 rounded-sm p-6">
                          <h4 className="text-red-500 font-bold text-xs 
                                       tracking-widest uppercase mb-4">
                              Technologies
                          </h4>
                          <ul className="space-y-2.5">

                              <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                  Centralised document repository
                              </li>

                              <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                  Role-based access control
                              </li>

                              <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                  Automated approval workflows
                              </li>

                              <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                  Full-text & metadata search
                              </li>

                              <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                  Audit trails & activity logs
                              </li>

                              <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400" />
                                  Multi-format file support
                              </li>

                              <li className="flex items-center gap-2 
                                           text-xs text-gray-600">
                                  <span className="w-1.5 h-1.5 rounded-full 
                                                 bg-red-400 " />
                                  Cloud & on-premise options
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

              <section className=" py-5 ">
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
                                  href="/services/document-management"
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
                                  <img src="/images/portal-icon.jpg" alt="" />
                              </div>
                              <p className="font-semibold text-[#0D1B2A] 
                                          text-sm mb-2">
                                  Portal Management Systems
                              </p>
                              <p className="text-gray-500 text-xs leading-relaxed 
                                          mb-4">
                                  Scalable cloud infrastructure and enterprise portals
                                  designed for performance, security, and user
                                  experience.
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
        </section>


    </>
  )
}

import React from 'react'
import Link from "next/link";
import Banner2 from '../../components/Banner2'

export default function SoftwareDev() {
    return (
        <>
            <Banner2
                bannerDescription="Services/Software-development"
                bannerTitle="Software Development"
            />

            <section>
                <div className="w-[85%] mx-auto my-10">
                    <h2 className="text-lg md:text-xl font-bold mb-4">
                        DataLord Technologies: Leading Software Development
                        Company in Lagos, Nigeria
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        At DataLord Technologies, we specialize in designing and
                        developing customized software solutions to meet the unique
                        needs of businesses across various industries. Whether
                        you're a startup looking for a scalable solution or an
                        enterprise in need of complex system integrations, we ensure
                        that our projects align with your budget and
                        timeline—without ever compromising on quality.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Moreover, our team of highly skilled developers is proficient
                        in the latest programming languages, frameworks, and
                        cutting-edge technologies. As a result, we consistently
                        deliver top-tier software solutions tailored to businesses of
                        all sizes. From desktop and mobile applications to
                        cloud-based systems and AI-powered innovations, we help
                        businesses stay ahead in today's fast-paced digital
                        landscape.
                    </p>
                </div>
            </section>

            {/* STATS STRIP: 2x2 grid on mobile, single row on desktop */}
            <section className="border-y border-gray-200 py-6 mb-8">
                <div className="w-[85%] mx-auto grid grid-cols-2 gap-6 md:flex md:items-center md:justify-between">
                    <div>
                        <p className="text-red-500 text-2xl font-bold md:pl-10">100%</p>
                        <p className="text-gray-500 text-sm mt-1">
                            Client satisfaction rate
                        </p>
                    </div>

                    <div>
                        <p className="text-red-500 text-2xl font-bold md:pl-5">
                            End-to-End
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            Complete solution delivery
                        </p>
                    </div>

                    <div>
                        <p className="text-red-500 text-2xl font-bold md:pl-5">
                            All Platforms
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            Web, mobile, cloud, desktop
                        </p>
                    </div>

                    <div>
                        <p className="text-red-500 text-2xl font-bold md:pl-15">Agile</p>
                        <p className="text-gray-500 text-sm mt-1">
                            Iterative development approach
                        </p>
                    </div>
                </div>
            </section>

            {/* Wrapping div: stacked on mobile, side by side on desktop */}
            <div className="flex flex-col md:flex-row gap-10 w-[85%] mx-auto mb-16">
                {/* LEFT side */}
                <div className="flex flex-col w-full md:w-[68%]">
                    {/* Services section */}
                    <section className="mb-10">
                        <div className="flex flex-col md:flex-row mb-5">
                            <div className="w-full md:w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-sm mb-2">
                                    Custom Application Development
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Fully tailored software built from the ground up
                                    to address specific business challenges.
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-sm mb-2">
                                    Mobile App Development
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Cross-platform and native applications for iOS
                                    and Android with intuitive UX.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row mb-5">
                            <div className="w-full md:w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-sm mb-2">
                                    Enterprise Software Solutions
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Scalable, secure enterprise-grade systems
                                    designed to grow alongside your organisation.
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-sm mb-2">
                                    API Development and Integration
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Seamless integration between your existing tools,
                                    third-party platforms and new systems.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-sm mb-2">
                                    Legacy System Modernisation
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    We evaluate and upgrade outdated systems,
                                    restructuring and migrating to modern stacks.
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 px-6 py-6 border-l border-red-400">
                                <p className="font-semibold text-sm mb-2">
                                    Agile Methodology
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Iterative sprints with continuous client
                                    involvement, ensuring proper delivery.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold mb-6">
                            Our Process
                        </h2>

                        <div className="flex items-start gap-5 py-5 border-b border-gray-100">
                            <span className="text-red-500 font-bold text-sm w-8 shrink-0 mt-0.5">
                                01
                            </span>
                            <div>
                                <p className="font-semibold text-sm mb-1">
                                    Discovery and Requirements
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    We conduct detailed assessments to understand
                                    your needs, goals and constraints.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 py-5 border-b border-gray-100">
                            <span className="text-red-500 font-bold text-sm w-8 shrink-0 mt-0.5">
                                02
                            </span>
                            <div>
                                <p className="font-semibold text-sm mb-1">
                                    Design and Architecture
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Our experts craft user-centric designs and robust
                                    system architecture tailored to your use case.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 py-5 border-b border-gray-100">
                            <span className="text-red-500 font-bold text-sm w-8 shrink-0 mt-0.5">
                                03
                            </span>
                            <div>
                                <p className="font-semibold text-sm mb-1">
                                    Development and Testing
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Leveraging cutting-edge tools, we build and
                                    rigorously test your application at every stage.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 py-5">
                            <span className="text-red-500 font-bold text-sm w-8 shrink-0 mt-0.5">
                                04
                            </span>
                            <div>
                                <p className="font-semibold text-sm mb-1">
                                    Deployment and Support
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    We handle hosting and provide ongoing maintenance,
                                    updates and training post-launch.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* RIGHT side (sidebar): below the main content on mobile */}
                <div className="w-full md:w-[32%] flex flex-col gap-6 pt-1">
                    <div className="bg-gray-50 rounded-sm p-5">
                        <h4 className="text-red-500 font-bold text-xs mb-4">
                            TECHNOLOGIES
                        </h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Frontend: React, Vue
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Backend: .NET, Node.js
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Mobile: React Native, Flutter
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Database: SQL Server, MongoDB
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Cloud: Azure, AWS
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                DevOps: CI/CD, Docker
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                AI/ML: TensorFlow, OpenAI
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Architecture: Microservices
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-sm p-5 md:p-6">
                        <h4 className="text-red-500 font-bold text-xs mb-4">
                            INDUSTRIES SERVED
                        </h4>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Government and Public Sector
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Banking and Finance
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Healthcare
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Legal and Judiciary
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Education
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Telecoms and Manufacturing
                            </li>
                            <li className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                                Information and Technology
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-[85%] mx-auto mb-5">
                    <h2 className="text-lg md:text-xl font-bold mb-8">
                        Related Services
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 border border-gray-200 rounded-lg p-6">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                                <img src="/images/dms-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-sm mb-2">
                                Document Management System
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed mb-4">
                                Comprehensive document management systems to
                                organise, secure, and streamline your document
                                workflows.
                            </p>
                            <Link
                                href="/services/document-management"
                                className="text-red-500 text-xs font-semibold hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>

                        <div className="flex-1 border border-gray-200 rounded-lg p-6">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                                <img src="/images/transformation-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-sm mb-2">
                                Digital Transformation
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed mb-4">
                                We help organisations adopt modern systems and
                                technologies to improve efficiency and drive growth.
                            </p>
                            <Link
                                href="/services/digital-transformation"
                                className="text-red-500 text-xs font-semibold hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>

                        <div className="flex-1 border border-gray-200 rounded-lg p-6">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                                <img src="/images/portal-icon.jpg" alt="" />
                            </div>
                            <p className="font-semibold text-sm mb-2">
                                Portal Management Systems
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed mb-4">
                                Scalable cloud infrastructure and enterprise portals
                                designed for performance, security, and user
                                experience.
                            </p>
                            <Link
                                href="/services/portal-management"
                                className="text-red-500 text-xs font-semibold hover:underline"
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
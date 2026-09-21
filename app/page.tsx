"use client";

import { title } from "process";
import Btn from "./components/Btn";
import Hero from "./components/Hero";

export default function Home() {

  const serviceCard = [
    {
    number: "01",
    title: "Software Development",
    details: "Custom destop, mobile and web solutions built to spec - with experienced developers who don't stop until you're satisfied."
  },
  {
    number: "02",
    title: "Document Management System",
    details: "Multi-user DMS solutions that help businesses securely organise, store, and retrieve critical content at scale."
  },
   {
    number: "03",
    title: "GIS & Remote Sensing",
    details: "Spatial data capture, analysis and visualisation — transforming geographic intelligence into real decisions."
  },
   {
    number: "04",
    title: "Portal Management",
    details: "Integrated enterprise portals and court case management systems built on global best practices."
  },
   {
    number: "05",
    title: "Scanning Bureau",
    details: "Nigeria's premier document digitisation partner — over 3 million images scanned monthly with full quality assurance."
  },
   {
    number: "06",
    title: "Scanning Bureau",
    details: "Nigeria's premier document digitisation partner — over 3 million images scanned monthly with full quality assurance."
  },


]
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background font-body">
   <Hero />

    {/* what to do section */}
   <section className="py-[92px] px-[63px] border w-full">
    <div className="w-[770px] mb-[82px]">
      <h1 className="text-primary font-semibold">WHAT DO WE DO</h1>
      <h1 className="text-secondary font-semibold text-[42px] my-[22px]"> Services</h1>
      <p className="text-[#4A5565] text-[18px]" >From ideation and prototyping to digital transformation and enterprise 
management, we provide end-to-end IT solutions tailored to your business needs.</p>
    </div>
    {/* cards div */}
    <div className="grid grid-rows-2 grid-cols-3">
    {/* Services cards */}
    {serviceCard && serviceCard.map((card) => (
      <div className="py-[16px] px-[20px] max-w-[438px] max-h-[195px] border">
      <h2 className="text-primary font-semibold">{card.number}</h2>
      <h2 className="py-[12px] text-secondary text-[18px]">{card.title}</h2>
      <p className="text-[#4A5565]">{card.details}</p>
    </div>
    ))}
    </div>
   </section>
    </div>
  );
}

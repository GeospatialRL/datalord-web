import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
      <div className="relative overflow-hidden bg-[#F5F6F8] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-360 px-6 pt-20 pb-24 sm:px-12 lg:px-15.75 lg:pt-32 lg:pb-20">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-[40px]">
            Technology Built for Business.
            <br />
            Delivered for Results.
          </h1>
          <p className="mt-6 max-w-165 text-lg leading-relaxed text-white/90">
            We build enterprise-grade IT solutions that transform organisations
            and drive measurable business outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-lg bg-[#F43838] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#dc2626]"
            >
              Learn More
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center rounded-lg border border-white px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              View our work
            </Link>
          </div>
        </div>
      </div>
  )
}

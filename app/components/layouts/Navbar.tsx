import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function () {
    return (
        <div className="flex items-center justify-between p-4 bg-white text-black  ">
            <div className="">
                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </div>

            <div className="flex gap-5">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/services">Services</Link>
            </div>
        </div>
    )
}

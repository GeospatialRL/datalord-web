import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-background p-4 text-secondary">
            <div className="max-w-56 max-h-20.75">
                <Image src="images/logo.svg" alt="Logo" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} />
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

export default Navbar;
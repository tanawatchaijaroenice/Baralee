import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 p-4 backdrop-blur-sm w-full">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src='/images/Baralee_logo_White2.svg' alt="Logo" width={150} height={150} className="cursor-pointer" />
                </Link>

                <span className="text-lg text-white">tel: 000000</span>
            </nav>
        </header>
    )
}

export default Navbar
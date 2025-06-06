import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 z-50 p-4 w-full transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/20' : ''
            }`}>
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src='/images/Baralee_logo_White2.svg' alt="Logo" width={3000} height={3000} className="cursor-pointer w-[150px]" />
                </Link>

                <span className="text-lg text-white">tel: (+66) 97 564 2435</span>
            </nav>
        </header>
    )
}

export default Navbar
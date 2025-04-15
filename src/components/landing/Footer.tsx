import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white py-8 border-t">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="mb-4">
                            {/* <Logo /> */}
                            <Image src='/images/Baralee_logo-3.png' alt="Logo" width={150} height={150} className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Address & Contact Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-medium text-orange-500 mb-4">Address</h3>
                        <Link href={'https://maps.app.goo.gl/2xKaDNKMgWJwEU9XA'} target='_blank' className="text-gray-700 mb-2">
                            Baralee Cafe & Camping Chiang Mai,<br />
                            Thailand, Chiang Mai 50300
                        </Link>

                        <h3 className="text-xl font-medium text-orange-500 mt-6 mb-4">Contact</h3>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:jpindianboy@gmail.com" className="text-gray-700 hover:text-green-700">
                                    jpindianboy@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a href="tel:+66975642435" className="text-gray-700 hover:text-green-700">
                                    (+66) 97 564 2435
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-medium text-orange-500 mb-4">Follow Us</h3>
                        <div className="flex flex-col space-y-2">
                            <Link href="https://www.facebook.com/baraleecafecamping" target='_blank' className="flex items-center text-gray-700 hover:text-green-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                                Facebook
                            </Link>
                            <Link href="https://www.instagram.com/baraleecafe_camping?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="flex items-center text-gray-700 hover:text-green-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Instagram
                            </Link>
                        </div>


                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <div className="mt-8 flex space-x-6">
                            <p className="text-center md:text-left text-gray-600">
                                Copyright © {new Date().getFullYear()} {new Date().getMinutes()}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        {/* Terms and Privacy */}
                        <div className="mt-8 flex space-x-6">
                            <Link href="/terms" className="text-gray-700 hover:text-green-700">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy" className="text-gray-700 hover:text-green-700">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
import Image from 'next/image'
import React from 'react'

const JourneySection = () => {
    return (
        <section className='relative h-[75vh]'>
            <div className="container mx-auto px-4 pl-12 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 max-w-lg">
                        <h5 className="text-[#e08c1f] font-medium uppercase tracking-wider text-xl">BARALEE GALLERY</h5>

                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800">
                            We Provide You The Best Experience
                        </h1>

                        <p className="text-zinc-700 text-xl leading-relaxed">
                            You don't have to worry about the result because all of these interiors are
                            made by people who are professionals in their fields with an elegant and
                            luxurious style and with premium quality materials
                        </p>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-[360px] h-[690px] rounded-3xl bg-zinc-800 p-3 shadow-xl border-8 border-zinc-700">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
                                {/* Phone Screen Content */}
                                <video className='h-full' width="320" height="240" autoPlay controls preload="none">
                                    <source src="/video/baralee-video-01.mp4" type="video/mp4" />
                                    <track
                                        src="/video/baralee-video-01.mp4"
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Illustration */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] z-0">
                <Image src="/images/journey-bg.png" height={1200} width={1200} className="w-full" alt="capming01" />
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-[300px] z-0">
                <svg
                    viewBox="0 0 1200 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <g stroke="#4a4a3c" strokeWidth="1.5">
                        <path d="M300 80 Q380 40, 460 70" fill="none" />
                        <path d="M650 90 Q710 70, 750 100" fill="none" />
                        <circle cx="550" cy="120" r="30" fill="none" />

                        {[100, 170, 240, 300, 370, 450, 520, 580, 650, 730, 820, 900, 980, 1050, 1120].map((x, i) => (
                            <g key={i} transform={`translate(${x}, ${200 - Math.random() * 40})`}>
                                <path
                                    d={`M0 0 L-20 50 L20 50 Z`}
                                    fill="#e9e2c7"
                                    stroke="#4a4a3c"
                                    transform={`scale(${0.8 + Math.random() * 0.5})`}
                                />
                                <path
                                    d={`M0 -30 L-15 10 L15 10 Z`}
                                    fill="#e9e2c7"
                                    stroke="#4a4a3c"
                                    transform={`translate(0, ${Math.random() * 10}) scale(${0.7 + Math.random() * 0.5})`}
                                />
                            </g>
                        ))}

                        <g transform="translate(850, 240)">
                            <circle cx="0" cy="0" r="15" fill="#e9e2c7" />
                            <path d="M-15 0 Q-5 -10, 0 -5 Q5 -15, 10 -5 Q15 -10, 20 0" fill="none" />
                        </g>

                        <g transform="translate(750, 230)">
                            <path d="M0 0 L30 0 L15 -30 Z" fill="#e9e2c7" />
                        </g>
                        <g transform="translate(790, 230)">
                            <path d="M0 0 L25 0 L12.5 -25 Z" fill="#e9e2c7" />
                        </g>

                        <g transform="translate(300, 230)">
                            <rect x="0" y="-30" width="100" height="40" rx="5" fill="#e9e2c7" />
                            <rect x="0" y="-20" width="20" height="15" fill="#e9e2c7" />
                            <rect x="30" y="-20" width="20" height="15" fill="#e9e2c7" />
                            <rect x="60" y="-20" width="20" height="15" fill="#e9e2c7" />
                            <circle cx="15" cy="10" r="10" fill="#e9e2c7" />
                            <circle cx="85" cy="10" r="10" fill="#e9e2c7" />
                        </g>

                        <path d="M0 270 Q300 250, 600 260 Q900 270, 1200 260" fill="none" />
                        <path d="M0 280 Q400 290, 800 275 Q1000 270, 1200 280" fill="none" />
                    </g>
                </svg>
            </div> */}
        </section>
    )
}

export default JourneySection
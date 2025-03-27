import React from 'react'

const JourneySection = () => {
    return (
        <section className='relative md:h-[130lvh] bg-[url(/images/journey-bg.png)] bg-no-repeat bg-contain bg-bottom'>
            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 max-w-lg">
                        <h5 className="text-[#e08c1f] font-medium uppercase tracking-wider text-xl">BARALEE GALLERY</h5>

                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800">
                            We Provide You The Best Experience
                        </h1>

                        <p className="text-zinc-700 text-xl leading-relaxed">
                            You don&apos;t have to worry about the result because all of these interiors are
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
 
        </section>
    )
}

export default JourneySection
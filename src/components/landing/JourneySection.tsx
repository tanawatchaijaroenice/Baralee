import React, { useRef } from 'react'
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import useStore from '@/lib/store';

const JourneySection = () => {
    const desktopSize = useStore((state) => state.IsDesktop)
    const elements = useRef<HTMLDivElement[]>([]);


    useGSAP(() => {
        elements.current.forEach((element) => {
            gsap.set(element, {
                y: desktopSize ? 200 : 50
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: desktopSize ? '-10% 100%' : '-100% 100%',
                    scrub: true,
                    markers: true,
                }
            })

            tl.to(element, { y: desktopSize ? 50 : -50 }, 'start')
        });

    }, { dependencies: [desktopSize] })

    return (
        <section className='relative xl:h-[130lvh] bg-[url(/images/journey-bg.png)] bg-repeat-x bg-auto bg-bottom z-40'>
            <div className="container lg:mt-6 mx-auto px-4 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">

                    {/* Left Content */}
                    <div ref={(el: HTMLDivElement) => { elements.current[0] = el }} className="flex flex-col space-y-3 lg:space-y-6 xl:max-w-lg">
                        <h5 className="text-[#e08c1f] font-medium uppercase tracking-wider text-2xl lg:text-3xl">BARALEE GALLERY</h5>

                        <h1 className="text-4xl lg:text-5xl font-bold text-zinc-800">
                            We Provide You The Best Experience
                        </h1>

                        <p className="text-zinc-700 text-2xl lg:text-3xl leading-relaxed">
                            You don&apos;t have to worry about the result because all of these interiors are
                            made by people who are professionals in their fields with an elegant and
                            luxurious style and with premium quality materials
                        </p>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div ref={(el: HTMLDivElement) => { elements.current[1] = el }} className="flex justify-center xl:justify-end">
                        <div className="relative w-[70lvw] h-[70lvh] lg:w-[360px] lg:h-[690px] rounded-3xl bg-zinc-800 p-3 shadow-xl border-8 border-zinc-700">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
                                {/* Phone Screen Content */}
                                <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/kFDypMwQYXs" title="Baralee camping"
                                    allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default JourneySection
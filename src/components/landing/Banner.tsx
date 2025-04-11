import React, { useRef } from 'react'
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const Banner = () => {

    const textRef = useRef(null)
    const textDescriptionRef = useRef(null)
    const imageRef = useRef(null)
    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: '50% 50%',
                markers: true,
                scrub: true
            }
        })

        tl.to(textRef.current, { y: -250 }, 'start')
        tl.to(textDescriptionRef.current, { y: -250 }, 'start')
        tl.to(imageRef.current, {
            scale: 1.2,
            ease: 'none',
            transformOrigin: 'center center',
        }, 'start')
        tl.to(containerRef.current, { y: 300 }, 'start')
    })

    return (
        <section ref={containerRef} className=" h-screen relative overflow-hidden">
            {/* <section ref={containerRef} className=" h-screen bg-[url(/Bg-banner-01.png)] bg-no-repeat bg-cover bg-center p-6 xl:p-[90px]"> */}
            <div className="p-0 xl:p-24 flex flex-col justify-center items-center h-full gap-4">
                <p ref={textRef} className="text-center text-6xl md:text-8xl text-white font-semibold z-50">Fulfill Your Happiness</p>
                <p ref={textDescriptionRef} className="text-center text-2xl md:text-3xl text-white font-extralight z-50">&quot;Every time we fall, we come back stronger than before.&quot;</p>
            </div>
            <Image ref={imageRef} src="/Bg-banner-01.png" height={1200} width={1200} className="absolute w-full h-full left-0 top-0 object-cover z-0" alt="banner" />
        </section>
    )
}

export default Banner
import { gsap } from '@/lib/gsap';
import useStore from '@/lib/store';
import { useGSAP } from '@gsap/react';
import Image from 'next/image'
import { useRef } from 'react'


const HeroSection = () => {

    const pathRefs = useRef<SVGPathElement | null>(null);
    const containerSvg = useRef(null);
    const elements = useRef<HTMLDivElement[]>([]);
    const elementsPathMobile = useRef<SVGPathElement[]>([]);
    const desktopSize = useStore((state) => state.IsDesktop)

    useGSAP(() => {
        if (pathRefs.current) {
            const length = pathRefs.current.getTotalLength()
            gsap.set(pathRefs.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            })

            gsap.to(pathRefs.current, {
                strokeDashoffset: 0,
                scrollTrigger: {
                    trigger: pathRefs.current,
                    start: 'top 90%',
                    end: 'bottom 50%',
                    scrub: true,
                },
                ease: 'none',
            })
        }

        elements.current.forEach((el) => {
            gsap.set(el, {
                y: desktopSize ? 200 : 80
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    end: 'bottom 50%',
                    scrub: true
                }
            })

            tl.to(el, {
                y: 0
            }, 'start')
        })

        elementsPathMobile.current.forEach((el) => {
            if (el) {
                const length = el.getTotalLength()
                gsap.set(el, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                })

                gsap.to(el, {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        end: 'bottom 50%',
                        scrub: true,
                    },
                    ease: 'none',
                })
            }
        })

    }, { dependencies: [desktopSize] })

    return (
        <section className="px-8 lg:px-30 pt-10 lg:pt-18 pb-14 lg:pb-20 grid gap-20 relative z-40 bg-barelee overflow-hidden">
            <div className=" flex flex-col gap-5 m-auto">
                <p className=" text-2xl md:text-4xl text-baralee-orange uppercase font-medium text-center">Baralee Camping</p>
                <p className=" text-3xl md:text-5xl text-black font-medium text-center">we provide you the best experience</p>
                <p className=" text-lg md:text-2xl text-black font-light text-center max-w-3xl w-full mx-auto">Discover the perfect blend of nature, flavor, and connection.
                    At our camping area, you&apos;ll find more than just a place to stay — you&apos;ll find a place to belong.</p>
            </div>
            <div ref={containerSvg} className="relative">
                {desktopSize && (
                    <>
                        <svg className='m-auto w-[80%] h-full' viewBox="0 0 952 2390" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={pathRefs} d="M66.4996 2.5C66.4996 2.5 952 301 949.5 497C947 693 96.9996 790.5 21.4769 962C-54.0458 1133.5 941.453 1317 929.976 1506.5C918.5 1696 21.4769 1939 3.49964 2060.5C-14.4776 2182 528 2387 528 2387" stroke="black" strokeWidth="5" />
                        </svg>

                        <div ref={(el: HTMLDivElement) => { elements.current[0] = el }} className="absolute w-[48vw] top-[7vw] lg:w-[35vw] lg:top-[15vw] " >
                            <Image src="/images/capming01.png" height={1200} width={1200} alt="capming01" />
                            <div className=" text-center">
                                <p className=" text-baralee-orange text-[2.5vw] font-medium">Comfortable Camping</p>
                                <p className=" text-[1.5vw] font-light">Spacious, peaceful, and designed for all kinds of campers —
                                    from first-timers to seasoned adventurers.</p>
                            </div>
                        </div>

                        <div ref={(el: HTMLDivElement) => { elements.current[1] = el }} className="absolute w-[45vw] top-[70vw] -right-[5vh] lg:w-[36vw] lg:top-[60vw] lg:-right-[2vh]" >
                            <Image src="/images/capming02.png" height={1200} width={1200} alt="capming02" />
                            <div className="text-center">
                                <p className=" text-baralee-orange text-[2.5vw] font-medium">A Welcoming Community</p>
                                <p className=" text-[1.5vw] font-light">Make memories with fellow campers.
                                    Join group activities, share stories, and feel the connection.</p>
                            </div>
                        </div>

                        <div ref={(el: HTMLDivElement) => { elements.current[2] = el }} className="absolute w-[40vw] top-[100vw] -left-[5vh] lg:w-[28vw] lg:top-[80vw] lg:-left-[5vh]" >
                            <Image src="/images/coffee.png" height={1200} width={1200} alt="coffee" />
                            <div className="text-center">
                                <p className=" text-baralee-orange text-[2.5vw] font-medium">Comfortable Camping</p>
                                <p className=" text-[1.5vw] font-light">Spacious, peaceful, and designed for all kinds of campers —
                                    from first-timers to seasoned adventurers.</p>

                            </div>
                        </div>


                        <div ref={(el: HTMLDivElement) => { elements.current[3] = el }} className=" absolute w-[25vw] top-[160vw] right-[0vh] lg:w-[20vw] lg:top-[125vw] lg:right-[10vh]" >
                            <Image src="/images/cat-re-bg.png" height={1200} width={1200} alt="cat-re-bg" />
                            <div className="text-center">
                                <p className=" text-baralee-orange text-[2.5vw] font-medium">Friendly, Hands-On Owner
                                </p>
                                <p className=" text-[1.5vw] font-light">Our warm and helpful host is always nearby —
                                    ready to guide, chat, or lend a hand whenever you need it.</p>
                            </div>
                        </div>
                    </>
                )}
                {!desktopSize && (
                    <div className='grid gap-4 relative'>
                        <div ref={(el: HTMLDivElement) => { elements.current[0] = el }} className=" m-auto w-[80vw]" >
                            <Image src="/images/capming01.png" height={1200} width={1200} alt="capming01" />
                            <div className=" text-center">
                                <p className=" text-baralee-orange text-[5vw] font-medium">Comfortable Camping</p>
                                <p className=" text-[3.5vw] font-light">Spacious, peaceful, and designed for all kinds of campers —
                                    from first-timers to seasoned adventurers.</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-3'>
                            {/* <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" strokeDasharray="15 15" />
                            </svg> */}
                            <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path ref={(el: SVGPathElement) => { elementsPathMobile.current[0] = el }} d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" />
                            </svg>
                        </div>

                        <div ref={(el: HTMLDivElement) => { elements.current[1] = el }} className="m-auto w-[80vw]" >
                            <Image src="/images/capming02.png" height={1200} width={1200} alt="capming02" />
                            <div className=" text-center">
                                <p className=" text-baralee-orange text-[5vw] font-medium">A Welcoming Community</p>
                                <p className=" text-[3.5vw] font-light">Make memories with fellow campers.
                                    Join group activities, share stories, and feel the connection.</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-3'>
                            {/* <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" strokeDasharray="15 15" />
                            </svg> */}
                            <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path ref={(el: SVGPathElement) => { elementsPathMobile.current[1] = el }} d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" />
                            </svg>
                        </div>
                        <div ref={(el: HTMLDivElement) => { elements.current[2] = el }} className="m-auto w-[70vw]" >
                            <Image src="/images/coffee.png" height={1200} width={1200} alt="coffee" />
                            <div className=" text-center">
                                <p className=" text-baralee-orange text-[5vw] font-medium">Comfortable Camping</p>
                                <p className=" text-[3.5vw] font-light">Spacious, peaceful, and designed for all kinds of campers —
                                    from first-timers to seasoned adventurers.</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-3'>
                            {/* <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" strokeDasharray="15 15" />
                            </svg> */}
                            <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path ref={(el: SVGPathElement) => { elementsPathMobile.current[2] = el }} d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" />
                            </svg>
                        </div>
                        <div ref={(el: HTMLDivElement) => { elements.current[3] = el }} className="m-auto w-[60vw]" >
                            <Image src="/images/cat-re-bg.png" height={1200} width={1200} alt="cat-re-bg" />
                            <div className=" text-center">
                                <p className=" text-baralee-orange text-[5vw] font-medium">Friendly, Hands-On Owner</p>
                                <p className=" text-[3.5vw] font-light">Our warm and helpful host is always nearby —
                                    ready to guide, chat, or lend a hand whenever you need it.</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-3'>
                            {/* <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" strokeDasharray="15 15" />
                            </svg> */}
                            <svg width="2" height="150" viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path ref={(el: SVGPathElement) => { elementsPathMobile.current[3] = el }} d="M0.99938 1C1.74745 2.51079 1.00027 35.1007 0.999943 40.0647C0.999616 45.0288 0.999323 150 0.999323 150" stroke="black" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HeroSection
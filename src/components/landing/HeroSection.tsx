import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
const HeroSection = () => {

    const pathRefs = useRef<SVGPathElement | null>(null);
    const containerSvg = useRef(null);
    const elements = useRef<HTMLDivElement[]>([]);
    // const elementTwo = useRef(null);
    // const elementThree = useRef(null);
    // const elementFour = useRef(null);


    useEffect(() => {
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
                    markers: true,
                    scrub: true,
                },
                ease: 'none',
            })
        }

        elements.current.forEach((el) => {
            gsap.set(el, {
                y: 250
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    end: 'bottom 50%',
                    markers: true,
                    scrub: true
                }
            })

            tl.to(el, {
                y: 0
            }, 'a')
        })

    }, [])

    return (
        <section className="px-8 lg:px-30 pt-10 lg:pt-18 pb-14 lg:pb-20 grid gap-20 relative z-50 bg-barelee">
            <div className=" flex flex-col gap-5 m-auto">
                <p className=" text-2xl md:text-4xl text-baralee-orange uppercase font-medium text-center">Baralee Camping</p>
                <p className=" text-3xl md:text-5xl text-black font-medium text-center">we provide you the best experience</p>
                <p className=" text-lg md:text-2xl text-black font-light text-center max-w-3xl w-full mx-auto">You don’t have to worry about the result because all of these interiors are made by people
                    who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            </div>
            <div ref={containerSvg} className="relative">
                <svg className='m-auto' width="952" height="2390" viewBox="0 0 952 2390" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={pathRefs} d="M66.4996 2.5C66.4996 2.5 952 301 949.5 497C947 693 96.9996 790.5 21.4769 962C-54.0458 1133.5 941.453 1317 929.976 1506.5C918.5 1696 21.4769 1939 3.49964 2060.5C-14.4776 2182 528 2387 528 2387" stroke="black" stroke-width="5" />
                </svg>

                {/* <Image src="/road-line.svg" height={0} width={0} className=" w-full" alt="road-line" /> */}
                <div ref={(el: HTMLDivElement) => { elements.current[0] = el }} className="absolute w-[48vw] top-[7vw] lg:w-[35vw] lg:top-[15vw] " >
                    <Image src="/images/capming01.png" height={1200} width={1200} alt="capming01" />
                    <div className=" text-center">
                        <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                        <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                    </div>
                </div>

                <div ref={(el: HTMLDivElement) => { elements.current[1] = el }} className="absolute w-[45vw] top-[70vw] -right-[5vh] lg:w-[36vw] lg:top-[60vw] lg:-right-[2vh]" >
                    <Image src="/images/capming02.png" height={1200} width={1200} alt="capming02" />
                    <div className="text-center">
                        <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                        <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                    </div>
                </div>

                <div ref={(el: HTMLDivElement) => { elements.current[2] = el }} className="absolute w-[40vw] top-[100vw] -left-[5vh] lg:w-[28vw] lg:top-[80vw] lg:-left-[5vh]" >
                    <Image src="/images/coffee.png" height={1200} width={1200} alt="coffee" />
                    <div className="text-center">
                        <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                        <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                    </div>
                </div>


                <div ref={(el: HTMLDivElement) => { elements.current[3] = el }} className=" absolute w-[25vw] top-[160vw] right-[0vh] lg:w-[20vw] lg:top-[120vw] lg:right-[10vh]" >
                    <Image src="/images/cat-re-bg.png" height={1200} width={1200} alt="cat-re-bg" />
                    <div className="text-center">
                        <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                        <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                    </div>
                </div>


                {/*   
                <Image src="/images/cat-re-bg.png" height={1200} width={1200} className="-rotate-y-180 absolute w-[25vw] top-[160vw] left-[0vh] lg:w-[20vw] lg:top-[79vw] lg:-left-[6vh]" alt="cat-re-bg" />
                <div className="absolute top-[175vw] -right-[4vh] lg:top-[90vw] lg:right-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div> */}
            </div>
        </section>
    )
}

export default HeroSection
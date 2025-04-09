import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="px-16 lg:px-30 pt-18 grid gap-20">
            <div className=" flex flex-col gap-5 m-auto">
                <p className=" text-3xl md:text-4xl text-baralee-orange uppercase font-light text-center">Baralee Camping</p>
                <p className=" text-4xl md:text-5xl text-black font-medium text-center">we provide you the best experience</p>
                <p className=" text-xl md:text-2xl text-black font-light text-center max-w-3xl w-full mx-auto">You don’t have to worry about the result because all of these interiors are made by people
                    who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            </div>
            <div className="bg-[url(/road-line-mobile.svg)] h-[200lvw] lg:bg-[url(/road-line.svg)] bg-no-repeat bg-contain relative lg:h-[115lvw] bg-bottom w-[90%] m-auto">
                {/* <Image src="/road-line.svg" height={0} width={0} className=" w-full" alt="road-line" /> */}
                <Image src="/images/capming01.png" height={1200} width={1200} className="absolute w-[35vw] top-[7vw] right-[0vh]" alt="capming01" />
                <div className="absolute top-[15vw] left-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>

                <Image src="/images/capming02.png" height={1200} width={1200} className="absolute w-[40vw] top-[60vw] -left-[2vh] lg:w-[36vw] lg:top-[39vw] lg:-left-[2vh]" alt="capming02" />
                <div className="absolute top-[65vw] right-[0vh] lg:top-[42vw] lg:right-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>

                <Image src="/images/coffee.png" height={1200} width={1200} className="absolute w-[35vw] top-[95vw] -right-[5vh] lg:w-[28vw] lg:top-[49vw] lg:-right-[5vh]" alt="coffee" />
                <div className="absolute top-[115vw] left-[0vh] lg:top-[65vw] lg:left-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>

                <Image src="/images/cat-re-bg.png" height={1200} width={1200} className="-rotate-y-180 absolute w-[25vw] top-[160vw] left-[0vh] lg:w-[20vw] lg:top-[79vw] lg:-left-[6vh]" alt="cat-re-bg" />
                <div className="absolute top-[175vw] right-[0vh] lg:top-[90vw] lg:right-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="px-10 pt-18 pl-0 grid gap-20">
            <div className=" flex flex-col gap-5 m-auto">
                <p className=" text-4xl text-baralee-orange uppercase font-light text-center">Baralee Camping</p>
                <p className=" text-5xl text-black font-medium text-center">we provide you the best experience</p>
                <p className=" text-2xl text-black font-light text-center max-w-3xl w-full mx-auto">You don’t have to worry about the result because all of these interiors are made by people
                    who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            </div>
            <div className="bg-[url(/road-line.svg)] bg-no-repeat bg-contain relative h-[115lvw] w-[90%] m-auto">
                {/* <Image src="/road-line.svg" height={0} width={0} className=" w-full" alt="road-line" /> */}
                <Image src="/images/capming01.png" height={1200} width={1200} className="absolute w-[30vw] top-[8vw] right-[0vh]" alt="capming01" />
                <div className="absolute top-[15vw] left-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>

                <Image src="/images/capming02.png" height={1200} width={1200} className="absolute w-[36vw] top-[40vw] -left-[2vh]" alt="capming02" />
                <div className="absolute top-[42vw] right-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>

                <Image src="/images/coffee.png" height={1200} width={1200} className="absolute w-[28vw] top-[50vw] -right-[5vh]" alt="coffee" />
                <div className="absolute top-[65vw] left-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>

                <Image src="/images/cat-re-bg.png" height={1200} width={1200} className="-rotate-y-180 absolute w-[20vw] top-[80vw] -left-[6vh]" alt="cat-re-bg" />
                <div className="absolute top-[90vw] right-[0vh] text-center">
                    <p className=" text-baralee-orange text-[2.5vw] font-medium">we provide you the best experience</p>
                    <p className=" text-[1.5vw] font-light">“Where the WiFi is weak, but the connection is strong.”</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
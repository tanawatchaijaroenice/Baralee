import React from 'react'

const Banner = () => {
    return (
        <section className=" h-screen bg-[url(/Bg-banner-01.png)] bg-no-repeat bg-cover bg-center p-[90px]">
            <div className="p-24 flex flex-col justify-center items-center h-full gap-4">
                <p className=" text-8xl text-white font-semibold">Fulfill Your Happiness</p>
                <p className=" text-3xl text-white font-extralight">&quot;Every time we fall, we come back stronger than before.&quot;</p>
            </div>
        </section>
    )
}

export default Banner
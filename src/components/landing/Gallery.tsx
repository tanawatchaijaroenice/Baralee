

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function Gallery() {

    const Images = [
        'gallery-1.png',
        'gallery-2.png',
        'gallery-3.png',
        'gallery-4.png',
    ]

    return (
        <section className="pb-10">
            <p className="text-[#e08c1f] font-medium uppercase tracking-wider text-5xl text-center py-10">BARALEE GALLERY</p>
            {/* Feature Video/Image */}
            <div className="relative rounded-xl overflow-hidden mb-15 shadow-xl w-[90%] m-auto">
                {/* This would typically be a video, but we'll use an image for now */}
                <div className="aspect-video w-full bg-black">
                    <video className='h-full w-full' width="320" height="240" autoPlay preload="none">
                        <source src="/video/baralee-video-02.mp4" type="video/mp4" /> 
                        Your browser does not support the video tag.
                    </video>
                    {/* <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1600240644455-3edc55c375fe?q=80&w=2070&auto=format&fit=crop")',
                            backgroundPosition: 'center'
                        }}
                    /> */}
                    {/* Play button overlay */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
            <Carousel className="w-[90%] m-auto">
                <CarouselContent className="-ml-1">
                    {Images.map((item, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="p-0">
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                        <Image src={`/images/${item}`} height={1200} width={1200} className=" h-full rounded-md object-cover" alt="item" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>
        </section>
    )
}

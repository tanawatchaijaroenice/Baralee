

"use client"

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
// import Autoplay from "embla-carousel-autoplay"

export function Gallery() {
    // const plugin = React.useRef<any>(
    //     Autoplay({ delay: 2000, stopOnInteraction: true })
    // )

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
            <div className="relative rounded-xl overflow-hidden mb-15 shadow-xl w-[77%] m-auto">
                {/* This would typically be a video, but we'll use an image for now */}
                <div className="aspect-video w-full bg-black">
                    <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/WwS-Ugvnl2I" title="Baralee บาร์กาแฟ"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            {/* plugins={[plugin.current]} */}
            <Carousel className="w-[77%] m-auto">
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
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        </section>
    )
}

import { Card } from "@/components/ui/card";
import Image from "next/image";
// import { Separator } from "@/components/ui/separator";

export default function ServicesSection() {
    return (
        <section id="services" className="section-spacing bg-background">
            <div className="p-10 lg:px-54 pt-12 md:pt-16">
                <h2 className="heading-lg text-center mb-2 text-3xl md:text-6xl font-semibold">Our Services</h2>
                <p className="text-muted-foreground text-center mx-auto mb-10 text-xl md:text-2xl">
                    Explore our carefully crafted packages and services designed to maximize your outdoor adventure experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Promotions Card */}
                    <Card className="relative overflow-hidden border-primary/20 p-0">
                        <Image src="/images/service-1.png" height={1200} width={1200} className="w-full h-full" alt="capming02" />
                    </Card>

                    {/* Menu Card */}
                    <Card className="relative overflow-hidden border-secondary/20 p-0">
                        <Image src="/images/service-2.png" height={1200} width={1200} className="w-full h-full" alt="capming02" />
                    </Card>
                </div>
            </div>
        </section>
    );
}

import { Card } from "@/components/ui/card"; 
import Image from "next/image";
// import { Separator } from "@/components/ui/separator";

export default function ServicesSection() {
    return (
        <section id="services" className="section-spacing bg-background">
            <div className="p-20 pt-6">
                <h2 className="heading-lg text-center mb-2 text-3xl md:text-6xl font-semibold">Our Services</h2>
                <p className="text-muted-foreground text-center mx-auto mb-10 text-xl md:text-2xl">
                    Explore our carefully crafted packages and services designed to maximize your outdoor adventure experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Promotions Card */}
                    <Card className="relative overflow-hidden border-primary/20 p-0">
                        <Image src="/images/service-1.png" height={1200} width={1200} className="w-full h-full" alt="capming02" />
                        {/* <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-primary">Promotions</CardTitle>
                            <CardDescription>
                                Special packages and seasonal offers
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                                <div className="bg-primary/10 px-4 py-3 rounded-md text-center mb-4">
                                    <span className="text-primary font-bold text-xl">MONTHLY PACKAGE</span>
                                </div>

                                <div className="space-y-3">
                                    {Array(8).fill(0).map((_, i) => (
                                        <div key={i} className="flex items-center justify-between border-b border-border/50 pb-2">
                                            <span className="font-medium">Mountain Hiking - Day {i + 1}</span>
                                            <span className="text-muted-foreground">1 session</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 text-center bg-accent/10 rounded-md p-3">
                                    <div className="text-accent font-bold text-2xl">30 cups 1,499.-</div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                See All Promotions
                            </Button>
                        </CardFooter> */}
                    </Card>

                    {/* Menu Card */}
                    <Card className="relative overflow-hidden border-secondary/20 p-0">
                        <Image src="/images/service-2.png" height={1200} width={1200} className="w-full h-full" alt="capming02" />
                        {/* <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-secondary">Menu</CardTitle>
                            <CardDescription>
                                Delicious camping meals and beverages
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                                <div className="bg-secondary/10 px-4 py-3 rounded-md text-center mb-4">
                                    <span className="text-secondary font-bold text-xl">FOOD MENU</span>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { name: "Campfire Breakfast", desc: "Hearty eggs, bacon, and toast", price: "249" },
                                        { name: "Trail Mix Salad", desc: "Fresh greens with nuts and berries", price: "189" },
                                        { name: "Mountain BBQ", desc: "Grilled meats with veggie skewers", price: "349" },
                                    ].map((item, i) => (
                                        <div key={i} className="border-b border-border/50 pb-4">
                                            <div className="flex justify-between">
                                                <span className="font-semibold">{item.name}</span>
                                                <span className="font-medium">{item.price}.-</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
 

                                <div className="space-y-6">
                                    {[
                                        { name: "Mountain Spring Water", price: "59" },
                                        { name: "Artisan Hot Chocolate", price: "129" },
                                        { name: "Wilderness Coffee", price: "99" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between border-b border-border/50 pb-3">
                                            <span className="font-medium">{item.name}</span>
                                            <span>{item.price}.-</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                                View Full Menu
                            </Button>
                        </CardFooter> */}
                    </Card>
                </div>
            </div>
        </section>
    );
}

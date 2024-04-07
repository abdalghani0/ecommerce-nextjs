import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

export default function Page() {
    return (
        <Card className="w-full ">
            <CardHeader>
                <CardTitle>Cart</CardTitle>
                <CardDescription>Your purchased products.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <div className="flex flex-col gap-4">
                    <div className="grid md:grid-cols-3 items-center p-4 border-b">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Product Image"
                                className="aspect-square object-cover"
                                height={100}
                                src="/placeholder.svg"
                                width={100}
                            />
                            <div className="grid gap-1.5">
                                <h2 className="font-bold text-base leading-none sm:text-lg md:text-xl">
                                    CottonSculpt Prism Tee: The Cozy Chromatic Blend
                                </h2>
                                <p className="text-sm tracking-wide sm:text-base md:text-lg">Color: Black</p>
                                <p className="text-sm tracking-wide sm:text-base md:text-lg">Size: M</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 text-2xl font-bold">
                            <div className="md:ml-auto">$99.00</div>
                            <Button size="sm">Buy again</Button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 items-center p-4 border-b">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Product Image"
                                className="aspect-square object-cover"
                                height={100}
                                src="/placeholder.svg"
                                width={100}
                            />
                            <div className="grid gap-1.5">
                                <h2 className="font-bold text-base leading-none sm:text-lg md:text-xl">
                                    CottonSculpt Prism Tee: The Cozy Chromatic Blend
                                </h2>
                                <p className="text-sm tracking-wide sm:text-base md:text-lg">Color: Black</p>
                                <p className="text-sm tracking-wide sm:text-base md:text-lg">Size: M</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 text-2xl font-bold">
                            <div className="md:ml-auto">$99.00</div>
                            <Button size="sm">Buy again</Button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 items-center p-4 border-b">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Product Image"
                                className="aspect-square object-cover"
                                height={100}
                                src="/placeholder.svg"
                                width={100}
                            />
                            <div className="grid gap-1.5">
                                <h2 className="font-bold text-base leading-none sm:text-lg md:text-xl">
                                    CottonSculpt Prism Tee: The Cozy Chromatic Blend
                                </h2>
                                <p className="text-sm tracking-wide sm:text-base md:text-lg">Color: Black</p>
                                <p className="text-sm tracking-wide sm:text-base md:text-lg">Size: M</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 text-2xl font-bold">
                            <div className="md:ml-auto">$99.00</div>
                            <Button size="sm">Buy again</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


export default function Hero() {
    return (
        <div className="relative bg-blue-100">
            <img
              alt="Hero"
              className="aspect-video object-cover w-full"
              height="400"
              src="/placeholder.svg"
              width="1440"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl md:leading-[3.5]">
                  Spring Collection
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Embrace the season with our latest styles. Limited time offer.
                </p>
              </div>
            </div>
          </div>
    )
}
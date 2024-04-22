import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-blue-100 flex flex-col md:flex-row items-center justify-center gap-5  px-3 py-10">
      <div className="text-center">
        <h1 className="text-3xl mb-5 md:mb-10 font-bold sm:text-5xl md:text-6xl ">
          Spring Collection
        </h1>
        <p className="text-gray-500 text-xl dark:text-gray-400">
          Embrace the season with our latest styles. Limited time offer.
        </p>
      </div>
      <Image alt="Hero" className="w-1/2" height="732" src="/hero.svg" width="500" />
    </div>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-blue-100">
      <Image
        alt="Hero"
        className="aspect-video object-cover w-full"
        height="400"
        src="/hero.jpg"
        width="1440"
      />
    </div>
  )
}
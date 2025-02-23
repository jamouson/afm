import Image from "next/image"

export default function ImageBanner() {
  return (
    <div className="relative w-full h-[200px]">
      <Image
        src="/placeholder.svg?height=400&width=1600"
        alt="Grocery store banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h2 className="text-white text-4xl font-bold text-center px-4">Welcome to Our Store</h2>
        <p className="text-white text-xl text-center px-4 mt-2">Fresh Produce, Great Prices</p>
      </div>
    </div>
  )
}


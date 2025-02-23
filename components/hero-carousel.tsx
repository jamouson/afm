"use client"
import Slider from "react-slick"
import Image from "next/image"

// You'll need to add these to your project:
// npm install react-slick slick-carousel
// Also, import the CSS in your layout or page:
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const heroImages = [
  { src: "/placeholder.svg?height=400&width=1200", alt: "Hero image 1" },
  { src: "/placeholder.svg?height=400&width=1200", alt: "Hero image 2" },
  { src: "/placeholder.svg?height=400&width=1200", alt: "Hero image 3" },
]

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {heroImages.map((image, index) => (
          <div key={index} className="relative h-[400px]">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}


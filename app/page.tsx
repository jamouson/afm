import { Suspense } from "react"
import GroceryGrid from "@/components/grocery-grid"
import Header from "@/components/header"
import ImageBanner from "@/components/image-banner"
import TopHeader from "@/components/top-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopHeader />
      <ImageBanner />
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <GroceryGrid />
        </Suspense>
      </main>
    </div>
  )
}


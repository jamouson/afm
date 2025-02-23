import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BannerCard() {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="font-bold text-2xl mb-2">Special Offer!</h3>
          <p className="text-lg mb-4 opacity-90">Get 20% off on your first order</p>
        </div>
        <Button variant="secondary" className="w-full font-semibold">
          Shop Now
        </Button>
      </CardContent>
    </Card>
  )
}


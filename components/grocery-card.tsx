"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Grocery {
  id: number
  name: string
  price: number
  salePrice?: number
  department: string
  image: string
  isNew?: boolean
  minimumQuantity?: number
}

export default function GroceryCard({ grocery }: { grocery: Grocery }) {
  const isOnSale = grocery.salePrice !== undefined && grocery.salePrice < grocery.price

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-shadow hover:shadow-lg">
      <div className="relative pt-[100%]">
        <Image 
          src={grocery.image || "/placeholder.svg"} 
          alt={grocery.name} 
          fill 
          className="object-cover" 
        />
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isOnSale && <Badge variant="destructive">Sale</Badge>}
          {grocery.isNew && <Badge variant="secondary">New</Badge>}
        </div>
      </div>
      <CardContent className="p-4 flex-grow">
        <p className="text-sm text-muted-foreground">{grocery.department}</p>
        <h3 className="font-semibold text-lg">{grocery.name}</h3>
        <div className="mt-2">
          <div className="flex items-baseline gap-2">
            {isOnSale ? (
              <>
                <span className="text-lg font-bold text-destructive">
                  ${grocery.salePrice?.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${grocery.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold">${grocery.price.toFixed(2)}</span>
            )}
          </div>
          {grocery.minimumQuantity && (
            <p className="text-sm text-muted-foreground mt-1">
              Minimum qty: {grocery.minimumQuantity}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
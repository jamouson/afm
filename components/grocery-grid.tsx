import GroceryCard from "@/components/grocery-card"
import BannerCard from "@/components/banner-card"

const groceries = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 0.99,
    department: "Produce",
    image: "/placeholder.svg?height=200&width=200",
    minimumQuantity: 5,
  },
  {
    id: 2,
    name: "Whole Milk",
    price: 3.49,
    salePrice: 2.99,
    department: "Dairy",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 2.99,
    department: "Bakery",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Chicken Breast",
    price: 5.99,
    salePrice: 4.99,
    department: "Meat",
    image: "/placeholder.svg?height=200&width=200",
    minimumQuantity: 2,
  },
  {
    id: 5,
    name: "Frozen Pizza",
    price: 4.99,
    department: "Frozen",
    image: "/placeholder.svg?height=200&width=200",
    isNew: true,
  },
  {
    id: 6,
    name: "Canned Tomatoes",
    price: 1.49,
    department: "Pantry",
    image: "/placeholder.svg?height=200&width=200",
    minimumQuantity: 3,
  },
  {
    id: 7,
    name: "Fresh Strawberries",
    price: 3.99,
    salePrice: 2.99,
    department: "Produce",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Organic Eggs",
    price: 4.49,
    department: "Dairy",
    image: "/placeholder.svg?height=200&width=200",
    isNew: true,
  },
  {
    id: 9,
    name: "Avocado",
    price: 1.99,
    department: "Produce",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 10,
    name: "Ground Coffee",
    price: 7.99,
    salePrice: 6.49,
    department: "Pantry",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 11,
    name: "Salmon Fillet",
    price: 9.99,
    department: "Seafood",
    image: "/placeholder.svg?height=200&width=200",
    minimumQuantity: 2,
  },
  {
    id: 12,
    name: "Greek Yogurt",
    price: 3.99,
    department: "Dairy",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 13,
    name: "Organic Spinach",
    price: 2.99,
    department: "Produce",
    image: "/placeholder.svg?height=200&width=200",
    isNew: true,
  },
  {
    id: 14,
    name: "Almond Butter",
    price: 6.99,
    department: "Pantry",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function GroceryGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {groceries.slice(0, 3).map((grocery) => (
          <div key={grocery.id} className="h-full">
            <GroceryCard grocery={grocery} />
          </div>
        ))}
        <div className="h-full">
          <BannerCard />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {groceries.slice(3, 7).map((grocery) => (
          <div key={grocery.id} className="h-full">
            <GroceryCard grocery={grocery} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="h-full lg:col-span-1">
          <BannerCard />
        </div>
        <div className="h-full lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {groceries.slice(7, 10).map((grocery) => (
              <div key={grocery.id} className="h-full">
                <GroceryCard grocery={grocery} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {groceries.slice(10, 14).map((grocery) => (
          <div key={grocery.id} className="h-full">
            <GroceryCard grocery={grocery} />
          </div>
        ))}
      </div>
    </div>
  )
}


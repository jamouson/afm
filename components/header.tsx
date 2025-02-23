"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const departments = ["All", "Produce", "Dairy", "Bakery", "Meat", "Frozen", "Pantry"]

export default function Header() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <div className="flex items-center justify-between gap-2 w-full">
              <Select>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept.toLowerCase()}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Mobile Sort Select */}
              <div className="sm:hidden">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
              <Button
                variant={activeFilters.includes("onSale") ? "default" : "outline"}
                onClick={() => toggleFilter("onSale")}
                className="whitespace-nowrap"
              >
                On Sale
              </Button>
              <Button
                variant={activeFilters.includes("newItems") ? "default" : "outline"}
                onClick={() => toggleFilter("newItems")}
                className="whitespace-nowrap"
              >
                New Items
              </Button>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 w-full sm:w-auto">
            <Input type="search" placeholder="Search groceries..." className="w-full sm:w-64" />
            {/* Desktop Sort Select */}
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm font-medium">Active Filters:</span>
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="capitalize">
                {filter === "onSale" ? "On Sale" : "New Items"}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
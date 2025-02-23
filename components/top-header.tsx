"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, MapPin, Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function TopHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold text-primary">Grocery Store</div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                On Sale
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                What's New
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="flex items-center text-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 mr-1" /> Locations
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-1" /> (123) 456-7890
              </a>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-foreground">
              {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    On Sale
                  </a>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    What's New
                  </a>
                  <a href="#" className="flex items-center text-foreground hover:text-primary transition-colors">
                    <MapPin className="w-4 h-4 mr-2" /> Locations
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" /> (123) 456-7890
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}


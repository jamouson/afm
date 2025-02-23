"use client"

import * as React from "react"
import * as RadixSheet from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

const Sheet = RadixSheet.Root

const SheetTrigger = RadixSheet.Trigger

const SheetClose = RadixSheet.Close

const SheetPortal = RadixSheet.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof RadixSheet.Overlay>,
  React.ComponentPropsWithoutRef<typeof RadixSheet.Overlay>
>(({ className, ...props }, ref) => (
  <RadixSheet.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className,
    )}
    {...props}
  />
))
SheetOverlay.displayName = "SheetOverlay"

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof RadixSheet.Content> {
  side?: "top" | "right" | "bottom" | "left"
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof RadixSheet.Content>,
  SheetContentProps
>(({ className, children, side = "right", ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <RadixSheet.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-popover p-6 shadow-lg rounded-t-md border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-10 data-[state=open]:slide-in-from-left-10 data-[state=closed]:slide-out-to-right-10 data-[state=open]:slide-in-from-right-10 data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-top-10 data-[state=closed]:slide-out-to-bottom-10 data-[state=open]:slide-in-from-bottom-10 sm:rounded-md",
        side === "top" &&
          "border-b-0 data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",
        side === "bottom" &&
          "border-t-0 data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full",
        side === "left" &&
          "border-r-0 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full",
        side === "right" &&
          "border-l-0 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
        className,
      )}
      {...props}
    >
      {children}
      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" />
    </RadixSheet.Content>
  </SheetPortal>
))
SheetContent.displayName = "SheetContent"

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-6 flex flex-col justify-end space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0", className)}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof RadixSheet.Title>,
  React.ComponentPropsWithoutRef<typeof RadixSheet.Title>
>(({ className, ...props }, ref) => (
  <RadixSheet.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
SheetTitle.displayName = RadixSheet.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof RadixSheet.Description>,
  React.ComponentPropsWithoutRef<typeof RadixSheet.Description>
>(({ className, ...props }, ref) => (
  <RadixSheet.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
SheetDescription.displayName = RadixSheet.Description.displayName

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
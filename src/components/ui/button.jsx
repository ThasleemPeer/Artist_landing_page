import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90",
        destructive:
          "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white hover:opacity-90",
        outline:
          "border border-gray-300 bg-transparent text-gray-800 hover:border-gray-500 hover:text-gray-900",
        secondary:
          "bg-gradient-to-r from-teal-400 to-cyan-400 text-white hover:opacity-90",
        ghost:
          "bg-transparent text-gray-800 hover:bg-gray-100 hover:text-gray-900",
        link:
          "text-indigo-500 underline-offset-4 hover:underline hover:text-indigo-600",
      },
      size: {
        default: "h-10 px-6 py-3 text-md",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-md px-8 text-lg",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

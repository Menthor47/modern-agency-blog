
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[#0057FF] focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[48px] min-w-[48px]",
  {
    variants: {
      variant: {
        // Primary button - main CTA
        default: "bg-[#0057FF] text-white hover:bg-[#0057FF]/90 shadow-md hover:shadow-lg font-semibold",
        // Secondary button - secondary actions
        secondary: "bg-[#FF6243] text-white hover:bg-[#FF6243]/90 shadow-md hover:shadow-lg font-medium",
        // Tertiary button - subtle actions
        tertiary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 font-normal",
        // Legacy variants for compatibility
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-accent-red text-white hover:bg-accent-red/90 shadow-elegant transition-all duration-300 hover:shadow-glow hover:scale-105",
        "hero-outline": "border-2 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105",
        "hero-secondary": "bg-white text-accent-red hover:bg-white/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

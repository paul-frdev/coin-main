import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-between rounded-md text-sm font-medium ring-offset-background duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        buttonPrimaryBlue:
          " bg-[#727AED] text-white hover:bg-[#666DD4] justify-center gap-x-1 h-[40px] min-w-[134px] rounded-3xl  font-bold tracking-[1px]",
        buttonPrimaryOrange:
          "bg-[#ED9F72] text-white hover:bg-[#666DD4]  uppercase h-[40px] w-[134px] rounded-3xl drop-shadow-primaryOrange font-bold tracking-[1px] uppercase",
        buttonPrimaryOrangeDestructive: "bg-[rgba(237, 159, 114, 0.10)] rounded-3xl border-2 border-[#ED9F72]",
        buttonPrimaryBlueDestructive:
          "bg-transparent rounded-3xl border-2 border-[rgba(114, 122, 237, 0.50)] hover:bg-[#727AED] hover:border-transparent hover:text-white font-goggleSans font-bold text-[16px]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "buttonPrimaryBlue",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cellVariants = cva("relative min-h-[120px] border-white/25", {
  variants: {
    padding: {
      default: "p-6 lg:p-12",
      heading: "px-6 lg:px-12 pb-6 lg:pb-12 pt-12 lg:pt-24",
      none: "padding-0",
    },
    border: {
      all: "border-[0.5px]",
      left: "border-l-[0.5px]",
      "bottom-right": "border-b-[0.5px] border-r-[0.5px]",
    },
  },
  defaultVariants: {
    padding: "default",
    border: "bottom-right",
  },
});

type Props = React.ComponentProps<"div"> & VariantProps<typeof cellVariants>;

function Cell({ className, padding, border, children, ...props }: Props) {
  return (
    <div
      className={cn(cellVariants({ padding, border, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

export default Cell;

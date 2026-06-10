import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const asteriskVariants = cva("absolute  z-10", {
  variants: {
    position: {
      "top-left": "-top-2 -left-2",
      "bottom-left": "-bottom-2 -left-2",
      "top-right": "-top-2 -right-2",
      "bottom-right": "-bottom-2 -right-2",
    },
  },
  defaultVariants: {
    position: "top-left",
  },
});

type Props = React.ComponentProps<"h2"> & VariantProps<typeof asteriskVariants>;

function Asterisk({ className, position, ...props }: Props) {
  return (
    <div className={cn(asteriskVariants({ position, className }))} {...props}>
      <div className="relative size-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-[0.5px] w-4 bg-white/50" />
          <div className="absolute h-4 w-[0.5px] bg-white/50" />
        </div>
      </div>
    </div>
  );
}

export default Asterisk;

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"h2">;

function Heading2({ className, children, ...props }: Props) {
  return (
    <h2
      className={cn("text-[#F5F5F5] text-2xl lg:text-3xl font-semibold", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export default Heading2;

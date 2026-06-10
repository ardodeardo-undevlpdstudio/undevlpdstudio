import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"p">;

function Paragraph({ className, children, ...props }: Props) {
  return (
    <p
      className={cn(
        "text-[#F5F5F5]/80 text-base lg:text-lg leading-[160%] tracking-[-0.36px]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;

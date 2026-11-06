import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"section">;

function Section({ className, children, ...props }: Props) {
  return (
    <section
      className={cn(
        "c-section--base w-full md:max-w-[393px] py-16 px-4 mx-auto bg-black space-y-7",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;

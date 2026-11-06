import Section from "@/app/components/Section";
import { Paragraph } from "@/app/components/Typography";

function Hero() {
  return (
    <Section id="hero" className="pt-32 pb-24">
      <h1 className="text-[36px] text-[#F5F5F5] font-medium leading-[120%] tracking-[-0.88px]">
        Never finished. <br />
        Always{" "}
        <span className="font-semibold italic text-[#2F73FF]">evolving</span>.
      </h1>

      {/* <Paragraph>
        Born as an in-house digital team, we turn business challenges into
        digital opportunities through design, technology, and marketing.
      </Paragraph> */}
    </Section>
  );
}

export default Hero;

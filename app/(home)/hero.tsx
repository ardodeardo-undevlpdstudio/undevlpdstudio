import { Paragraph } from "../components/Typography";
import Asterisk from "../components/Asterisk";
import Cell from "../components/Cell";

function Hero() {
  return (
    <section id="hero" className="mt-4">
      <div className="container mx-auto">
        <Cell border={"all"} padding={"heading"}>
          <Asterisk></Asterisk>

          <h1 className="text-[32px] text-[#F5F5F5] font-medium leading-[140%] tracking-[-0.88px]">
            Never finished. <br />
            Always{" "}
            <span className="font-semibold italic text-[#2F73FF]">
              evolving
            </span>
            .
          </h1>
          <Paragraph className="mt-6">
            Born as an in-house digital team, we turn business challenges into
            digital opportunities through design, technology, and marketing.
          </Paragraph>
        </Cell>
      </div>
    </section>
  );
}

export default Hero;

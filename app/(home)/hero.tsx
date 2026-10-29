import { Paragraph } from "../components/Typography";
import Asterisk from "../components/Asterisk";
import Cell from "../components/Cell";

function Hero() {
  return (
    <section id="hero" className="mt-4">
      <div className="container mx-auto">
        <Cell border={"all"} padding={"heading"}>
          <Asterisk></Asterisk>
          <h1 className="text-[32px] font-semibold leading-[120%] tracking-[-0.88px] bg-[linear-gradient(99deg,_#2F73FF_0%,_#CA6677_100%)] bg-clip-text text-transparent">
            Never finished. Always evolving.
          </h1>
          <Paragraph className="mt-3">
            Born as an in-house digital team, we turn business challenges into
            digital opportunities through design, technology, and marketing.
          </Paragraph>
        </Cell>
      </div>
    </section>
  );
}

export default Hero;

import Cell from "@/app/components/Cell";
import Section from "@/app/components/Section";
import Asterisk from "@/app/components/Asterisk";
import { Heading2 } from "@/app/components/Typography";

function Product() {
  return (
    <Section id="product">
      <Heading2>Our products.</Heading2>

      <Cell border={"top-left"} padding={"none"}>
        <Asterisk></Asterisk>
        <div className="grid grid-cols-2">
          <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300">
            <h3 className="text-white text-[22px] leading-[100%] font-bold">
              backoffice
            </h3>
          </Cell>
          <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300">
            <h3 className="text-white text-[22px] leading-[100%] font-bold">
              atlas <br />
              oceaterra
            </h3>
          </Cell>
          <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300">
            <h3 className="text-white text-[22px] leading-[100%] font-bold">
              eterra <br />
              carbon
            </h3>
          </Cell>
          <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300"></Cell>
        </div>
        <Asterisk position={"bottom-right"}></Asterisk>
      </Cell>
    </Section>
  );
}

export default Product;

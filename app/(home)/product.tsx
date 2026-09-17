import { Heading2 } from "../components/Typography";
import Asterisk from "../components/Asterisk";
import Cell from "../components/Cell";

function Product() {
  return (
    <section id="product">
      <div className="container mx-auto">
        <Cell border={"left"} padding={"none"}>
          <Cell padding={"heading"}>
            <Heading2>Our products.</Heading2>
          </Cell>
          <div className="relative grid grid-cols-2">
            <Asterisk></Asterisk>
            <Asterisk position={"bottom-right"}></Asterisk>
            <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300">
              <h3 className="text-white text-[22px] lg:text-2xl leading-[100%] font-bold">
                backoffice
              </h3>
            </Cell>
            <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300">
              <h3 className="text-white text-[22px] lg:text-2xl leading-[100%] font-bold">
                atlas <br />
                oceaterra
              </h3>
            </Cell>
            <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300">
              <h3 className="text-white text-[22px] lg:text-2xl leading-[100%] font-bold">
                eterracarbon
              </h3>
            </Cell>
            <Cell className="bg-white/10 flex items-center hover:bg-white/25 transition-colors duration-300"></Cell>
          </div>
        </Cell>
      </div>
    </section>
  );
}

export default Product;

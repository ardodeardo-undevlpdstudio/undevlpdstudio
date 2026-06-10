import { Heading2, Paragraph } from "../components/Typography";
import Asterisk from "../components/Asterisk";
import Cell from "../components/Cell";

import { PersonStanding, Globe, Code } from "lucide-react";

function Service() {
  return (
    <section id="service">
      <div className="container mx-auto">
        <Cell border={"left"} padding={"none"}>
          <Cell padding={"heading"}>
            <Heading2>What we do.</Heading2>
          </Cell>
          <div className="relative grid grid-cols-2 place-content-center">
            <Asterisk></Asterisk>
            <Asterisk position={"bottom-right"}></Asterisk>
            <Cell className="flex items-start">
              <div className="space-y-2">
                <PersonStanding
                  size={24}
                  className="text-white"
                ></PersonStanding>
                <Paragraph className="font-medium">
                  UI/UX & Creative Design
                </Paragraph>
              </div>
            </Cell>
            <Cell className="flex items-start">
              <div className="space-y-2">
                <Globe size={24} className="text-white"></Globe>
                <Paragraph className="font-medium">Digital Marketing</Paragraph>
              </div>
            </Cell>
            <Cell className="flex items-start">
              <div className="space-y-2">
                <Code size={24} className="text-white"></Code>
                <Paragraph className="font-medium">
                  Software Development
                </Paragraph>
              </div>
            </Cell>
            <Cell></Cell>
          </div>
        </Cell>
      </div>
    </section>
  );
}

export default Service;

import Cell from "@/app/components/Cell";
import Section from "@/app/components/Section";
import Asterisk from "@/app/components/Asterisk";
import { Heading2, Paragraph } from "@/app/components/Typography";

import { PersonStanding, Globe, Code } from "lucide-react";

function Service() {
  return (
    <Section id="service">
      <Heading2>What we do.</Heading2>

      <Cell border={"top-left"} padding={"none"}>
        <Asterisk></Asterisk>
        <div className="grid grid-cols-2">
          <Cell className="flex items-start">
            <div className="space-y-2">
              <Code size={24} className="text-white"></Code>
              <Paragraph className="font-medium">
                Software Development
              </Paragraph>
            </div>
          </Cell>
          <Cell className="flex items-start">
            <div className="space-y-2">
              <PersonStanding size={24} className="text-white"></PersonStanding>
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
          <Cell></Cell>
        </div>
        <Asterisk position={"bottom-right"}></Asterisk>
      </Cell>
    </Section>
  );
}

export default Service;

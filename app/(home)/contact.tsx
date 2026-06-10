import Link from "next/link";

import { Heading2 } from "../components/Typography";
import Cell from "../components/Cell";

function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto">
        <Cell border={"left"} padding={"none"}>
          <Cell
            padding={"heading"}
            className="flex flex-col items-center justify-center gap-5"
          >
            <Heading2 className="text-center">
              Ready to build your undeveloped ideas?
            </Heading2>

            <Link
              href={"mailto:hello@undevlpdstudio.com"}
              className="mx-auto py-2 px-4 rounded-[20px] bg-white hover:bg-[#2F73FF] hover:text-white transition-colors duration-300 text-base text-black font-medium leading-[160%] tracking-[-0.32px]"
            >
              Contact Us
            </Link>
          </Cell>
        </Cell>
      </div>
    </section>
  );
}

export default Contact;

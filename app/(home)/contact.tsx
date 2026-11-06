import Link from "next/link";

import Section from "@/app/components/Section";
import { Heading2 } from "@/app/components/Typography";

function Contact() {
  return (
    <Section id="service" className="space-y-5">
      <Heading2 className="text-center">
        Ready to build your undeveloped ideas?
      </Heading2>

      <Link
        href={"mailto:hello@undevlpdstudio.com"}
        className="block w-fit mx-auto py-2 px-4 rounded-[20px] bg-white hover:bg-[#2F73FF] hover:text-white transition-colors duration-300 text-base text-black font-medium leading-[160%] tracking-[-0.32px]"
      >
        Contact Us
      </Link>
    </Section>
  );
}

export default Contact;

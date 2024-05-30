"use client";

import Image from "next/image";
import tmf from "@/app/resources/tmf.jpeg";
import finki from "@/app/resources/finki.png";
import dose from "@/app/resources/dose.png";
import kvatro from "@/app/resources/kvatro.webp";
import morino from "@/app/resources/Morino.webp";
import redbull from "@/app/resources/redbull.png";
import pekara from "@/app/resources/Pekarata_od_karshi.webp";
import Heading from "./Heading";
import { RevealList } from "next-reveal";

export default function Sponsors() {
  return (
    <section className="my-10 md:mx-28 mx-12">
      <RevealList interval={100} delay={500}>
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
          <Heading heading={"Our Supporters & Supporters"}></Heading>
        </div>

        <div className="lg:flex justify-evenly items-center gap-14">
          <h2 className="font-eestec text-justify text-black font-light mb-8 indent-8">
            By having SSAs all over Europe, we create the opportunity for
            companies to come in touch with young people who have developed
            their soft skills and are ready to be placed in any type of position
            and conquer it. Also, by having access to our promotional campaign,
            you get the chance to come in contact with people of all trades, not
            just Electrical Engineers, who are keen on self-improvement and
            interested in being part of an international working environment. If
            you are interested in becoming our sponsor please do not hesitate to
            contact us.
          </h2>
        </div>
      </RevealList>
    </section>
  );
}

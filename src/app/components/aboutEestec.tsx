"use client";

import Image from "next/image";
import img1 from "@/app/resources/logo/eestec-logo.png";
import Heading from "./Heading";
import { RevealList } from "next-reveal";

export default function AboutEestec() {
  return (
    <section className="my-10 md:mx-28 mx-12">
      <RevealList interval={100} delay={500}>
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
          <Heading heading={"About EESTEC"}></Heading>
          <h1 className="text-2xl text-center font-bold my-3" style={{color: "#E52A30"}}>
            Electrical Engineering STudents&apos; European assoCiation
          </h1>
        </div>

        <div className="lg:flex justify-evenly items-center gap-14">
          <h2 className="font-eestec text-justify text-black font-light mb-8 indent-8">
            Electrical Engineering STudents&apos; European assoCiation (EESTEC) was
            founded in Eindhoven in 1986, aiming to improve students&apos;
            international cooperation, as well as enable students from
            electrical profile Universities, Institutes and Technical Schools of
            Europe to cooperate with the industry, participate in competitions,
            professional trainings and other forms of professional development.
            By its nature, EESTEC is an apolitical, non-governmental and
            nonprofit students&apos; organization which brings together students
            organized into 52 Universities from 26 Countries. After 32 years of
            successful development, EESTEC remains one of the strongest
            students&apos; networks in Europe, giving opportunities to young future
            professionals to improve and upgrade their technical and soft
            skills.
          </h2>
        </div>
        <div className="lg:flex justify-evenly items-center gap-14">
                <div className="text-eestec text-center items-center" >
                <Image src={img1} alt="Sponsor Logo" height={200} className="mt-8 mb-8"></Image>
                </div>
            </div>
      </RevealList>
    </section>
  );
}

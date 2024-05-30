"use client";

import Image from "next/image";
import img1 from "@/app/resources/logo/eestec-logo.png";
import Heading from "./Heading";
import { RevealList } from "next-reveal";

export default function AboutSSA() {
  return (
    <section className="my-10 md:mx-28 mx-12">
      <RevealList interval={100} delay={500}>
        <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
          <Heading heading={"About Soft Skills Academy"}></Heading>
          <h1 className="text-2xl text-center font-bold my-3" style={{color: "#6F2864"}}>
            We envision a Europe where youth hold the power to develop their
            soft skills in order to reach the full potential in their social and
            professional lives.
          </h1>
        </div>

        <div className="lg:flex justify-evenly items-center gap-14">
          <h2 className="font-eestec text-justify text-black font-light mb-8 indent-8">
            EESTEC Soft Skills Academy (SSA) is an international project
            organized by Electrical Engineering STudents’ European assoCiation
            (EESTEC). The project is formed to be divided in two parts: the
            international and the local part. The local part consists of EESTEC
            Commitments organizing events named SSA in different European
            cities. The international part is a team responsible for making sure
            the events are following standards and to facilitate the
            collaboration and communication between local events. SSA provides a
            unique opportunity for further development of ambitious students
            with assets of non-formal education. These assets, will be expected
            from them in their future working place. Every local event provides
            trainings in certain topics of soft skills (personal and social
            skills). These trainings are held by certified EESTEC trainers, HR
            representatives of companies and other experts in the field of soft
            skills. In the end, participants are provided with CV supplements.
            There is no participation fee and every SSA is open towards all
            students.
          </h2>
        </div>
      </RevealList>
    </section>
  );
}

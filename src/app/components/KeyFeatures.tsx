"use client";

import Feature from "./Feature";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineTrendingUp } from "react-icons/md";
import { RevealList } from  'next-reveal'
import { FaPeopleRobbery } from "react-icons/fa6";

export default function KeyFeatures() {
    return(
        <section className="my-10 md:mx-6 mx-12">
            <RevealList interval={200} delay={500}>
            <div className="md:flex justify-center items-center gap-20">
                <Feature icon={FaPeopleRobbery} text={"Learn Soft Skills"}></Feature>
                <Feature icon={MdOutlineSchool} text={"Educational Sessions"}></Feature>
                <Feature icon={MdOutlineTrendingUp} text={"Career Opportunities"}></Feature>
            </div>
            </RevealList>
        </section>
    );
}
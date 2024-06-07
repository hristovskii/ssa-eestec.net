"use client";

import Image from "next/image";
import img1 from "@/app/resources/organizators/petar.jpeg";
import img2 from "@/app/resources/organizators/petar.jpeg";
import img3 from "@/app/resources/organizators/petar.jpeg";
import img4 from "@/app/resources/organizators/petar.jpeg";
import img5 from "@/app/resources/organizators/petar.jpeg";
import Heading from "./Heading";
import { RevealList } from  'next-reveal'
import OriganizatorImage from "./OrganizatorImage";

export default function Organizators() {
    return(
        
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={500}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Organizators for the coming event"}></Heading>
            </div>
            <div className="lg:flex justify-evenly items-center gap-14">
                <OriganizatorImage sourceImage={img1} nameSurname={"Petar Hristovski"} position={"Head Organizator"}></OriganizatorImage>
                <OriganizatorImage sourceImage={img1} nameSurname={"Petar Hristovski"} position={"FR coordinator"}></OriganizatorImage>
                <OriganizatorImage sourceImage={img1} nameSurname={"Petar Hristovski"} position={"HR coordinator"}></OriganizatorImage>
            </div>

            <div className="lg:flex justify-evenly items-center">
            <OriganizatorImage sourceImage={img1} nameSurname={"Petar Hristovski"} position={"PR coordinator"}></OriganizatorImage>
            <OriganizatorImage sourceImage={img1} nameSurname={"Petar Hristovski"} position={"IT coordinator"}></OriganizatorImage>
            </div>
            </RevealList>
        </section>
        
    );
}
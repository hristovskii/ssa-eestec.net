"use client";

import Image from "next/image";
import img1 from "@/app/resources/cities/skopje.jpg";
import img2 from "@/app/resources/cities/ankara.jpeg";
import img3 from "@/app/resources/cities/istanbul.jpg";
import img4 from "@/app/resources/cities/krakow.jpeg";
import img5 from "@/app/resources/cities/milan.jpeg";
import img6 from "@/app/resources/cities/novi_sad.jpeg";
import img7 from "@/app/resources/cities/xanthi.jpg";
import Heading from "./Heading";
import { RevealList } from  'next-reveal'

export default function Events() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={500}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Latest Cities"}></Heading>
            </div>
            <div className="lg:flex justify-evenly items-center gap-14">
                <Image src={img1} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem"}} className="mt-8 mb-8 zoom"></Image>
                <Image src={img2} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem" }} className="mt-8 mb-8 zoom"></Image>
                <Image src={img3} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem" }} className="mt-8 mb-8 zoom"></Image>
            </div>

            <div className="lg:flex justify-evenly items-center gap-14">
                <Image src={img4} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem" }} className="mt-8 mb-8 zoom"></Image>
                <Image src={img5} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem" }} className="mt-8 mb-8 zoom"></Image>
                <Image src={img6} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem" }} className="mt-8 mb-8 zoom"></Image>
            </div>

            <div className="lg:flex justify-evenly items-center gap-14">
                <Image src={img7} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem" }} className="mt-8 mb-8 zoom"></Image>
                </div>
            </RevealList>
            
        </section>
    );
}
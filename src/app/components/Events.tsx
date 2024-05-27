"use client";

import Image from "next/image";
import img1 from "@/app/resources/ea_robotics.png";
import img2 from "@/app/resources/net.jpg";
import img3 from "@/app/resources/ui_ux.jpg";
import img4 from "@/app/resources/vue.jpg";
import img5 from "@/app/resources/frontend.jpg";
import img6 from "@/app/resources/arduino.png";
import Heading from "./Heading";
import { RevealList } from  'next-reveal'

export default function Events() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={500}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Latest Events"}></Heading>
            </div>
            <div className="lg:flex justify-evenly items-center gap-14">
                <Image src={img1} alt="Sponsor Logo" height={400} style={{border: "5px solid #902264" }} className="mt-8 mb-8"></Image>
                <Image src={img2} alt="Sponsor Logo" height={400} style={{border: "5px solid #902264" }} className="mt-8 mb-8"></Image>
                <Image src={img3} alt="Sponsor Logo" height={400} style={{border: "5px solid #902264" }} className="mt-8 mb-8"></Image>
            </div>


            {/* style={{
            borderRadius: "100px", 
          }} */}

            <div className="lg:flex justify-evenly items-center gap-14">
                <Image src={img4} alt="Sponsor Logo" height={400} style={{border: "5px solid #902264" }} className="mt-8 mb-8"></Image>
                <Image src={img5} alt="Sponsor Logo" height={400} style={{border: "5px solid #902264" }} className="mt-8 mb-8"></Image>
                <Image src={img6} alt="Sponsor Logo" height={400} style={{border: "5px solid #902264" }} className="mt-8 mb-8"></Image>
            </div>
            </RevealList>
            
        </section>
    );
}
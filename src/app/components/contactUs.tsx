"use client";

import { MdElectricBolt } from "react-icons/md";
import SecondaryButton from "./SecondaryButton";

import Image from "next/image";
import img1 from "@/app/resources/organizators/Kostis_NTozis.jpg";
import img2 from "@/app/resources/organizators/Anthi_Gavriilidou.jpg";
import { RevealList } from  'next-reveal'
import IconComponent from "./Icon";

export default function ContactUs() {
    return(
        <section className="my-10 md:mx-12 mx-auto px-8">
            <RevealList interval={80} delay={500}>

            
            <div className="rounded bg-eestec md:px-12 py-6 px-8">
                <h3 className="md:text-5xl lg:flex justify-center text-4xl font-semibold my-12 text-balance text-white">Contact Us</h3>
                <p className="md:text-3xl lg:flex justify-center text-2xl font-semibold my-3 text-balance text-white">Want to get in touch with us?</p>
                <div
                    className="md:text-3xl my-6 flex justify-center items-center gap-3 text-white "
                    >
                    <span className="rounded-full border px-7 py-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)"}}>ssa-board@eestec.net</span>
                </div>
                <div className="lg:flex justify-evenly items-center gap-14">
                    <div className="text-eestec text-center items-center" >
                        <Image src={img1} alt="Sponsor Logo" height={350} style={{ borderRadius: "50%", border: "5px solid white" }} className="mt-8 mb-8"></Image>
                        <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-white font-bold">Kostis Ntozis</span></h1>
                        <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-white font-bold">Board Assistant</span></h1>
                    </div>
                    
                    <div className="text-eestec text-center items-center" >
                        <Image src={img2} alt="Sponsor Logo" height={350} style={{ borderRadius: "50%", border: "5px solid white" }} className="mt-8 mb-8"></Image>
                        <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-white font-bold">Anthi Gavriilidou </span></h1>
                        <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-white font-bold">Board Assistant</span></h1>
                    </div>
                </div>
            </div>
            </RevealList>
        </section>
    );
}
"use client";

import { MdElectricBolt } from "react-icons/md";
import SecondaryButton from "./SecondaryButton";

import Image from "next/image";
import img1 from "@/app/resources/organizators/Kostis_NTozis.jpg";
import img2 from "@/app/resources/organizators/Anthi_Gavriilidou.jpg";
import { RevealList } from  'next-reveal'
import IconComponent from "./Icon";
import BoardImage from "./BoardImage";
import { FiMail } from "react-icons/fi";

export default function ContactUs() {
    return(
        <section className="my-10 md:mx-12 mx-auto px-8">
            <RevealList interval={80} delay={500}>

            
            <div className="rounded md:px-12 bg-eestec py-6 px-8" style={{ borderRadius: "3.5rem", backgroundImage: "linear-gradient(180deg, #582050 40%, rgba(125, 61, 115, 0.7) 100%)" }}>
                <h3 className="md:text-5xl lg:flex justify-center text-center text-4xl font-semibold my-12 text-balance text-white">Contact Us</h3>
                <p className="md:text-3xl lg:flex justify-center text-center text-2xl font-semibold my-3 text-balance text-white">Want to get in touch with us? </p> 
                
                <div className="md:text-3xl my-6 flex justify-center items-center gap-3 text-white ">
                    <span className="rounded-full border px-7 py-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)"}}>ssa-board@eestec.net</span>
                </div>

                <div className="lg:flex justify-evenly items-center gap-14">
                
                    <BoardImage sourceImage={img1} nameSurname={"Kostis Ntozis"} position={"Board Assistant"}></BoardImage>
                    <BoardImage sourceImage={img2} nameSurname={"Anthi Gavriilidou"} position={"Board Assistant"}></BoardImage>
                    
                    
                </div>
            </div>
            </RevealList>
        </section>
    );
}
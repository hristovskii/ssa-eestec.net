"use client";

import { IconType } from "react-icons";
import IconComponent from "./Icon";
import { StaticImageData } from "next/image";

import Image from "next/image";

interface CityImageProps {
    sourceImage: StaticImageData;
    nameSurname: string;
    position: string;
}

export default function BoardImage({ sourceImage, nameSurname, position }: CityImageProps) {
    return( 
        <div className="text-eestec text-center items-center rounded border px-7 py-2 my-5" style={{ borderRadius: "2rem", backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
            <Image src={sourceImage} alt="Sponsor Logo" height={350} style={{ borderRadius: "10%", border: "5px solid white" }} className="mt-8 mb-8"></Image>
            <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-white font-bold">{nameSurname}</span></h1>
            <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-white font-bold">{position}</span></h1>
        </div>
    )
}
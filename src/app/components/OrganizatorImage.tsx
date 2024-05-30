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

export default function OriganizatorImage({ sourceImage, nameSurname, position }: CityImageProps) {
    return( 
        <div className="text-eestec text-center items-center" >
            <Image src={sourceImage.src} alt="Sponsor Logo" height={300} width={300} style={{ borderRadius: "50%", border: "5px solid #6F2864" }} className="mt-8 mb-8"></Image>
            <h1 className="md:text-3xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">{nameSurname}</span></h1>
            <h1 className="md:text-2xl text-4xl font-semibold my-3 text-center text-white"> <span className="text-eestec font-bold">{position}</span></h1>
        </div>
    )
}
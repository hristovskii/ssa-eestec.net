"use client";

import { IconType } from "react-icons";
import IconComponent from "./Icon";
import { StaticImageData } from "next/image";

import Image from "next/image";

interface CityImageProps {
    sourceImage: StaticImageData;
}

export default function CityImage({ sourceImage }: CityImageProps) {
    return( 
        <Image src={sourceImage.src} alt="Sponsor Logo" height={450} width={450} style={{border: "5px solid #6F2864", borderRadius: "2rem"}} className="mt-8 mb-8 zoom" />
    )
}
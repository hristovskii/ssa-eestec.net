"use client";

import Link from "next/link";
import EA from "@/app/resources/logo/ssa-logo.jpeg";
import EESTEC from "@/app/resources/logo/Logo_eestec.png";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white px-12 w-full">
            <nav className="flex md:justify-between  items-center justify-center">
                <Link href={"/"}>
                    <Image src={EESTEC} alt="EESTEC Logo" width={100} height={100} className="py-3 mx-10"/>
                </Link>
                <Link href={"/"}>
                <Image src={EA} alt="EA Logo" width={100} height={100} className="py-3 mx-10"/>
                </Link>
         
                <h3 className="max-md:hidden font-eestec text-eestec text-3xl font-semibold pt-2">Soft Skills Academy</h3>
            </nav>
        </header>
    );
}
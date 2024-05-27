"use client";

// import background from "@/app/resources/"
import { FaInstagram, FaLinkedin, FaPeopleRobbery, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import IconComponent from "./Icon";


export default function Footer() {
    return(
        <header className="bg-white px-12 w-full content-center"  style={{
            // backgroundImage: `url(${background.src})`,
            backgroundColor: "rgba(111, 40, 100, 1)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "auto",
          }}>
            <nav className="flex md:justify-between items-center justify-center">
                
                <div className="md:flex justify-center items-center gap-20">
                    
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                    <IconComponent icon={FaInstagram} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"Instagram"}</h3>
                </article>
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                    <IconComponent icon={FaSquareFacebook} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"Facebook"}</h3>
                </article>
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                    <IconComponent icon={FaXTwitter} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"Twitter"}</h3>
                </article>
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                    <IconComponent icon={FaLinkedin} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"LinkedIn"}</h3>
                </article>
                </div>
            
                <h3 className="max-md:hidden font-eestec text-white text-3xl font-semibold pt-2 ">Power Your Future</h3>
            </nav>
            <div className="content-end">
            <h1 className="lg:flex justify-center text-white text-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
                © 2024 EESTEC International
                </h1>
            </div>
        </header>
    );
}
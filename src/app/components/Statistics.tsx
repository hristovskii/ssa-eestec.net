"use client";

import {CountUp} from "countup.js";
import Numbers from "./Numbers";
import { RevealList } from  'next-reveal'
import { useEffect } from "react";

export default function Statistics() {
    useEffect(() => {
        const options = {
              duration: 5,
            };
        const count1 = new CountUp('20', 20, options);
        const count2 = new CountUp('5', 5, options);
        const count3 = new CountUp('10', 10, options);
     
            count1.start();
            count2.start();
            count3.start();
    }, []);
    return(
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={500}>
            <div className="lg:flex justify-evenly items-center gap-24">
                <article className="grid px-1 justify-center my-16">
                    <h3 className="text-center text-8xl text-eestec font-black" id="20"></h3>
                    <p className="text-center text-base font-medium text-neutral-700">participants</p>
                </article>
                <article className="grid px-1 justify-center my-16">
                    <h3 className="text-center text-8xl text-eestec font-black" id="5"></h3>
                    <p className="text-center text-base font-medium text-neutral-700">Trainers</p>
                </article>
                <article className="grid px-1 justify-center my-16">
                    <h3 className="text-center text-8xl text-eestec font-black" id="10"></h3>
                    <p className="text-center text-base font-medium text-neutral-700">Successful Events</p>
                </article>
            </div>
            </RevealList>
        </section>
    );
}
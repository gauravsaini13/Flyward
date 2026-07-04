
import React, { useState } from 'react';



// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        name: "AMIR ELAYYAN",
        role: "GREAT EXPERIENCE!",
        text: (<>
            Planning a holiday to Madagascar was something I always thought <br />
            would be a logistical nightmare, until I called Flyward. They handled<br />
            everything: research, planning, bookings, even payments, then<br />
            simply sent me the final itinerary and invoice. I was speechless. It<br />
            felt like a close family member had taken care of it all, anticipating <br />
            every detail before I even asked. This is more than service, it’s trust<br />
            and warmth, wrapped into one incredible team.
        </>),
        image: "/flyward/28.jpeg"
    },
    {
        id: 2,
        name: "Kenneth Mackinnon",
        role: "Top Notch!",
        text: (<>
            I originally thought using an agent would be more expensive, but <br />
            Flyward actually saved me money. Their relationships with airlines<br />
            and hotels meant I got a what I wanted for a better price. They are<br />
            masters at optimizing a budget.
        </>),
        image: "/flyward/27.jpeg"
    }
];


export default function Experience() {




    useGSAP(() => {

        const ttl = gsap.timeline({
            scrollTrigger: {
                trigger: ".Experience",
                start: "top 0%",
                end: "top 0%",
                toggleActions: "play none none none",
                scrub: 2,



            }
        });


        ttl.fromTo(".Experience", {
            y: 0,

        }, {
            y: -480,

        })



    })







    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="relative font-['Apris','Times_New_Roman',sans-serif] ">

            {/* page1 */}
            <div className="relative top-90 lg:-top-30">
                <img src="/flyward/14.avif" className='object-cover h-350 w-full' />
                {/* 1 */}
                <div className=" Experience absolute inset-0 top-70 text-center text-[43px] lg:text-[60px] leading-[50px]">
                    <h1>EXPERIENCE YOU</h1>
                    <h1>CAN RELY ON </h1>
                </div>

                {/* 2 */}
                <div className="Experience absolute top-120 left-30 text-center   lg:flex gap-20">
                    <div>
                        <p className="tracking-[1.5px]"  >REPEAT BOOKINGS</p>
                        <h1 className=" text-[10vh] lg:text-[15vh]" >94%</h1>
                        <p className=" text-3xl ">✶</p>
                    </div>
                    <div className='mt-10 lg:mt-0 '    >
                        <p className="tracking-[1.5px] hidden lg:block">NET PROMOTOR SCORE</p>
                        <p className="tracking-[1.5px]  lg:hidden block ">NET PROMOTOR <br /> SCORE</p>
                        <h1 className="text-[10vh] lg:text-[15vh] " >89%</h1>
                        <p className="text-3xl ">✶</p>
                    </div>
                    <div className='mt-10 lg:mt-0 ' >
                        <p className="tracking-[1.5px] hidden lg:block">AVERAGE AGENT EXPERIENCE</p>
                        <p className="tracking-[1.5px] lg:hidden block ">AVERAGE AGENT <br />EXPERIENCE</p>
                        <h1 className="text-[10vh] lg:text-[15vh]" >5</h1>
                        <p className="text-2xl ">YEARS</p>
                    </div>
                    <div className='mt-10 lg:mt-0 ' >
                        <p className="tracking-[1.5px]">TRAVEL AGENTS</p>
                        <h1 className="text-[10vh] lg:text-[15vh]" >25+</h1>
                        <p className="text-3xl ">✶</p>
                    </div>
                </div>




                {/* 3 */}

                <div className="Experience absolute top-170 left-30 inset-0  text-center   hidden lg:block ">
                    <div className="mr-30 mb-10">
                        <p>✶</p>
                        <h1 className="tracking-[4px]">PARTNERS</h1>
                    </div>

                    <div className="flex gap-15">
                        <img src="/flyward/15.png" className="w-40" />
                        <img src="/flyward/16.png" className="w-40" />
                        <img src="/flyward/17.png" className="w-40" />
                        <img src="/flyward/18.png" className="w-40" />
                        <img src="/flyward/19.png" className="w-40" />
                    </div>

                    <div className="flex gap-15">
                        <img src="/flyward/20.png" className="w-40" />
                        <img src="/flyward/21.png" className="w-40" />
                        <img src="/flyward/22.png" className="w-40" />
                        <img src="/flyward/23.png" className="w-40" />
                        <img src="/flyward/24.png" className="w-40" />
                    </div>
                </div>
                <img src="/flyward/25.avif" className="absolute top-0 object-cover h-350 w-full" />
            </div>



            {/* page2 */}
            <section className=" relative top-0">
                <img src="/flyward/26.avif" className='w-full  h-350 object-cover lg:h-300' />
                <div className=" absolute top-50 lg:inset-[52vh_] text-center leading-[45px]">
                    <h1 className="text-[50px]">TRUSTED BY TRAVELERS  </h1>
                    <h1 className="text-[50px]">WHO RETURN</h1>
                </div>

                <section className='absolute  w-full top-100 lg:top-120 '>
                    <div className="flex flex-col items-center text-center ">
                        {/* Background Image/Overlay as seen in 1000077339.jpg */}
                        <div className="max-w-2xl transition-opacity duration-500">
                            <img
                                src={testimonials[index].image}
                                className="w-40 h-40 mx-auto mb-4 object-cover"
                                alt="profile"
                            />
                            <h3 className="text-[30px] font-serif tracking-widest uppercase">{testimonials[index].name}</h3>
                            <p className="text-[15px] text-gray-500 my-4 tracking-[2px] uppercase">{testimonials[index].role}</p>
                            <p className="text-[22px] ">{testimonials[index].text}</p>
                        </div>

                        {/* Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-10 lg:left-60  top-200 lg:top-60 -translate-y-1/2 p-4 pl-5 pr-5  lg:p-1  lg:pl-2 lg:pr-2 border border-black rounded-full bg-black lg:hover:bg-black hover:text-white transition"
                        >
                            ←
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute  right-10 lg:right-60  top-200 lg:top-60 -translate-y-1/2  p-4 pl-5 pr-5     lg:p-1  lg:pl-2 lg:pr-2 border border-black rounded-full bg-black lg:hover:bg-black hover:text-white transition"
                        >
                            →
                        </button>
                    </div>


                </section>
                <img src="/flyward/29.avif" className="absolute bottom-0   " />

            </section>



        </section>
    )
}
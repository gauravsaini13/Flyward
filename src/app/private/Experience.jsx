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
        image: "/private/11.jpeg"
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
        image: "/private/12.jpeg"
    }
];



export default function Experience() {

    useGSAP(() => {
        const ttl = gsap.timeline({
            scrollTrigger: {
                trigger: ".Experiences",
                start: "top 10%",
                end: "top 0%",              
                scrub: 3,




            }
        });

        ttl.fromTo(".Experience", {
            y: 0,

        }, {
            y: -450,

        })



    })


    const [index, setIndex] = useState(0);
    const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);


    return (
        <section className=" Experiences  relative w-full  font-['Apris','Times_New_Roman',sans-serif] overflow-hidden ">
            {/* section 1 */}
            <img src="/private/8.avif" className="w-full  h-screen lg:h-200 " />

            <section className="Experience absolute top-45 inset-0 lg:inset-[355px_]  ">
                <div className=" text-center  text-[35px] lg:text-[50px] leading-[40px]  lg:leading-[50px]">
                    <h1>EXPERIENCE YOU CAN</h1>
                    <h1>TRUST FOR EVERY</h1>
                    <h1>JOURNEY</h1>
                </div>
            </section>

            <section className="Experience absolute top-80 lg:top-150 lg:left-30 ">
                <div className=" flex  lg:gap-15 text-center">
                    <div className='lg:flex gap-25 ml-5 lg:ml-0'>
                        <div>
                            <p className="  tracking-[1.5px]"  >REPEAT BOOKINGS</p>
                            <h1 className="  text-[10vh] lg:text-[15vh]" >94%</h1>
                            <p className="text-3xl ">✶</p>
                        </div>

                        <div>
                            <p className="tracking-[1.5px]">NET PROMOTOR SCORE</p>
                            <h1 className=" text-[10vh]   lg:text-[15vh] " >89%</h1>
                            <p className="text-3xl ">✶</p>
                        </div>
                    </div>

                    <div className='lg:flex gap-5'>
                        <div>
                            <p className="tracking-[1.5px]">AVERAGE AGENT EXPERIENCE</p>
                            <h1 className=" text-[10vh]   lg:text-[15vh] " >5</h1>
                            <p className="text-2xl ">YEARS</p>
                        </div>

                        <div className='mt-6 lg:mt-0'>
                            <p className="tracking-[1.5px]">TRAVEL AGENTS</p>
                            <h1 className=" text-[10vh]   lg:text-[15vh]" >25+</h1>
                            <p className="text-3xl ">✶</p>
                        </div>
                    </div>

                </div>
            </section>
            <img src="/private/9.avif" className="absolute top-0   w-full  h-screen lg:h-200" />




            {/* section 2 */}

            <section className=" relative top-0">
                <img src="/private/10.avif" className='w-full  h-350 object-cover lg:h-300' />

                <div className=" absolute top-50 lg:inset-[52vh_] text-center leading-[45px]">
                    <h1 className="text-[50px]">STORIES OF EXCEPTIONAL </h1>
                    <h1 className="text-[50px]">JOURNEYS</h1>
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
                <img src="/private/16.avif" className='absolute bottom-0' />
            </section>

        </section>
    )
}





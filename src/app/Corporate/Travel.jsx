import React, { useState } from 'react';



// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Travel() {

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
            image: "/Corporate/18.jpeg"
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
            image: "/Corporate/17.jpeg"
        }
    ];

    const [index, setIndex] = useState(0);
    const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);


    useGSAP(() => {
        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".Travels",
                start: "top 5%",
                end: "top 0%",
                toggleActions: "play none none none",
                scrub: 2,
            }
        });


        t2.fromTo(".Travel ", {
        }, {
            y: -500,
            duration: 9,
        })
    })





    return (
        <section className=" relative w-full  font-['Apris','Times_New_Roman',sans-serif]  ">
            {/* section 1 */}
            <section className="relative top-0 ">
                <img src="/Corporate/4.avif" className='object-cover h-355 lg:h-250 w-full' />

                {/* 1 */}
                <section className="Travel  Travels absolute top-60 lg:inset-[45vh]">
                    <div className="text-center text-[50px] lg:text-[60px] leading-[50px]">
                        <h1>CORPORATE TRAVEL</h1>
                        <h1>YOU CAN RELY ON </h1>
                    </div>
                </section>

                {/* 2 */}
                <section className=" Travel absolute top-130 lg:top-110 lg:left-30 ">
                    <div className=" lg:flex gap-20 text-center ml-25  lg:ml-0 ">

                        <div className='pb-10 lg:pb-0 '>
                            <p className="tracking-[1.5px]"  >REPEAT BOOKINGS</p>
                            <h1 className=" text-[10vh] lg:text-[15vh] " >94%</h1>
                            <p className="text-3xl ">✶</p>
                        </div>
                        <div className='pb-10 lg:pb-0' >
                            <p className="tracking-[1.5px]">NET PROMOTOR SCORE</p>
                            <h1 className="text-[10vh] lg:text-[15vh]  pl-5" >89%</h1>
                            <p className="text-3xl ">✶</p>
                        </div>
                        <div className='pb-10 lg:pb-0'>
                            <p className=" tracking-[1px] hidden lg:block">AVERAGE AGENT EXPERIENCE</p>
                            <p className=" tracking-[3px] lg:hidden block">AVERAGE <br /> AGENT <br />EXPERIENCE</p>
                            <h1 className=" text-[10vh] lg:text-[15vh] " >5</h1>
                            <p className="text-2xl ">YEARS</p>
                        </div>
                        <div className='pb-10 lg:pb-0'>
                            <p className="tracking-[1.5px]">TRAVEL AGENTS</p>
                            <h1 className=" text-[10vh] lg:text-[15vh] " >25+</h1>
                            <p className="text-3xl ">✶</p>
                        </div>
                    </div>
                </section>

                {/* 3 */}
                <section className="Travel absolute top-160 left-30 hidden lg:block ">
                    <div className=" lg:flex flex-col text-center   ">
                        <div>
                            <p>✶</p>
                            <h1 className="tracking-[4px] pb-5">PARTNERS</h1>
                        </div>

                        <div className="lg:flex gap-3 ">
                            <img src="/Corporate/5.svg" className="w-40" />
                            <img src="/Corporate/6.svg" className="w-40" />
                            <img src="/Corporate/7.svg" className="w-40" />
                            <img src="/Corporate/8.svg" className="w-40" />
                            <img src="/Corporate/9.svg" className="w-40" />
                            <img src="/Corporate/10.svg" className="w-40" />
                        </div>

                        <div className="lg:flex gap-32">
                            <img src="/Corporate/11.svg" className="w-40" />
                            <img src="/Corporate/12.svg" className="w-40" />
                            <img src="/Corporate/13.svg" className="w-40" />
                            <img src="/Corporate/14.svg" className="w-40" />
                        </div>
                    </div>
                </section>
                <img src="/Corporate/15.avif" className="absolute top-0  object-cover h-355 lg:h-250 w-full" />
            </section>




            {/* section 2 */}
            <section className="relative top-0">
                <img src="/Corporate/16.avif" className='w-full  h-350 object-cover lg:h-300' />
                {/* 1 */}
                <section className=" absolute w-full top-60 lg:top-80 ">
                    <div className=" text-center leading-[45px]">
                        <h1 className="text-[50px]">CORPORATE CLIENTS  </h1>
                        <h1 className="text-[50px]">THEIR EXPERIENCES</h1>
                    </div>
                </section>
                {/* 2 */}
                <section className='absolute  w-full top-120 lg:top-120 '>
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

                <img src="/private/16.avif" className="absolute bottom-0" />
            </section>



        </section>

    )

}
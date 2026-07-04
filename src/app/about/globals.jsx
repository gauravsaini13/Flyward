"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Global() {



    useGSAP(() => {

        const time = gsap.timeline({
            scrollTrigger: {
                trigger: ".G",
                start: "top 0%",
                end: "top 0%",
                toggleActions: "play none none none",
                scrub: 3,



            }
        });

        time.fromTo(".Global", {
            y: 0,


        },
            {
                y: -450,

            })


    })



    const [open, setOpen] = useState(0)

    const faqs = [
        {
            question: "What makes Flyward different from other travel agencies?",
            answer:
                "Flyward goes beyond basic bookings, we offer personalized travel management backed by superior customer care, proactive support, and a true human touch. As a family-run business, we treat every client like one of our own, ensuring their journey is smooth, stress-free, and memorable from start to finish.",
        },

        {
            question: "Do you offer 24/7 support while I'm traveling?",
            answer:
                "Yes. Our team is available around the clock to assist you at any point in your journey. Whether it's a last-minute change, flight delay, or urgent need, we're just a message, call, or email away- anywhere in the world.",
        },

        {
            question: "Can you help with visas and travel documentation?",
            answer:
                "Absolutely. We offer full visa assistance, including document preparation, appointment scheduling, and application tracking. We also guide you on passport requirements, travel insurance, and any entry regulations relevant to your destination.",
        },

        {
            question: "Do you manage corporate and business travel?",
            answer:
                "Yes. Flyward specializes in tailored corporate travel solutions, including executive-level planning, policy management, cost optimization, and 24/7 support for traveling employees. We also provide detailed reporting and spend analysis for businesses.",
        },

        {
            question: "Are your services only for luxury or frequent travelers?",
            answer: "Not at all. While we're trusted by frequent flyers and premium clients, our services are built around personalization, not price point. Whether it's your first trip or your fiftieth, we create an experience that fits your needs, comfort, and budget.",
        },

        {
            question: "Can you help design custom travel experiences?",
            answer: "Yes! We love creating unique, curated itineraries, from romantic escapes and family holidays to adventure travel and cultural explorations. Just tell us what you're looking for, and we'll handle the rest, every detail, every reservation, every special touch.",
        },

        {
            question: "Do you charge service or consultation fees?",
            answer: "Our pricing is fully transparent. In most cases, our agent fees are included in the booking. If any additional fees apply, for example, for complex visa processing or luxury concierge arrangements, we'll let you know upfront with no surprises.",
        },
        {
            question: "What happens if my plans change after booking?",
            answer: "We understand that plans can shift. Our team will handle changes, cancellations, and rebookings on your behalf, negotiating with suppliers where needed to minimize any penalties or delays. Our goal is always to make adjustments as smooth and cost-effective as possible.",
        },
        {
            question: "How do I get started with Flyward?",
            answer: "Simply reach out to us through phone, email, or chat (use the icon at the bottom left side of the website). One of our experienced travel advisors will connect with you to understand your needs, answer any questions, and begin crafting your perfect trip.",
        },
    ]

    return (
        <section className="G relative w-full top-20 font-['Apris','Times_New_Roman',sans-serif] overfall-hindeen text-white  ">

            <img src="/abimg/27.avif" className="w-full h-250  lg:h-full object-cover  " />
            <h1 className="Global absolute top-30 md:left-10 lg:left-95 text-start text-4xl md:text-7xl lg:text-7xl leading-none px-5">GLOBAL<br /> PARTNERSHIPS</h1>


            {/* section 1 */}
            <section className="Global absolute top-50 md:top-70 lg:top-70 overflow-hidden">
                <div className='lg:flex md:flex '>
                    <h1 className="text-end  text-4xl md:text-5xl  lg:text-7xl leading-none lg:px-13 px-5 py-3">THAT POWER<br/> EVERY JOURNEY</h1>
                    <div className="px-5 " >

                        <p className="text-xs">Our global reach is anchored by a curated network of the <br />
                            world’s most prestigious and reliable travel suppliers. By <br />
                            aligning with industry leaders across aviation, luxury hospitality,<br />
                            and global logistics, Flyward ensures that every journey is<br />
                            backed by unparalleled stability and elite service standards.
                        </p>

                        <p className="py-2 text-xs ">
                            These partnerships are the foundation of our promise todeliver <br />
                            seamless, world-class experiences to our individual and <br />
                            corporate clients alike.
                        </p>
                    </div>
                </div>
            </section>

            {/* section 2*/}
            <section className="Global  absolute top-130 w-full  grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 justify-items-center   overfall-hindeen ">
                <div className=" flex flex-col gap-5 lg:flex lg:flex-row">
                    <img src="/abimg/28.png" className="h-15 lg:h-20" />
                    <img src="/abimg/29.png" className="h-15 lg:h-20" />
                    <img src="/abimg/30.png" className="h-15 lg:h-20" />
                    <img src="/abimg/31.png" className="h-15 lg:h-20" />
                    <img src="/abimg/32.png" className="h-15 lg:h-20" />
                </div>

                <div className=" flex flex-col gap-5 lg:flex lg:flex-row ">
                    <img src="/abimg/33.png" className="h-15 lg:h-20" />
                    <img src="/abimg/34.png" className="h-15 lg:h-20" />
                    <img src="/abimg/35.png" className="h-15 lg:h-20" />
                    <img src="/abimg/36.png" className="h-15 lg:h-20" />
                    <img src="/abimg/37.png" className="h-15 lg:h-20" />


                </div>
            </section>
            <img src="/abimg/38.avif" className="absolute bottom-0 w-full h-250  lg:h-full object-cover   " />

            {/* section 3 */}
            
          


        </section>
    )
}



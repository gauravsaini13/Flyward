import Footer from "/src/components/Footer.jsx"

// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ROle() {


    useGSAP(() => {

        const TL = gsap.timeline({
            scrollTrigger: {
                trigger: ".footers",
                start: "top 40%",
                end: "top 40%",
                toggleActions: "play none none none",
                scrub: 1,


            }
        });

        TL.fromTo(".footer", {


        }, {
            border: "35px solid white",
            duration: 0.10
        })


    })

    return (
        <section className="relative top-0  overflow-hidden font-['Apris','Times_New_Roman',sans-serif]">
            {/* section 1 */}
            <section className="relative  top-0 h-720 lg:h-240">
                <img src="/Corporate/1f.avif" className="absolute -top-6 lg:-top-21" />
                <h1 className=" absolute top-25 w-full text-center text-[50px] ">OPEN ROLES</h1>
                <img src="/Careers/6.svg" className=" object-cover h-screen" />

                {/* box 1 */}
                <section className="absolute top-60 lg:left-20 ">
                    <div className=" lg:flex gap-5 ">
                        {/* box1 */}
                        <div className="bg-[#F2EFEB]  w-78 lg:w-90   lg:h-80 p-5 pb-8 ml-10 mb-5 lg:ml-0 lg:mb-0 ">
                            <h1 className="text-[25px]  leading-[25px] ">B2B SALES MANAGERS -<br />TRAVEL SERVICES</h1>
                            <p className="text-[15px] leading-[18px] text-black/50  mt-8 mb-13"> We are looking for a strategic B2B Sales Managers<br />
                                to expand our corporate and agency client base.<br />
                                You will develop customized pricing models, <br />
                                manage credit lines, and create targeted sales <br />
                                strategies to drive revenue and long-term<br />
                                partnerships
                            </p>
                            <p className="text-black/50 ">FULL-TIME,DUBAI & BEIRUT</p>

                        </div>

                        {/* 2 */}
                        <div className="bg-[#F2EFEB] w-78 lg:w-90   lg:h-80 p-5 pb-8 ml-10 mb-5 lg:ml-0 lg:mb-0  ">
                            <h1 className="text-[25px]  leading-[25px] ">CORPORATE TRAVEL <br /> MANAGER</h1>
                            <p className="text-[15px] leading-[18px] text-black/50  mt-8 mb-23">
                                Seeking an experienced Corporate Travel Manager<br />
                                to oversee business travel accounts, optimize<br />
                                budgets, and ensure seamless travel experiences <br />
                                for executive clients
                            </p>
                            <p className="text-black/50 ">FULL-TIME,DUBAI</p>

                        </div>


                        {/* 3 */}
                        <div className="bg-[#F2EFEB]  w-78 lg:w-90   lg:h-80 p-5 pb-8 ml-10 mb-5 lg:ml-0 lg:mb-0">
                            <h1 className="text-[25px]  leading-[25px] ">TRAVEL ADVISOR</h1>
                            <p className="text-[15px] leading-[18px]  text-black/50  mt-8 mb-20">
                                We are looking for a dynamic Travel Advisor to <br />
                                craft customized itineraries, manage complex<br />
                                bookings, and deliver exceptional service to our <br />
                                clients. You'll work closely with families, corporate<br />
                                travelers, and luxury explorers to bring,<br />
                                unforgettable journeys to life
                            </p>
                            <p className="text-black/50 ">FULL-TIME,DUBAI</p>
                        </div>
                    </div>
                </section>



                {/*box2*/}
                <section className="absolute mt-180 lg:mt-0  lg:top-145 lg:left-20 ">
                    <div className=" lg:flex gap-5 ">
                        {/* 1 */}
                        <div className="bg-[#F2EFEB]  w-78 lg:w-90   lg:h-80 p-5 pb-8 ml-10 mb-5 lg:ml-0 lg:mb-0 ">
                            <h1 className="text-[25px]  leading-[25px] ">OPERATIONS & AFTER- <br />SALES COORDINATORS</h1>
                            <p className="text-[15px] leading-[18px] text-black/50  mt-8 mb-15">
                                We are hiring a detail-oriented Operations<br />
                                Coordinator to manage bookings, monitor <br />
                                itineraries, and deliver post-travel care to ensure <br />
                                client journeys are smooth from beginning to end
                            </p>
                            <p className="text-black/50 ">FULL-TIME,DUBAI & BEIRUT</p>

                        </div>

                        {/* 2 */}
                        <div className="bg-[#F2EFEB]  w-78 lg:w-90   lg:h-80 p-5 pb-8 ml-10 mb-5 lg:ml-0 lg:mb-0 ">
                            <h1 className="text-[25px]  leading-[25px] ">TICKETING &<br />RESERVATIONS SPECIALIST</h1>
                            <p className="text-[15px] leading-[18px] text-black/50  mt-2 mb-7">
                                We are seeking a skilled Ticketing & Reservations<br />
                                Specialist to handle flight bookings, ticket <br />
                                issuance, fare audits, and modifications through <br />
                                leading GDS systems like Sabre, Travelport, and <br />
                                Amadeus. You'll play a vital role in ensuring<br />
                                smooth, efficient, and accurate service delivery
                            </p>
                            <p className="text-black/50 ">FULL-TIME,DUBAI & BEIRUT</p>

                        </div>


                        {/* 3 */}
                        <div className="bg-[#F2EFEB]  w-78 lg:w-90   lg:h-80 p-5 pb-8 ml-10 mb-5 lg:ml-0 lg:mb-0  ">
                            <h1 className="text-[25px]  leading-[25px] ">TRAVEL API INTEGRATION<br /> SPECIALIST</h1>
                            <p className="text-[15px] leading-[18px] text-black/50  mt-8 mb-7">
                                Flyward is looking for a Travel API Integration<br />
                                Specialist who will be responsible for connecting, <br />
                                integrating, and optimizing third-party travel APIs<br />
                                for flight, hotel, and car rental systems into our<br />
                                platforms. You will work closely with tech partners <br />
                                to streamline our booking ecosystem
                            </p>
                            <p className="text-black/50 ">FULL-TIME,DUBAI</p>

                        </div>
                    </div>
                </section>
            </section>



            {/* section 2 */}
            <section className="relative top-0  text-white overflow-hidden ">
                <img src="/Careers/7.avif" className="hidden lg:block" />
                <img src="/Careers/8.avif " className="  absolute bottom-0" />
                <img src="/Careers/7.avif"  className="lg:hidden block h-330 object-cover"/>
                <section className="absolute inset-0 top-50 lg:top-100">
                    <div className="  text-center leading-[60px]">
                        <h1 className="text-[50px] lg:text-[70px]"> LET'S MAKE YOUR </h1>
                        <h1 className="text-[50px]  lg:text-[70px]">NEXT JOURNEY</h1>
                        <h1 className="text-[50px] lg:text-[70px] mb-10"> UNFORGETTABLE</h1>
                        <a className=" lg:-ml-10 rounded-full text-black bg-white p-3 pl-5 pr-5 mt-6 text-[12px] tracking-[2px]">SHALL WE BEGIN?</a>
                    </div>

                </section>

                <section className="absolute bottom-0">
                    <div className="footer footers   ">

                        <Footer />
                    </div>

                </section>




            </section>




        </section>
    )
}
// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Second() {


    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".suitedss",
                start: "top 40%",
                end: "top 30%",
                scrub: 1,
                // markers: true,


            }
        });
        timeline.from(".Suited", {
            opacity: 0,
        })




        const time = gsap.timeline({
            scrollTrigger: {
                trigger: ".cards",
                start: "top 30%",
                end: "top 20%",
                scrub: 1,



            }
        });
        time.from(".card", {
            y: 50,
            opacity: 0,
            stagger: 1.5,

        })


    })
    return (
        <section className="relative w-full overflow-hidden font-['Apris','Times_New_Roman',sans-serif]">

            {/* section 1 */}
            <section className="relative top-0 w-full overflow-hidden ">
                <img src="/private/1.avif" className="w-full h-screen  object-cover  scale-100 " />
                <img src="/private/15.avif" className="absolute bottom-0" />

                {/* grid line */}
                <div className=" absolute inset-[50px_10px_10px_10px_] lg:inset-[40px_50px_80px_50px]  grid grid-cols-4 grid-rows-2 ">
                    <div className="border border-black/20 "></div>
                    <div className="border border-black/20 "></div>
                    <div className="border border-black/20 "></div>
                    <div className="border border-black/20 "></div>
                    <div className="border border-black/20 "></div>
                    <div className="border border-black/20 "></div>
                    <div className="border border-black/20 "></div>
                    <div className="border border-black/20 "></div>
                </div>

                <section className='absolute top-20 w-full justify-items-center '>
                    <div className=" flex flex-col gap-[40px] items-center ">
                        <div className=" text-center px-5">
                            <h1 className="text-3xl md:text-6xl ">CURATED JOURNEYS,CRAFTED JUST FOR YOU</h1>
                            <div className="text-xs md:text-2xl py-6">
                                <p>Every detail of your journey, meticulously planned.</p>
                                <p>Tailored for solo travelers, families, and luxury seekers</p>
                                <p>focusing on personalization and seamless experiences.</p>
                            </div>

                        </div>

                    </div>

                </section>

            </section>

            {/* section 2*/}
            <section className="relative top-0  overflow-hidden ">
                <img src="/private/2.svg " className=" w-full  h-270 md:h-170  lg:h-full  object-cover  scale-100" />

                {/* grid line */}
                <div className=" absolute  top-14 lg:top-0 inset-0 lg:inset-[40px_35px_50px_50px] grid grid-cols-4 grid-rows-2 " >
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                </div>

                {/* text */}
                <section className='absolute top-30   '>
                    <div className=" flex flex-col items-center gap-13">
                        <div className="  text-center">
                            <h1 className="text-4xl md:text-6xl lg:text-8xl">HOW WE MAKE YOUR TRAVEL SEAMLESS</h1>

                        </div>

                        <div className="md:flex lg:flex  gap-12 ">
                            <img src="/private/3.avif" className="md:w-[270px]  lg:w-[48vh] px-5 " />

                            <div className="py-5 px-5" >

                                <h1 className="text-3xl leading-none ">BESPOKE<br />TRIP PLANNING</h1>
                                <p className="py-3 "><b>Personalized itineraries. </b>Custom-<br />
                                    crafted journeys based on interests and <br />
                                    pacing.
                                </p>

                                <p ><b>Thematic tours</b>.<br />
                                    Cultural, historical, and luxury cruiseor<br />
                                    train journeys.
                                </p>
                            </div>

                            <div className="md:mt-28 lg:mt-19 px-5" >
                                <p className="py-3" >
                                    <b>Specialized vacations.</b> Familyholidays,<br />
                                    romantic honeymoons, and wellness <br />
                                    retreats.
                                </p>
                                <p ><b>Destination insights.</b><br />
                                    Recommendations on local etiquette and<br />
                                    hidden gems.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>




            {/* section 3*/}
            <section className="suitedss relative top-0 h-500 md:h-250 lg:h-170 ">
                <img src="/private/4.svg" className='w-full object-cover scale-100 h-screen' />
                <h1 className="Suited absolute top-27 w-full text-center text-[55px] leading-[50px] "> PERFECTLY <br />SUITED FOR </h1>


                {/* grid line */}
                <div className=" absolute inset-0  grid grid-cols-4 grid-rows-2  mt-[94px] ml-[45px] mr-[40px] mb-[84px]" >
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                </div>


                <scetion className=" cards absolute top-70 inset-0 lg:inset-[180px_0px_0px_100px_] ">

                    <div className=" md:flex lg:flex lg:gap-43 md:gap-5 ">

                        <div className="card" >
                            <img src="/private/5.avif" className=" w-[260px] ml-5 lg:ml-0 lg:w-[170px] lg:h-50 " />
                            <h1 className=" ml-5 lg:ml-0 mt-6 mb-5 text-[30px] lg;text-[2vw] leading-none "> EXECUTIVES <br />& FOUNDERS</h1>
                            <p className=" leading-[20px] ml-5 lg:ml-0 ">
                                Rapid-response bookings for leaders who <br /> need to move at the speed of business.
                            </p>
                        </div>

                        <div className="card mt-30">
                            <img src="/private/6.avif" className=" w-[260px] ml-5 lg:ml-0 lg:w-[170px] lg:h-50" />
                            <h1 className=" ml-5 lg:ml-0 mt-6 mb-5 text-[30px] lg;text-[2vw] leading-none  ">DIPLOMATIC & <br /> ROYAL PROTOCOL</h1>
                            <p className=" leading-[20px] ml-5 lg:ml-0  ">
                                Specialized handling for high-profile<br /> individuals requiring strict security <br />protocols, motorcades, and confidential <br />manifest management.
                            </p>
                        </div>

                        <div className="card mt-15">
                            <img src="/private/7.avif" className=" w-[260px] ml-5 lg:ml-0 lg:w-[170px] lg:h-50  " />
                            <h1 className="ml-5 lg:ml-0 mt-6 mb-5 text-[30px] lg;text-[2vw] leading-none ">INDIVIDUALS<br />& FAMILIES</h1>
                            <p className=" leading-[20px] ml-5 lg:ml-0 ">
                                Multi-generational travel planning that <br /> caters to the specific needs of couples,<br /> children, seniors, special-needs and <br />everything in between.
                            </p>

                        </div>
                    </div>
                </scetion>

            </section>

        </section>
    )
}
// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {


    useGSAP(() => {

        if (window.innerWidth >= 1024) {

            const t2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cards",
                    start: "top 60%",
                    end: "top 0%",
                    scrub: 2,
                }
            });

            t2.from(".card", {
                y: 100,
                opacity: 0,
                stagger: 0.70,
            });

        }

    });



    return (
        <section className="relative top-0 w-full  overflow-hidden font-serif text-white ">

            {/* section1 */}
            <section className="relative top-0">
                <img src="/abimg/1.avif" className="w-full h-screen object-cover scale-110 " />
                <img src="/abimg/2.svg" className="absolute bottom-0 w-full object-cover " />

                <div className="absolute top-20 text-center justify-items-center h-screen">
                    <h1 className="text-5xl sm:text-5xl md:text-[65px] lg:text-7xl  lg:w-[90%] ">REDEFINING TRAVEL FOR A MODERN WORLD</h1>
                    <div className="flex flex-col gap-6 absolute bottom-43 font-sans " >
                        <p>We open experience others can’t</p>
                        <a className="rounded-full text-black bg-white tracking-[1px]  px-1 py-3 text-sm">LEARN MORE ABOUT US</a>
                    </div>

                </div>
                <img src="/abimg/3d.png" className="absolute -bottom-5 scale-150  lg:-bottom-10 lg:scale-100" />
            </section>

            {/* section 2 */}
            <section className=" relative top-0 w-full min-h-screen  text-black" >
                {/*text */}
                <div className="flex px-5 py-5 w-full ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl  leading-10  ">WE COMBINE HIGH-TECH <br />LOGISTICS WITH<br /> HIGH-TOUCH SERVICE</h1>
                    <p className="lg:text-xl ml-19 px-8 py-8 leading-6 hidden lg:block ">To be the world’s most trusted travel <br />partner, recognized not just for where<br /> we take our clients, but for how we make <br /> them feel: secure, valued, and inspired.</p>

                </div>

                {/* cards  */}
                <div className=" flex flex-col gap-10 md:flex-row md:gap-0 lg:flex-row lg:gap-45 lg:px-10 ">
                    {/* 1 */}
                    <div className="card px-5 ">
                        <div className="justify-items-end  w-[210px]   lg:w-[160px]"><h1 className=" rounded-full bg-black text-white  text-center  w-6 ">1</h1></div>
                        <img src="/abimg/3.avif" className=" w-[200px] lg:w-[150px] " />
                        <h1 className="text-2xl py-4 leading-none ">PROACTIVE <br />ANTICIPATION</h1>
                        <p className="leading-[15px]">We solve problems before they arise by analyzing every variableof a journey — from shifting weather patterns to local geopolitical updates</p>
                    </div>

                    {/* 2 */}
                    <div className="card pl-10 md:pl-0 lg:pl-0 md:py-13 lg:py-20  ">
                        <div className="justify-items-end  w-[210px]  lg:w-[160px]"><h1 className=" rounded-full bg-black text-white  text-center  w-6 ">2</h1></div>
                        <img src="/abimg/4.avif" className=" w-[200px] lg:w-[150px]" />
                        <h1 className="text-2xl py-4 leading-none ">COST-SMART<br /> EXCELLENCE</h1>
                        <p className=" leading-[15px]">Premium service shouldn't mean unnecessary spending. We leverage global networks to find smart, budget-conscious solutions without ever compromising on the quality of the experience</p>
                    </div>

                    {/* 3 */}
                    <div className=" card px-5  ">
                        <div className="justify-items-end  w-[210px]  lg:w-[160px] "><h1 className=" rounded-full bg-black text-white  text-center  w-6 ">3</h1></div>
                        <img src="/abimg/5.avif" className=" w-[200px] lg:w-[150px]" />
                        <h1 className="text-2xl py-4 leading-none ">24/7 PARTNERSHIP</h1>
                        <p className=" leading-[15px]"> we operate on "Traveler Time".Our team is avalable around the clock, ensuring that no matter your time zone, a Flyward expert is always a step ahead, ready to assist</p>
                    </div>
                </div>
                <img src="/abimg/6.svg" className="absolute bottom-0 w-full object-cover " />
            </section>
        </section >

    )
}


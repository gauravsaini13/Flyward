import Footer from "/src/components/Footer.jsx"

// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        const TL = gsap.timeline({
            scrollTrigger: {
                trigger: ".footers",
                start: "top 40%",
                end: "top 0%",
                toggleActions: "play none none none",
                scrub: 1,
                // markers:true,


            }
        });

        TL.fromTo(".footer", {


        }, {
            border: "35px solid white",
            duration: 0.10
        })


    })




    return (
        <section className="relative top-0 font-serif  ">
            <section className=" relative top-0 ">
                <img src="/Contact/1.avif" className="h-620 w-full object-cover" />
                {/* grid line */}
                <div className=" absolute inset-[20px_20px_20px_20px_]   h-[620px]  grid grid-cols-4 grid-rows-2 ">
                    <div className="border border-white/50 "></div>
                    <div className="border border-white/50 "></div>
                    <div className="border border-white/50 "></div>
                    <div className="border border-white/50 "></div>
                    <div className="border border-white/50 "></div>
                    <div className="border border-white/50 "></div>
                    <div className="border border-white/50 "></div>
                    <div className="border border-white/50 "></div>
                </div>




                {/* section2 */}
                <section className="absolute top-10 lg:top-16 p-5 pb-12 left-5 lg:left-13 text-white  backdrop-blur-[8px] brightness-80">
                    <h1 className=" text-[38px]  lg:text-[45px] leading-[45px] mb-7 ">LET'S TAKE CARE  <br />OF YOUR TRAVEL</h1>
                    {/* 1 */}
                    <div className="lg:flex gap-17">
                        <div>
                            <h1 className="text-[25px] leading-[27px] mb-4 ">24/7 CUSTOMER<br />SERVICE</h1>
                            <p>+971 52 7870888</p>
                        </div>

                        <div className="text-end lg:text-start">
                            <h1 className="text-[25px] leading-[27px] mb-4 ">EMERGENCY<br />EMAIL</h1>
                            <p>emergency@flyward.com</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="lg:flex mt-22 gap-3">
                        <div className="leading-[27px]">
                            <h1 className="tracking-[1px] mb-4" >CONTACT</h1>
                            <p>UAE: +971 4 5437000</p>
                            <p>USA: +1 947 219-8144</p>
                            <p>Lebanon: +961 81 838412</p>
                            <p>hello@flyward.com</p>

                        </div>

                        <div className="lg:ml-19  text-end lg:text-start  leading-[27px]"  >
                            <h1 className="tracking-[1px] mb-4">CHAT CHANNELS</h1>
                            <p>Instagram DM</p>
                            <p>WhatsApp</p>
                            <p>Telegram</p>
                        </div>

                        <div className="lg:ml-7  leading-[27px]">
                            <h1 className="  tracking-[1px] mb-4">SOCIALS</h1>
                            <p>Instagram</p>
                            <p>Tiktok</p>
                        </div>
                    </div>

                </section>


                {/* section3 */}
                <section className=" absolute top-220 lg:top-16 left-5 lg:left-155">
                    <div className="lg:flex w-90 lg:w-[600px] max-w-full ">

                        {/* LEFT FORM */}
                        <div className="bg-[#f5f5f3] lg:w-[72%] md:p-6 p-10">

                            {/* FIRST + LAST NAME */}
                            <div className="grid lg:grid-cols-2 gap-10 mb-10">

                                <div>
                                    <p className="text-[18px] mb-3">
                                        First name
                                    </p>

                                    <input
                                        type="text"
                                        className="w-full  border-b  outline-none  "
                                    />
                                </div>

                                <div>
                                    <p className="text-[18px] mb-3">
                                        Last name
                                    </p>

                                    <input
                                        type="text"
                                        className="w-full  border-b  outline-none "
                                    />
                                </div>

                            </div>

                            {/* EMAIL */}
                            <div className="mb-15">
                                <p className="text-[18px] mb-1 ">
                                    Email Address
                                </p>

                                <input
                                    type="email"
                                    className="w-full border-b outline-none "
                                />
                            </div>

                            {/* PHONE */}
                            <div className="mb-13">
                                <p className="text-[18px] mb-3">
                                    Your phone number
                                </p>

                                <input
                                    type="text"
                                    placeholder="+050 123 4567"
                                    className="w-full border-b  outline-none "
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <p className="text-[18px] text-[#2f2118] ">
                                    Message / your preferences
                                </p>

                                <textarea
                                    className="w-full h-[100px]  border-b  outline-none "
                                ></textarea>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-[#4a2f1f] lg:w-[30%] h-50 lg:h-130 overflow-hidden flex flex-col justify-between ">

                            <h2 className="text-white  text-[30px] lg:text-[16px] mt-10 ml-10 lg:ml-4 font-serif uppercase">
                                Shall We Begin?
                            </h2>


                            <img src="/flyward/33.svg" />


                            {/* BUTTON */}
                            <button className="-mt-1000 lg:mt-0 bg-[#f5f5f3] #4a2f1f rounded-full tracking-[1.5px] text-[12px] uppercase p-2.5 pl-5 pr-5 ml-25 lg:ml-4 mb-5 w-fit">
                                Send Request
                            </button>
                        </div>
                    </div>
                </section>

                <img src="/Contact/2.avif" className="absolute bottom-0" />

                <div className=" footer footers  absolute bottom-0 text-white"> <Footer /></div>




            </section>




        </section>
    )
}


import Footer from "../Footer"

// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

export default function Security() {





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
           
        })


    })


    return (
        <section className="relative  top-0  w-full overflow-hidden  font-['Apris','Times_New_Roman',sans-serif] ">

            {/* page1 */}
            <section className="relative top-0">
                <img src="/flyward/30.svg" className="h-200 w-full lg:h-200  object-cover " />
                {/* grid line */}
                <div className=" absolute inset-[20px_20px_20px_20px_]  grid grid-cols-4 grid-rows-2   " >
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                    <div className="border border-black/5 "></div>
                </div>
                {/* 2 */}
                <div className=" absolute inset-0 top-18 left-5 lg:left-20 ">
                    <h1 className="  text-[35px] lg:text-[60px] leading-[50px]">UNCOMPROMISING SECURITY <br />FOR THE MODERN TRAVELER</h1>
                    <p className=" mt-13 lg:ml-68 text-[12px] lg:text-[20px] lg:leading-[20px]">We understand that travel requires the exchange of highly <br />
                        sensitive information, from passport scans to private itineraries.<br />
                        We believe that true premium service is impossible without,<br />
                        absolute digital discretion. Our security framework is built <br />
                        on a "Zero Trust" architecture, ensuring that your personal<br />
                        identity and financial data are shielded by the most advanced<br />
                        protective measures available in the travel industry.
                    </p>

                    <p className=" text-[12px] lg:text-[20px]  ml-25 lg:ml-138 mt-10  leading-[20px]">We also believe you should retain total <br />
                        sovereignty over your digital footprint.<br />
                        Flyward is one of the few agencies to offer<br />
                        aData Kill Switch, an on-demand feature that <br />allows you toinstantly trigger the permanent <br />
                        deletion of all your stored personal<br />
                        documents.
                    </p>

                    <h1 className="  lg:text-[60px] leading-[55px] lg:ml-68 mt-10 hidden lg:block">SECURITY IS NOT A FEATURE,<br /> IT'S A FOUNDATION</h1>
                    <h1 className=" text-[37px] leading-[40px] mt-10  lg:hidden block">SECURITY IS NOT A <br /> FEATURE, IT'S A <br /> FOUNDATION</h1>
                </div>
            </section>



            {/* page2 */}
            <section className="relative top-0">
                <img src="/flyward/31.avif" className="w-full object-cover h-600 lg:object-fill  " />
                {/* 1 */}
                <div className="absolute inset-0  text-center  top-46 hidden lg:block">
                    <h1 className="text-[70px] leading-[65px]">BEYOND THE REACH OF <br />
                        SEARCH ENGINES LIES A<br />
                        WORLD CURATED JUST<br />
                        FOR YOU
                    </h1>
                </div>
                <div className="absolute inset-0  top-30 lg:hidden block text-white ">
                    <h1 className="text-[55px] leading-[60px]">BEYOND THE <br /> REACH OF <br />SEARCH<br /> ENGINES</h1>
                    <h1 className="text-[50px] leading-[65px]  text-end absolute z-10 left-12">LIES<br />A WORLD <br />CURATED<br /> JUST FOR YOU</h1>
                </div>
                <img src="/flyward/32.avif" className="absolute top-0 w-full object-cover h-600 lg:object-fill " />


                {/* 2 */}
                <div className=" absolute  top-165 left-7 lg:left-80">
                    <div className="lg:flex w-85 lg:w-[600px] max-w-full ">

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
                </div>


                <img src="/flyward/34.avif" className="absolute bottom-0" />

                <div className="footer footers  absolute bottom-0 text-white">

                    <Footer />
                </div>




            </section>

        </section>
    )
}
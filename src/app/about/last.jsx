import Footer from "/src/components/Footer.jsx"


// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Last() {



    useGSAP(() => {

        const TL = gsap.timeline({
            scrollTrigger: {
                trigger: ".footers",
                start: "top 40%",
                end: "top 40%",
                toggleActions: "play none none none",
                scrub: 1,
                // markers:true


            }
        });

        TL.fromTo(".footer", {


        }, {
            border: "35px solid white",
            
        })


    })



    return (
        <section className=" relative  overflow-hidden  font-['Apris','Times_New_Roman',sans-serif] text-white">
            <img src="/abimg/40.avif" className="w-full h-250 lg:h-full object-cover" />


            {/* section 1 */}
            <section className=" absolute  inset-[150px_0px_0px_0px]  overflow-hidden ">
                <div className="  flex flex-col items-center  ">
                    <h1 className="text-3xl  lg:text-7xl leading-none">YOUR DEPARTURE</h1>
                    <h1 className="text-3xl  lg:text-7xl leading-none">FROM THE ORDINARY</h1>
                    <h1 className="text-3xl   lg:text-7xl leading-none">BEGINS HERE</h1>
                    <a className="rounded-full text-black bg-white py-3 px-4 mt-10 tracking-[1px]">SHALL WE BEGIN?</a>
                </div>
            </section>

                        
            <scetion className=" absolute bottom-0 w-full  " >
                <div className="footer footers  ">
                    <Footer />
                </div>
            </scetion>



        </section>
    )
}
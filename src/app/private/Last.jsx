
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


            }
        });

        TL.fromTo(".footer", {


        }, {
            border: "35px solid white",
            duration: 0.10
        })


    })






    return (
        <section className="relative top-0 overflow-hidden  font-['Apris','Times_New_Roman',sans-serif] ">
            <img src="/private/13.avif" className=" hidden lg:block"/>
              <img src="/private/13.avif" className="lg:hidden block h-300 object-cover" />
            
            <section className='absolute top-55 lg:left-90 '>
                <div className="text-center ml-7 lg:ml-0 text-white leading-[40px] lg:leading-[60px]   ">
                    <h1 className="text-[40px] lg:text-[70px]">YOUR NEXT</h1>
                    <h1 className="text-[40px] lg:text-[70px]">UNFORGETTABLE</h1>
                    <h1 className="text-[40px] lg:text-[70px] mb-10">JOURNEY AWAITS</h1>
                    <a className="-ml-4 rounded-full text-black bg-white p-3 pl-5 pr-5  text-[12px] tracking-[2px]">SHALL WE BEGIN?</a>

                </div>
            </section>
            <img src="/private/14.avif" className="  absolute  top-300 w-full" />


            <section className='absolute bottom-0 text-white'>
                <div className=" footer footers ">
                    <Footer />
                </div>

            </section>





        </section>
    )
}
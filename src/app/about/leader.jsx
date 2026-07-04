// gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Leader() {
    useGSAP(() => {

        const T = gsap.timeline({
            scrollTrigger: {
                trigger: ".leaders",
                start: "top 50%",
                end: "top 50%",
                scrub: 4,
            }
        });

        T.from(".leader", {
            y: -600,

        })


    })
    return (
        <section className="leaders relative w-full h-screen overflow-hidden text-white font-['Apris','Times_New_Roman',sans-serif]" >
            <img src="/abimg/7.avif" className="w-full h-full object-cover" />

            {/* section 1 */}
            <section className='leader absolute inset-[15px_15px_30px_10px] lg:inset-[10px_50px_10px_60px] '>
                {/* white grid lines */}
                <div className="w-full h-full grid  grid-cols-4 grid-rows-2 ">

                    <div className="border border-white/20 pt-[120px] pl-[13px] hidden lg:block">The driving force behind <br /> Flyward's operational excellence</div>
                    <div className="border border-white/20">
                        <h2 className="lg:text-[23px] lg:pl-[30px]  lg:pt-[90%]  font-serif uppercase  hidden lg:block">Fadi Tayyoun</h2>
                    </div>
                    <div className="border border-white/20"></div>
                    <div className="border border-white/20"></div>

                    <div className="border border-white/20  " >
                        <span className='text-5xl absolute left-66 top-67 hidden lg:block '>✶ </span>
                    </div>

                    <div className="border border-white/20">
                        <p className="tracking-[3px] text-sm uppercase pl-10 hidden lg:block">
                            Founder & CEO
                        </p>
                    </div>
                    <div className="border border-white/20"></div>
                    <div className="border border-white/20 "></div>
                </div>

            </section>


            <div className="leader absolute top-0 left-5 lg:top-10 lg:left-19   ">
                {/* heading */}
                <h1 className=" text-5xl lg:text-[9vh] leading-none font-serif uppercase py-10 "> Leadership Team</h1>
                <p className="lg:hidden block leading-none">The driving force behind <br />Flyward's operational excellence</p>
                <h1 className="lg:hidden block   ml-15 md:ml-5 sm:ml-5 mt-5 sm:mt-15  md:mt-15 text-2xl  uppercase">Fadi Tayyoun</h1>
                <h1 className="lg:hidden block  ml-15  md:ml-5 sm:ml-5 text-xl  uppercase"> Founder & CEO</h1>
                <span className="lg:hidden block text-5xl -mt-12 sm:-mt-14 md:-mt-14 sm:-ml-6  md:-ml-6">✶</span>
            </div>




            {/* scrtion 2 */}
            <section className='leader  absolute overflow-x-auto    bottom-5 lg:bottom-15 lg:left-20 backdrop-blur-md bg-black/30 p-2 lg:overflow-visible  '>
                {/* card */}
                <div className="  flex gap-[5px] scroll-smooth ">
                    {/* card 1 */}
                    <div className=" flex-shrink-0 " >
                        <h3 className="text-[16px] hidden lg:block ">Rita El Houjairy</h3>
                        <p className="text-white/60 text-[11px] mb-3  hidden lg:block  ">
                            Head of Operations
                        </p>

                        <img
                            src="/abimg/8.avif"
                            className=" w-40 lg:w-full lg:h-[130px] object-cover "
                        />
                    </div>
                    {/* card 2 */}
                    <div className=" flex-shrink-0 ">
                        <h3 className="text-[16px] hidden lg:block ">Nivine Seif</h3>
                        <p className="text-white/60 text-[11px] mb-3 hidden lg:block ">
                            Head of Sales
                        </p>

                        <img
                            src="/abimg/9.avif"
                            className="   w-40 lg:w-full lg:h-[130px] object-cover "
                        />
                    </div>
                    {/* card 3 */}
                    <div className=" flex-shrink-0 ">
                        <h3 className="text-[16px] hidden lg:block ">Dina El Houjairy</h3>
                        <p className="text-white/60 text-[11px] mb-3 hidden lg:block ">
                            Head of Customer Service
                        </p>

                        <img
                            src="/abimg/10.avif"
                            className=" w-40 lg:w-full lg:h-[130px] object-cover   "
                        />
                    </div>

                    {/* card 4 */}
                    <div className=" flex-shrink-0 ">
                        <h3 className="text-[16px] hidden lg:block ">Zulya Kazakova</h3>
                        <p className="text-white/60 text-[11px] mb-3 hidden lg:block ">
                            Marketing Manager
                        </p>

                        <img
                            src="/abimg/11.avif"
                            className="  w-40 lg:w-full lg:h-[130px] object-cover "
                        />
                    </div>

                    {/* card 5 */}
                    <div className=" flex-shrink-0 ">
                        <h3 className="text-[16px] hidden lg:block ">Ghina Kheir</h3>
                        <p className="text-white/60 text-[11px] mb-3 hidden lg:block ">
                            Country manager
                        </p>

                        <img
                            src="/abimg/12.avif"
                            className=" w-40 lg:w-full lg:h-[130px] object-cover   "
                        />
                    </div>


                    {/* card 6 */}
                    <div className=" flex-shrink-0 " >
                        <h3 className="text-[16px] hidden lg:block ">
                            Subin Sasi</h3>
                        <p className="text-white/60 text-[11px] mb-3 hidden lg:block ">
                            Finance Manager
                        </p>

                        <img
                            src="/abimg/13.avif"
                            className=" w-40 lg:w-full lg:h-[130px] object-cover  "
                        />
                    </div>

                </div>


            </section>

        </section>
    )
}
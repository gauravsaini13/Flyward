export default function Principle() {
    return (
        <section className="relative w-full top-20  font-['Apris','Times_New_Roman',sans-serif] overflow-hidden ">

            <h1 className=" text-3xl md:text-4xl lg:text-5xl text-center leading-none ">PRINCIPLES <br /> THAT GUIDE US</h1>

            {/* section 1  */}
            <section className="relative top-0  text-white ">
                <video autoPlay muted loop playsInline className="h-screen w-full object-cover py-5 px-5  "   >
                    <source src="/abimg/t.mp4" type="video/mp4" />
                </video>


                {/* white grid lines */}
                <div className="absolute  top-0 inset-0 grid grid-cols-4 grid-rows-2  py-5 px-5 text-black ">
                    <div className="px-2 py-10 w-full border border-black/10 bg-white/50">
                        <div className="hidden sm:block md:block lg:block">
                            <h1 className="text-xl">TRUST BUILT OVER TIME</h1>
                            <p className="font-sans text-xs">Integrity is our foundation. We honor our legacy by being transparent in our pricing and honest in our advice</p>

                        </div>
                    </div>

                    <div className=" w-full border border-black/10"> </div>
                    <div className=" w-full  border border-black/10"></div>

                    <div className="px-5 py-10  text-end w-full border border-black/10 bg-white/50">
                        <div className="hidden sm:block md:block lg:block">
                            <h1 className=" text-xl">Service with heart</h1>
                            <p className="font-sans text-xs">We treat every traveler like a member of <br /> our own family. If it’s not good enough for us, it’s not good enough for you</p>

                        </div>

                    </div>



                    <div className="px-2 py-10   w-full border border-black/10 bg-white/50">
                        <div className="hidden sm:block md:block lg:block">
                            <h1 className="text-xl">Agility</h1>
                            <p className="font-sans text-xs">The world changes fast; we change faster.We pride ourselves on our ability to pivot and adapt to any global circumstance</p>
                        </div>
                    </div>

                    <div className="w-full border border-black/10"></div>
                    <div className="w-full border border-black/10"></div>

                    <div className=" text-end px-5 py-10  w-full border border-black/10 bg-white/50">
                        <div className="hidden sm:block md:block lg:block">
                            <h1 className="text-xl">Global citizenship</h1>
                            <p className="font-sans text-xs">We promote responsible travel practices that respect local cultures and environments</p>
                        </div>

                    </div>
                </div>



            </section>

            {/* scetion 2 */}
            <section className=" relative top-0 w-full h-250 lg:h-screen ">
                <img src="/abimg/26.svg" className="hidden lg:block" />

                <div className=" absolute top-0 py-5 px-5 w-80 md:w-110  lg:flex lg:gap-50 lg:w-270  ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none"> 3WORLDWIDE LOCATINOS</h1>
                    <p className="py-3 md:text-2xl lg:text-3xl">Strategic hubs in Dubai, Lebanon and the USA — ensuring truly global coverage with seamless coordination and reliable support</p>

                </div>


                <div className="absolute top-45 md:top-60 py-5 px-5 md:py-20  lg:py-10 grid md:grid-cols-2 md:grid-rows-2 md:gap-20 lg:grid-cols-4    ">
                    {/* 1 */}
                    <div >
                        <h1 className="text-7xl md:text-8xl py-3">94%</h1>
                        <h1 className="text-lg md:text-3xl py-4">Repeat bookings</h1>
                        <p className="text-sm md:text-2xl lg:text-lg " >Our growth is fueled by the loyalty of clients who return to us journey after journey.</p>

                    </div>
                    {/* 2 */}
                    <div>
                        <h1 className="text-7xl md:text-8xl py-3">89%</h1>
                        <h1 className="text-lg md:text-3xl py-4">Net promoter score (NPS)</h1>
                        <p className="text-sm md:text-2xl lg:text-lg ">An industry-leading satisfaction rating that reflects our commitment to excellence.</p>

                    </div>

                    {/* 3 */}
                    <div>
                        <h1 className="flex text-7xl md:text-8xl py-3">5 <br />  <span className="text-lg pt-10 px-2">YEARS</span></h1>
                        <h1 className="text-lg md:text-3xl py-3">Average agent experience</h1>
                        <p className=" text-sm md:text-2xl lg:text-lg ">We don't hire beginners, your travel is handled by seasoned experts who have seen it all.</p>
                    </div>

                    {/* 4 */}
                    <div>
                        <h1 className="text-7xl md:text-8xl py-3 ">25+</h1>
                        <h1 className="text-lg md:text-3xl py-4">Travel agents</h1>
                        <p className="text-sm md:text-2xl lg:text-lg ">A diverse, multilingual team capable of navigating global markets.</p>
                    </div>
                </div>
            </section>



        </section>
    )
}
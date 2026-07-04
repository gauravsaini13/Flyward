

export default function Second() {
    return (
        <section className=" relative font-['Apris','Times_New_Roman',sans-serif] ">
            <div className=" relative top-0  overflow-hidden ">
                <img src="/flyward/1.avif" className="object-cover h-screen w-full " />
                <img src="/flyward/2.avif" className="absolute top-0  object-cover h-screen w-full" />

                <div className=" absolute  inset-[20px_20px_20px_20px_]  grid grid-cols-4 grid-rows-2 ">
                    <div className="border border-white/20 "><p className="text-white/20 mt-54 ml-15 text-[40px] ">✶</p></div>
                    <div className="border border-white/20 "></div>
                    <div className="border border-white/20 "></div>
                    <div className="border border-white/20 "><p className="text-white/20 mt-54 ml-50 text-[40px] ">✶</p></div>
                    <div className="border border-white/20 "></div>
                    <div className="border border-white/20 "></div>
                    <div className="border border-white/20 "></div>
                    <div className="border border-white/20 "></div>
                </div>

                <div className="absolute inset-0  text-center top-45  text-white  ">
                    <h1 className=" text-[37px] lg:text-[50px] leading-[10px]">WITH YOU AT</h1>
                    <h1 className=" text-[40px] lg:text-[50px] mb-2.5">EVERY HORIZON</h1>
                    <p className=" mb-20 lg:mb-10 mt-20 lg:mt-0">We manage travel end to end for individuals and<br />
                        businesses. As your travel partner, we take care of<br />
                        every detail, so you can focus on what really matters.
                    </p>
                    <a className="rounded-full text-black bg-white lg:p-3 lg:pl-5 lg:pr-5 p-5 pl-10 pr-10 text-[15px] lg:text-[12px] tracking-[3px]">DISCOVER</a>

                </div>

            </div>




            {/* page2 */}
            <div className=" relative top-0">
                <div className=" lg:flex items-center justify-center gap-2 overflow-hidden p-3 ">
                    <img src="/flyward/5.avif" className="w-1/2 object-cover  h-150 object-cover lg:h-200 w-full" />
                    <img src="/flyward/6.avif" className="w-1/2 object-cover h-130 object-cover lg:h-200 w-full pt-2" />
                </div>
                <h1 className=" absolute text-white/20 -top-15 leading-[60px] w-full text-center  text-[70px] z-20">TRAVEL DESIGNED <br /> AROUND YOU </h1>

                <img src="/flyward/7.avif" className="absolute -top-90 lg:-top-80 h-screen object-cover w-full" />
                <img src="/flyward/8.avif" className="absolute lg:top-160 bottom-3 lg:w-full" />




                <div className="absolute inset-0 top-120 lg:top-127  text-white lg:flex ">
                    {/* 1 */}
                    <div className=" ml-10 ">
                       <div className=" lg:pb-8 "> <a className=" rounded-full border p-1 pl-5 pr-5  text-[12px] backdrop-blur-[8px] ">EXPLORE</a></div>
                        <div className="lg:flex">
                            <h1 className=" -mt-55 lg:mt-0 text-[50px] leading-[40px]"> PRIVATE<br /> TRAVEL</h1>
                            <p className="leading-[20px] lg:ml-40 mt-3">Thoughtfully planned travel <br />
                                for individuals and families.<br />
                                Every detail handled with<br />
                                care, discretion, and flexibility.
                            </p>
                        </div>

                    </div>
                    {/* 2 */}

                    <div className=" mt-100 lg:mt-3 ml-10 lg:ml-17"> 
                        <div className=" lg:pb-8 hidden lg:block "> <a className=" rounded-full border p-1 pl-5 pr-5  text-[12px] backdrop-blur-[8px] ">EXPLORE</a></div>
                        <div className=" lg:flex">
                            <h1 className=" -mt-20 lg:mt-0 text-[50px] leading-[40px]">CORPORATAE <br /> TRAVEL</h1>
                            <p className="leading-[20px]  lg:ml-15 mt-2">Efficient, reliable travel<br />
                                management for businesses<br />
                                and executives who need <br />
                                things done right
                            </p>
                            <div className="lg:hidden block mt-7 "><a className=" rounded-full border p-1 pl-5 pr-5  text-[12px] backdrop-blur-[8px] ">EXPLORE</a></div>


                        </div>
                    </div>
                </div>
            </div>






        </section>
    )
}


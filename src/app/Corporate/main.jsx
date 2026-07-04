export default function Mainn() {
    return (
        <section className="relative w-full  font-['Apris','Times_New_Roman',sans-serif] overflow-hidden  ">
            {/*section 1 */}
            <section className="relative top-0 ">
                <img src="/Corporate/1.avif" className="lg:h-screen h-150 object-cover w-full " />
                <img src="/Corporate/1f.avif" className="absolute bottom-0 " />

                <div className="absolute inset-0 lg:inset-[40px_40px_40px_40px_] grid grid-cols-4 grid-rows-2 ">
                    <div className="border border-white/8 "></div>
                    <div className="border border-white/8 "></div>
                    <div className="border border-white/8 "></div>
                    <div className="border border-white/8 "></div>
                    <div className="border border-white/8 "></div>
                    <div className="border border-white/8 "></div>
                    <div className="border border-white/8 "></div>
                    <div className="border border-white/8 "></div>
                </div>

                <section className="absolute top-10 lg:inset-[43px_] ">
                    <div className="flex flex-col text-center  lg:leading-[50px]  ">
                        <h1 className=" text-[25px]  lg:text-[55px]">EXQUISITE CORPORATE</h1>
                        <h1 className=" text-[25px]  lg:text-[55px]">SERVICE, MANAGED</h1>
                        <h1 className=" text-[25px]  lg:text-[55px]"> WITH CARE</h1>
                        <div className="mt-10 lg:mt-25 lg:leading-[20px]">
                            <p>We design seamless corporate journeys for business</p>
                            <p>efficiency, scalability, and high-level logistics</p>
                            <p>management.</p>
                        </div>
                    </div>
                </section>

            </section>


            {/* section2 */}
            <section className="relative top-0 h-330 lg:h-170">
                <img src="/Corporate/2.svg" className="object-cover h-screen w-full" />
                {/* grid line */}
                <div className=" absolute inset-[20px_30px_40px_50px_] grid grid-cols-4 grid-rows-2 " >
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
                <scetion className=" absolute inset-[150px] ">
                    <div className="flex flex-col items-center gap-20 ">
                        <div className="lg:leading-[55px] w-100 lg:w-full  text-center ">
                            <h1 className="text-[30px]  lg:text-[60px]">HOW WE SUPPORT YOUR</h1>
                            <h1 className=" text-[30px] lg:text-[60px] ">BUSINESS JOURNEY</h1>
                        </div>

                        <div className="lg:flex gap-10  w-90 lg:w-full ">
                            <img src="/Corporate/3.avif" className="lg:w-[50vh]  " />
                            <div>
                                <h1 className="text-[40px] leading-[35px] mt-10 lg:-mt-12">CORPORATE TRAVEL <br />MANAGEMENT</h1>
                                <p className="mt-[40px]  "><b>Executive services. </b> End-to-end planning <br />
                                    for business trips and executive<br />concierge support.
                                </p>

                                <p className="mt-5 lg:mt-[40px]"><b>Corporate housing.</b>Long-term staysand<br />
                                    dedicated housing for relocated <br />employees.
                                </p>
                            </div>

                            <div className="mt-5 lg:mt-[100px] w-full">
                                <p >
                                    <b>Financial oversight. </b>  Expense reporting,<br />
                                    travel budget optimization, and policy<br />
                                    compliance.
                                </p>
                                <p className=" mt-5 lg:mt-[30px]"><b>Emergency support. </b>24/7flight<br />
                                    rebooking and crisis management.
                                </p>
                            </div>
                        </div>
                    </div>
                </scetion>
            </section>


        </section>

    )
}
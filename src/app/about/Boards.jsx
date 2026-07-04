import { useState } from "react"


export default function Board() {
    const [active, setActive] = useState(0)
    const members = [
        {
            name: "Dr. Walid Moneimne",
            role: "CHAIRMAN",
            img: "/abimg/16.jpg"
        },

        {
            name: "Ahmed ben Chaibah",
            role: "BOARD MEMBER",
            img: "/abimg/17.webp"
        },

        {
            name: "Amir Elayyan",
            role: "BOARD MEMBER",
            img: "/abimg/18.avif"
        },

        {
            name: "Dragos Dumitrascu",
            role: "BOARD MEMBER",
            img: "/abimg/19.avif"
        },

        {
            name: "Haroldas Pakalniskis",
            role: "BOARD MEMBER",
            img: "/abimg/20.avif"
        },

        {
            name: "Hassan Sheikh",
            role: "BOARD MEMBER",
            img: "/abimg/21.avif"
        },

        {
            name: "Mark BereleKhis",
            role: "BOARD MEMBER",
            img: "/abimg/22.avif"
        },
        {
            name: "Robin Janaway",
            role: "BOARD MEMBER",
            img: "/abimg/23.avif"
        },
    ]

    return (
        <section className="relative  top-0  w-full overflow-hidden  font-['Apris','Times_New_Roman',sans-serif] ">
            {/* background image */}
            <img src="/abimg/15.svg" className="absolute top-0 -z-1 " />

            <div className=" lg:flex  lg:gap-10 ">
                {/* LEFT IMAGE */}
                <div className=" lg:w-[50%]  hidden lg:block lg:mt-10 lg:ml-6">
                    {/* laptop */}
                    <img
                        src={members[active].img}
                        className="lg:h-175  lg:w-200"
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className=" w-full lg:w-[50%] lg:mt-8 lg:mr-7 ">
                    <h1 className=" mt-10 lg:mt-0 ml-5 lg:ml-0      text-[10vw]   lg:text-[4vw] leading-none uppercase text-[#3d3025] ">
                        Board
                        <br />
                        Of Directors
                    </h1>
                    <p className="mt-5 ml-6 lg:ml-0  lg:text-[1.3vw] pb-5 text-[#5a4c40]">
                        Strategically guided by industry titans and visionary leaders
                    </p>
                      {/* phone  */}
                    <img
                        src={members[active].img}
                        className=" px-6 py-5 w-full h-110 sm:h-150 md:h-200      lg:hidden  block object-cover"
                    />


                    {/* MEMBERS */}
                    <div  >
                        {
                            members.map((item, index) => (
 
                                <div
                                    key={index}
                                    onMouseEnter={() => setActive(index)}
                                    className={`

                                    flex  items-center justify-between
                                    border-b border-[#d8d1ca]
                                    py-2.5 px-5 pb-6
                                    cursor-pointer 
                                    duration-300
                                       w-full
                                       

                                    ${active === index
                                            ? "bg-[#ece7e1]"
                                            : "bg-transparent"
                                        }

                                `}
                                >

                                    {/* NAME */}
                                    <h2 className="lg:text-[1.7vw] text-[#2f241b]  ">
                                        {item.name}
                                    </h2>


                                    {/* RIGHT */}
                                    <div className="flex items-center  ">

                                        {/* ROLE */}
                                        <p className={`

                                        text-sm tracking-[2px]
                                        text-[#4d4035]
                                        duration-300 
                                        -mr-[20px]

                                        ${active === index
                                                ? "opacity-100"
                                                : "opacity-0"
                                            }

                                    `}>
                                            {item.role}
                                        </p>


                                        {/* STAR */}
                                        <span className={`
                                        text-2xl text-[#8a7d72]
                                        duration-300                               

                                        ${active === index
                                                ? "opacity-0 "
                                                : "opacity-100"
                                            }

                                    `}>
                                            ✶
                                        </span>

                                    </div>

                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}
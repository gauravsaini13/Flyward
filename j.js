  <section className=" relative top-0 text-black h-250 overflow-hidden">
                <img src="/abimg/41.avif" className="absolute  lg:-top-124" />
                <img src="/abimg/39.svg" className=" absolute  lg-top-80"  />

                <section className="absolute top-10 lg:top-0 overflow-hidden ">
                    <div className="grid  lg:grid-cols-2 ">
                        {/* LEFT */}
                        <div className="ml-10">
                            <h1 className=" text-[40px] lg:text-[60px] ">
                                FAQ'S
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col ">
                            {faqs.map((item, index) => (

                                <div
                                    key={index}
                                    className="border-b border-[#cfc7be] py-6 p-2"
                                >

                                    {/* QUESTION */}
                                    <div
                                        onClick={() => setOpen(open === index ? null : index)}
                                        className="flex items-center justify-between cursor-pointer"
                                    >

                                        <h2 className="text-[15px] lg:text-[21px] text-[#3d2a1f]">
                                            {item.question}
                                        </h2>

                                        {
                                            open === index
                                                ?
                                                <ChevronUp className="w-6 h-6 text-[#3d2a1f]" />
                                                :
                                                <ChevronDown className="w-6 h-6 text-[#3d2a1f]" />
                                        }

                                    </div>

                                    {/* ANSWER */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${open === index
                                            ? "max-h-40 mt-6 opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-[15px] text-[#4d3b30] max-w-[850px]">
                                            {item.answer}
                                        </p>
                                    </div>

                                </div>

                            ))}

                        </div>
                    </div>
                </section>
            </section>
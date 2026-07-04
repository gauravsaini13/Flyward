
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 -left-5 w-full z-50  font-['Apris','Times_New_Roman',sans-serif] ">

            {/* Desktop */}
            <section className="hidden lg:flex w-full h-11 justify-between items-center px-10 text-white">

                <div className="flex gap-5 text-sm">
                    <Link to="/about">ABOUT</Link>
                    <Link to="/private">PRIVATE</Link>
                    <Link to="/corporate">CORPORATE</Link>
                    <Link to="/career">CAREERS</Link>
                </div>

                <Link to="/" className="-ml-50 text-[28px] tracking-[.25em]">
                    FLYWARD
                </Link>

                <Link
                    to="/contact"
                    className="rounded-full border px-4 py-1.5 text-xs tracking-[1px] -mr-10"
                >
                    CONTACT
                </Link>

            </section>

            {/* Mobile */}
            <section className="lg:hidden flex   w-75 justify-between items-center px-6 py-5   ">

                <Link
                    to="/"
                    className="text-[22px] ml-5 tracking-[.25em] text-[#3B2A22]"
                >
                    FLYWARD
                </Link>

                <button
                    onClick={() => setOpen(!open)}
                    className="text-3xl text-[#3B2A22]"
                >
                    {open ? "✕" : "☰"}
                </button>

            </section>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-[#F5F3F0]  p-6  w-105 ">

                    <div className="flex flex-col gap-8 text-[#3B2A22] text-[35px] ml-8">

                        <Link to="/about">ABOUT</Link>
                        <hr />

                        <Link to="/private">PRIVATE</Link>
                        <hr />

                        <Link to="/corporate">CORPORATE</Link>
                        <hr />

                        <Link to="/career">CAREERS</Link>
                        <hr />

                        <Link
                            to="/contact"
                            className="text-center bg-[#4B2E1D] text-white py-4 rounded-full text-lg"
                        >
                            CONTACT
                        </Link>

                    </div>

                </div>
            )}

        </nav>
    )
}
 "use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {

    const [open, setOpen] = useState(0)
    const faqs = [
        {
            question: "What makes Flyward different from other travel agencies?",
            answer:
                "Flyward goes beyond basic bookings, we offer personalized travel management backed by superior customer care, proactive support, and a true human touch. As a family-run business, we treat every client like one of our own, ensuring their journey is smooth, stress-free, and memorable from start to finish.",
        },

        {
            question: "Do you offer 24/7 support while I'm traveling?",
            answer:
                "Yes. Our team is available around the clock to assist you at any point in your journey. Whether it's a last-minute change, flight delay, or urgent need, we're just a message, call, or email away- anywhere in the world.",
        },

        {
            question: "Can you help with visas and travel documentation?",
            answer:
                "Absolutely. We offer full visa assistance, including document preparation, appointment scheduling, and application tracking. We also guide you on passport requirements, travel insurance, and any entry regulations relevant to your destination.",
        },

        {
            question: "Do you manage corporate and business travel?",
            answer:
                "Yes. Flyward specializes in tailored corporate travel solutions, including executive-level planning, policy management, cost optimization, and 24/7 support for traveling employees. We also provide detailed reporting and spend analysis for businesses.",
        },

        {
            question: "Are your services only for luxury or frequent travelers?",
            answer: "Not at all. While we're trusted by frequent flyers and premium clients, our services are built around personalization, not price point. Whether it's your first trip or your fiftieth, we create an experience that fits your needs, comfort, and budget.",
        },

        {
            question: "Can you help design custom travel experiences?",
            answer: "Yes! We love creating unique, curated itineraries, from romantic escapes and family holidays to adventure travel and cultural explorations. Just tell us what you're looking for, and we'll handle the rest, every detail, every reservation, every special touch.",
        },

        {
            question: "Do you charge service or consultation fees?",
            answer: "Our pricing is fully transparent. In most cases, our agent fees are included in the booking. If any additional fees apply, for example, for complex visa processing or luxury concierge arrangements, we'll let you know upfront with no surprises.",
        },
        {
            question: "What happens if my plans change after booking?",
            answer: "We understand that plans can shift. Our team will handle changes, cancellations, and rebookings on your behalf, negotiating with suppliers where needed to minimize any penalties or delays. Our goal is always to make adjustments as smooth and cost-effective as possible.",
        },
        {
            question: "How do I get started with Flyward?",
            answer: "Simply reach out to us through phone, email, or chat (use the icon at the bottom left side of the website). One of our experienced travel advisors will connect with you to understand your needs, answer any questions, and begin crafting your perfect trip.",
        },
    ]


    return (
        <section>
            {/* page2 */}

            <div className="relative top-0">
                <div className="absolute top-0   grid md:grid-cols-2 gap-20">
                    {/* LEFT */}
                    <div>
                        <h1 className="text-[60px]">
                            FAQ'S
                        </h1>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col">


                        {faqs.map((item, index) => (

                            <div
                                key={index}
                                className="border-b border-[#cfc7be] py-4"
                            >

                                {/* QUESTION */}
                                <div
                                    onClick={() => setOpen(open === index ? null : index)}
                                    className="flex items-center justify-between cursor-pointer"
                                >

                                    <h2 className="text-[21px] text-[#3d2a1f]">
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
                                    <p className="text-[20px] leading-[36px] text-[#4d3b30] max-w-[850px]">
                                        {item.answer}
                                    </p>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>


        </section>
    )
}
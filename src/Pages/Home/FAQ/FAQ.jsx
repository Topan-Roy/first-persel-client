import React, { useState } from "react";

const faqs = [
    {
        question: "How does this posture corrector work?",
        answer:
            "It provides support and gentle alignment to your shoulders, back, and spine, encouraging proper posture throughout the day.",
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer:
            "Yes, the posture corrector is designed to fit comfortably for people of various ages and body types.",
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer:
            "Yes, consistent use can reduce pain and improve your posture by strengthening your muscles and reminding you to stay aligned.",
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer:
            "Yes, it comes with smart vibration alerts that remind you to correct your posture when you slouch.",
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer:
            "You will receive an email notification if you sign up for restock alerts on our website.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" mt-5 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-teal-700">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                        >
                            <span className="text-lg font-medium text-teal-900">{faq.question}</span>
                            <span className="text-teal-700 text-xl">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        {openIndex === index && (
                            <p className="pb-4 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;

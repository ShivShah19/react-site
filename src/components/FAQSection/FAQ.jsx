import React, { useState } from "react";
import "./FAQ.css";
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';

const faqs = [
    {
        question: "How does an investor gain access to MF Utility?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
        question: "Will investors be able to have multiple Common Account Numbers?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
        question: "How does an investor gain access to MF Utility?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2 className="faq-title">FAQ</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div
                        className={`faq-question ${openIndex === index ? "open" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <span>{faq.question}</span>
                        <span className="toggle-icon">{openIndex === index ? <img src={Minus} alt="Minus" /> : <img src={Plus} alt="plus" />}</span>
                    </div>
                    {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;

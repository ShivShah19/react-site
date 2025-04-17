import React from "react";
import "./EventSection.css";
import CardSection from "./CardSection";
import Calendar from '../../assets/Group 2645.svg'

const examDates = [
    {
        date: "02th October 2014",
        level: "Level 1 exam",
    },
    {
        date: "Nov–Dec 2016",
        level: "Level 2",
        extra: ["Lorem Ipsum", "Lorem Ipsum"],
    },
    {
        date: "Ongoing this year",
        level: "Level 3 (Grad)",
    },
];

const cards = Array(6).fill({
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod",
});

const EventSection = () => {
    return (
        <div className="exams-section">
            <div className="exams-header">
                <div className="exams-left">
                    <h2>Upcoming <span>Examinations</span></h2>
                    <p>Enquire about the examination & register for the exams</p>
                </div>
                <div className="exams-right">
                    {examDates.map((exam, i) => (
                        <div className="exam-block" key={i}>
                            <div className="icon"><img src={Calendar} alt="Calendar" /></div>
                            <div>
                                <h4>{exam.date}</h4>
                                <p>{exam.level}</p>
                                {exam.extra && exam.extra.map((line, idx) => (
                                    <p key={idx}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CardSection />
        </div>
    );
};

export default EventSection;

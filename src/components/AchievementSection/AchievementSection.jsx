import React from "react";
import "./AchievementSection.css";

const achievements = [
    {
        id: 1,
        heading: "Lorem ipsum",
        number: "123+",
        subheading: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
        id: 2,
        heading: "Lorem ipsum",
        number: "12+",
        subheading: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
        id: 3,
        heading: "Lorem ipsum",
        number: "12+",
        subheading: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
        id: 4,
        heading: "Lorem ipsum",
        number: "123",
        subheading: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
];

const AchievementSection = () => {
    return (
        <div className="outer-section">
            <section className="achievement-section">
                {achievements.map((item) => (
                    <div className="achievement-card" key={item.id}>
                        <div className="achievement-heading">{item.heading}</div>
                        <div className="achievement-number">{item.number}</div>
                        <div className="achievement-subheading">{item.subheading}</div>
                        <p className="achievement-description">{item.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AchievementSection;

import React from "react";
import "./CardSection.css";
import Arrow from '../../assets/Group 9275.svg'

const cards = [
    { id: 1, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
    { id: 2, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
    { id: 3, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
    { id: 4, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
];

const CardSection = () => {
    return (
        <div className="scroll-container">
            <div className="cards-wrapper">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                        <a className="know-more">
                            Know More <span className="arrow"><img src={Arrow} alt="Arrow" /></span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
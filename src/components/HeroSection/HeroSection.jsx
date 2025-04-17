import React from "react";
import "./HeroSection.css";
import Image from '../../assets/Mask Group 99.svg'
import RightArrow from '../../assets/Polygon 1.svg'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                </p>
                <button className="hero-button">Know More <span className="RightArrow"><img src={RightArrow} alt="RightArrow" /></span> </button>
            </div>
            <div className="hero-image">
                <img src={Image} alt="hero-section-image" />
            </div>
        </div>
    );
};

export default HeroSection;

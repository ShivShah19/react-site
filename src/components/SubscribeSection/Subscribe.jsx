import React from "react";
import "./Subscribe.css";
import SubImage from '../../assets/Mask Group 72.svg'
import RightArrow from '../../assets/Polygon 1.svg'

const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="subscribe-container">
                <div className="subscribe-content">
                    <h2>Subscribe</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna
                    </p>
                    <div className="subscribe-form">
                        <input
                            type="email"
                            placeholder="Enter your Email Address"
                            className="subscribe-input"
                        />
                        <button className="subscribe-button">
                            Subscribe Now <span className="arrow"><img src={RightArrow} alt="RightArrow" /></span>
                        </button>
                    </div>
                </div>
                <div className="subscribe-image">
                    <img
                        src={SubImage}
                        alt="Subscribe Illustration"
                    />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;

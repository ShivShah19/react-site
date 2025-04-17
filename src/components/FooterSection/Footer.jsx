import React from 'react';
import './Footer.css';

// Social Icons
import facebook from '../../assets/Icon awesome-facebook-f.png';
import linkedin from '../../assets/Icon awesome-linkedin.png';
import instagram from '../../assets/Icon awesome-instagram.png';
import twitter from '../../assets/Icon awesome-twitter.png';
import youtube from '../../assets/Icon awesome-youtube.png';
import quora from '../../assets/quora.png';

// Head Office Icons
import map from '../../assets/Icon material-location-on.png';
import clock1 from '../../assets/Group 17190.png';
import clock2 from '../../assets/Group 17191.png';
import train from '../../assets/Group 17156.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-overlay">
                <div className="footer-container">
                    <div className="footer-left">
                        <h3>Contact us</h3>
                        <p>Address: Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Email id: Lorem ipsum dolor sit amet.</p>
                        <p>Phone no: 123456789</p>
                    </div>

                    <div className="footer-center">
                        <h3>Follow us</h3>
                        <div className="social-icons">
                            <img src={facebook} alt="Facebook" />
                            <img src={linkedin} alt="LinkedIn" />
                            <img src={instagram} alt="Instagram" />
                            <img src={twitter} alt="Twitter" />
                            <img src={youtube} alt="YouTube" />
                            <img src={quora} alt="Quora" />
                        </div>
                    </div>
                    <div className="footer-right">
                        <h3>Head Office</h3>
                        <p><img src={map} alt="Map" /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minima! Excepturi repellat iste numquam impedit deserunt quis dolores, cum sapiente!</span></p>
                        <p><img src={clock1} alt="Clock1" /> <span>Lorem ipsum dolor sit amet, consetetur sadipscing</span></p>
                        <p><img src={clock2} alt="Clock2" /> <span>Lorem ipsum dolor sit amet, consetetur sadipscing </span></p>
                        <p><img src={train} alt="Train" /> <span>Lorem ipsum dolor sit amet, consetetur sadipscing </span></p>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© 2021 All Rights Reserved. Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
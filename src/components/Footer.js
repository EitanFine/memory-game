import React from "react"; // React
import "./Footer.css"; // Footer CSS

const Footer = () => (

    <footer className="footer">
        <div className="footerText">
            Memory Game | <a href="https://www.linkedin.com/in/luis-morel/" target="_blank" rel="noopener noreferrer">
                Copyright © 2018 Luis Morel</a>
        </div>
        <div className="footerImg">
            <img alt="React" src="assets/images/react.ico" />
            <span> A React App</span>
        </div>
        
    </footer>

);

export default Footer;

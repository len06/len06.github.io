import React from 'react';
import {FaGithub,FaLinkedin,} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'
import './Footer.css';


function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-socials">
                <h1 className="footer-contact">Contact:</h1>
                <div className="footer-links">
                    <a href="https://github.com/len06" className="footer-github">
                        <FaGithub size={23} /> 
                    </a>
                    <a href="https://www.linkedin.com/in/wei-yan-lennard-tan/" className="footer-linkedin">
                        <FaLinkedin size={23}/> 
                    </a>
                    <a href="mailto:wylt06@gmail.com" className="footer-gmail">
                        <SiGmail size={23} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
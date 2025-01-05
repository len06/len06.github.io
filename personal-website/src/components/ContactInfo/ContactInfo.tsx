import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './ContactInfo.css';

function ContactInfo(){
    return(
        <div className="contact-container">
            <h1 className="contact-header">My contacts 📫</h1>
            <div className="contact-list-wrapper">
                <ul className="contact-list">
                    <li>
                        <a href="https://github.com/len06" className="contact-github">
                            <FaGithub size={40} /> len06
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/wei-yan-lennard-tan/" className="contact-linkedin">
                            <FaLinkedin size={40}/> wei-yan-lennard-tan 
                        </a>
                    </li>
                    <li>
                        <a href="mailto:wylt06@gmail.com" className="contact-gmail">
                            <SiGmail size={40} /> wylt06@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInfo;
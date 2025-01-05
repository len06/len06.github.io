import React from 'react';
import ContactInfo from '../components/ContactInfo/ContactInfo.tsx';
import '../styles/contact.css';

function Contact(){
    return (
    <>
    <div className="contact-main">
        <div className="contact-card-wrapper">
        <ContactInfo className="contact-card"/>
        </div>
        <img src='/Contact_image/mail.jpg' alt="street_light" className="contact-img"></img>
    </div>
    </>
    )
}

export default Contact;
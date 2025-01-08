import React from 'react';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import '../styles/contact.css';

function Contact(){
    return (
    <>
    <div className="contact-main">
        <div className="contact-card-wrapper">
        <ContactInfo />
        </div>
        <img src='Contact_image/mail.jpg' alt="street_light" className="contact-img"></img>
    </div>
    </>
    )
}

export default Contact;
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
        <img src={`${process.env.PUBLIC_URL}/Contact_Image/mail.jpg`} alt="street_light" className="contact-img"></img>
    </div>
    </>
    )
}

export default Contact;
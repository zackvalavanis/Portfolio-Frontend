import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export function Contact() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_APP_PUBLIC_ID,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email has been successfully sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return ( 
    <div className='contact-form'>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-item">
            <label>Name:</label>
            <input name='user_name' type='text' required />
          </div>
          <div className="input-item">
            <label>Email:</label>
            <input name='email' type='email' required />
          </div>
        </div>
        <div className="input-group">
          <div className="input-item">
            <label>Phone Number:</label>
            <PhoneInput
              name='phone-number'
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder='Phone number'
            />
          </div>
        </div>
        {/* Message section separated at the bottom */}
        <div className="message-section">
          <label>Message:</label>
          <textarea name='message' placeholder='Message...' required />
        </div>
        <div className="submit-button">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

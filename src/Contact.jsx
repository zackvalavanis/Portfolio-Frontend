import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import 'react-phone-number-input/style.css';


export function Contact() {
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
      <h1>Contact Me</h1>
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
        </div>
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

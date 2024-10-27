import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react'

export function Contact () {
  const [ phoneNumber, setPhoneNumber ] = useState("");

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
          alert("Email has been successfully sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return ( 
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <div>
        Name: <input name='user_name' type='text' required></input>
        </div>
        <div>
        Email: <input name='email' type='text' required/>
        </div>
        <div>
          <PhoneInput
          type='text'
          name='phone-number'
          value={phoneNumber}
          onChange={setPhoneNumber}
          placeholder='phone number'
          />
        </div>
        <div>
        <textarea name='message' type='text' placeholder='Message...' required/>
        </div>
        <input type="submit" value="Send" required/>
      </form>
    </div>
  )
}
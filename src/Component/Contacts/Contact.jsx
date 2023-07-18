import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

   const form = useRef();

   const [done , setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xifmi6g', 'template_09xhoe8', form.current, 'bqYViZynSHDDylwEi')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          resetForm();
      }, (error) => {
          console.log(error.text);
      });
  };

   const resetForm = () => {
    form.current.reset();
  };
  return (
    <div className="contact-form">
      <div className="left">
        
        <span id="contact">Contact Me</span>
        <span>Lets have a chat</span>
         <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        
      </div>
      <div className="right">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
        <input type="text" name="user_name" className="user" placeholder="Name"/>
        <label>Email</label>
        <input type="email" name="user_email" className="user" placeholder="Email"/>
        <label>Subject</label>
        <input type="text" name="subject" className="user" placeholder="Subject"/>
        <label>Message</label>
        <textarea name="message"  className="user" placeholder="Type your message"/>
        <input type='submit'className='button s-button' value="Send"></input>
       <span style={{color:"blue"}}>{done && "Thanks for contacting me!"}</span>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </form>
      </div>
    </div>
  )
}

export default Contact

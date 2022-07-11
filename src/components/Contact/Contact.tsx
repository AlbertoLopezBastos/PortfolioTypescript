import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Section from '../ui/Section';
import s from './Contact.module.css';

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);
  
  const sendEmail = (e :any) => {
    e.preventDefault();
    
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE || '', process.env.REACT_APP_EMAILJS_TEMPLATE || '', form.current || '', process.env.REACT_APP_EMAILJS_USER || '')
    .then((result : any) => {
        alert(`I will contact you soon!, ${result}`);
        e.target.reset();
    }, (error : any) => {
        console.log(error.text);
    });
  };

  return (
    <section id="contact" className={s.contact}>
      <div className={s.title}>Contact me</div>

      <div className={s.content}>
        <h4 className={s.headingFour}>Have a question or want to work together?</h4>

        <form className={s.form} ref={form} id="contact-form"  onSubmit={sendEmail}>
          <input className={s.inputName} type="text" name="user_name" placeholder="Name" required/>

          <input className={s.inputEmail} type="email"  name="user_email" placeholder="Enter your email" required/>

          <textarea className={s.textArea} rows={20} name="message" placeholder="Your Message" required />
          
          <input className={s.btn} type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );

};

export default Contact;
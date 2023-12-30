
import { useRef } from 'react';
import s from './Contact.module.css';
import Button from '../ui/Button'

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);
  


  return (
    <section id="contact" className={s.contact}>

      <div className={s.content}>
        <h4 className={s.title}>Let's work <span className='textGradient'>together.</span></h4>
        <h3 className={s.mail}>alberto.lopezbastos@gmail.com</h3>          
        <Button title='Contact me' href='mailto:alberto.lopezbastos@gmail.com'/>
      </div>
    </section>
  );

};

export default Contact;
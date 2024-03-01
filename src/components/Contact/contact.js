import React , { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon  from '../../assets/youtube.png';
import InstagramIcon  from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_gb5v88g', 'template_5wo7v5e', form.current, {
            publicKey: 'ibqLye_XBsbIaV6gS',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent :) ');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'> My Clients</h1>
            <p className='clientDesc'>No Clients Yet :(</p><br/>
            <p className='clientDesc'>But I still desire the opportunity to work with Some of these notable companies.</p>
            <div className='clientImgs'>
                <img  src={Adobe} alt = 'Adobe' className='clientImg' />
                <img  src={Facebook} alt = 'Facebook' className='clientImg' />
                <img  src={Walmart} alt = 'Walmart' className='clientImg' />
                <img  src={Microsoft} alt = 'Microsoft' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}> 
                <input type='text' className="name" placeholder='Your Name' name='from_name' />
                <input type='email' className="email" placeholder='Your Email' name='from_email' />
                <textarea className="msg" name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link' />
                    <img src={TwitterIcon} alt='Twitter' className='link' />
                    <img src={YoutubeIcon} alt='Yt' className='link' />
                    <img src={InstagramIcon} alt='Instagram' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
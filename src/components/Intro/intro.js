import React from 'react'
import './intro.css';
import bg from  "../../assets/newIntro.png";
import btnImg from "../../assets/hireme.png"
import { Link } from 'react-scroll';
function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'> Raghav</span> <br /> Website Designer</span>
            <p className='introPara'>I am a skilled Web Developer with a keen interest in creating <br /> and developing visually appealing websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg' />Hire Me!</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
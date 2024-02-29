import React from 'react'
import './skills.css'
import UIDesign from  "../../assets/ui-design.png";
import webDesign from  "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png"

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as Android application design.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div  className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Crafting seamless user experiences with intuitive interfaces, my UI/UX designs captivate and engage, setting a standard for innovation and user-centricity.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webDesign} alt='WebDesign' className='skillBarImg'/>
                <div  className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Crafting captivating digital experiences with precision and creativity, showcasing expertise in website design that captivates and engages audiences effortlessly.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='App Design' className='skillBarImg'/>
                <div  className="skillBarText">
                    <h2>App Design</h2>
                    <p>Mastering Android Application design, crafting intuitive interfaces that seamlessly blend functionality with elegance, setting a new standard in user experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
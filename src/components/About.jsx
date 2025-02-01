import React from 'react';
import Skills from './Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../components/LottieFiles/coder.json';
const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Sahil Khan</b> and I am from Lucknow, India.
            I'm a <b>Frontend web developer</b> and i recently completed my <b>Bachelor of Technology</b>. <br/><br/>
            Alongside my frontend development skills, I have hands-on experience in <b>Frontend development</b>, have doing internship from 2 months at Learn and Build. I am passionate about creating Web pages, responsive websites and user interface (UI) and ensuring a seamless user experience (UX) by using technologies such as HTML, CSS, and JavaScript. <br /><br />I am currently seeking opportunities to further develop my skills and contribute to impactful projects."
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
           
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='HTML5' />
        <Skills skill='Css3' />
        <Skills skill='Tailwind' />
        <Skills skill='React' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About
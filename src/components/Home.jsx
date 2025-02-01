import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "./LottieFiles/SpaceBoy.json";
import Typed from "./Typed";
import Tilt from 'react-parallax-tilt';
import Avatar from '../assets/images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Sahil Khan</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I’m a <b>frontend developer </b> with a Bachelor’s degree in Computer Science and Engineering from Babu Banarasi Das Northern India Institute of Technology.<br /><br />
          I’m skilled in <b>HTML, CSS,</b> and <b> JavaScript </b>, which I use to create responsive and engaging web pages. I’m also proficient in React for building dynamic user interfaces and Bootstrap for quickly designing mobile-friendly websites.<br />
          I’m working in a company as an Full Stack developer (Intern) at <b>Learn & Build Technologies</b>, where I contribute to various projects involving the development of user-facing features. Through this internship, I have gained valuable experience working in an agile environment, managing version control with Git, and applying modern front-end development tools and frameworks. I’m eager to apply my skills in a real-world setting and am actively looking for a job or internship to continue learning and growing.<br/><br/>
            I plan to learn <b>Next.js</b>, <b>Node.js</b> ,<b>Express.js</b>and <b>MongoDB</b> in the near future. <br /><br />
             
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
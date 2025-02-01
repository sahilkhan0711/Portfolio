import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub,FaHtml5,  FaCss3Alt ,FaNpm, FaBootstrap, } from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skills = ({skill}) => {
    const icon = {
        HTML5:<FaHtml5 />,
        Css3:<FaCss3Alt />,
        Tailwind:<BiLogoTailwindCss />,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills

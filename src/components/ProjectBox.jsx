import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Resume_Maker:"A resume maker project is a web application that allows users to create, customize, and download professional resumes by selecting templates, entering personal information, and arranging content in a user-friendly interface.",
   Resume_MakerGithub :"https://github.com/faiz1004/Resume-Maker",

    To_Do_App : "A to-do app project is a web or mobile application that enables users to create, manage, and organize tasks or to-do lists, allowing them to track their progress and set reminders for completion.",
    To_Do_AppGithub : "https://github.com/faiz1004/To-Do-App",
    
   
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" style={{height:"15rem"}} /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

        </div>
    </div>
  )
}

export default  ProjectBox
import React from 'react';
import ProjectBox from './ProjectBox';
import resumeImage from '../assets/images/resumeImage.jpg';
import TodoImage from '../assets/images/TodoImage.jpg';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={resumeImage} projectName="Resume_Maker" />
        <ProjectBox projectPhoto={TodoImage} projectName="To_Do_App" />
         
       
      </div>

    </div>
  )
}

export default Projects
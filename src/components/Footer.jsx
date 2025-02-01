import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sahil Khan</h4>
      <h4>Copyright &copy; 2024 SK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/sahilkhan0711" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sahil-khan-962a8824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sk3632832@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/khan_saheb_07?utm_source=qr&igsh=MTloNHE0OXMzZTRsOQ==" target="_blank"><FaInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer
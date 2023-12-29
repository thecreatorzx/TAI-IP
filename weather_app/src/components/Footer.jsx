import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer'>
      Thanks &hearts; Goodbye!
      I made this app using HTML, CSS and React JS (vite); <br/>
      Connect with me :<br/>
      <a href="http://github.com/thecreatorzx"><FaGithub size={"1.5rem"}/></a>
      <a href="http://www.linkedin.com/in/webdevmsaad"><FaLinkedin size={"1.5rem"}/></a>
    </div>
  )
}

export default Footer
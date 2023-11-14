import React from 'react'
import "./name.css";
const welcome = () => {
  return (
    <div id='welcome'>
                <div id='name-tag'>
                    <span class="name">Namaste, John P.</span><br></br>
                    <span class="task">Let’s Track all your students</span>
                    </div>
                    <div id='create-plan'><p >Create Plan</p>
                    <img id='arrowRight' src='/arrowRight.svg' alt="arrow" /></div>
            </div> 
  )
}

export default welcome;
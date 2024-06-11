import React from 'react'
import './HeaderC.css'
import logo from '../Assets/logo.png'

const HeaderC = () => {
  return (
    <div className='headerA-main'>
        <div id='logoB'><img src={logo} alt="" /></div>
        <div className='nav-tagsC'>
            <p id='hometag'>Home</p>
            <p id='storytag'>Our Story</p>
            <p id='coursetag'>Course Page</p>
            <p id='comtag'>Community</p>
            <p id='talktag'>Talk To Us</p>
        </div>
        <div><input type="text" placeholder='Search' id='input-tagC'/></div>
        <div><button id='upbtn'><strong>Sign Up</strong></button></div>
        <div><button id='inbtn'><strong>Sign In</strong></button></div>
    </div>
  )
}

export default HeaderC
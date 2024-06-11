import React from 'react'
import './HeaderB.css'
import logo from '../Assets/logo.png'

const HeaderB = () => {
  return (
    <div className='headerA-main'>
        <div id='logoB'><img src={logo} alt="" /></div>
        <div id='headerB'><h1>Roullez.</h1></div>
        <div className='nav-tagsB'>
            <p id='hometag'>Home</p>
            <p id='storytag'>Our Story</p>
            <p id='coursetag'>Course Page</p>
            <p id='comtag'>Community</p>
            <p id='talktag'>Talk To Us</p>
        </div>
        <div><button id='startBtn'><strong>Get Started</strong></button></div>
    </div>
  )
}

export default HeaderB
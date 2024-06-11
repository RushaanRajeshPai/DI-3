import React from 'react'
import './HeaderE.css'
import logo from '../Assets/logo.png'
import circles from '../Assets/circles.png'
import line from '../Assets/line.png'

const HeaderE = () => {
    return (
        <div className='headerD-main'>
            <div className='headerEtop'>
                <div id='logoB'><img src={logo} alt="" /></div>
                <div id='headerE'><h1>Roullez.</h1></div>
                <div id='circlesE'><img src={circles} alt="" /></div>
            </div>
            <div className='headermid'><img src={line} alt="" /></div>
            <div className='headerEbottom'>
                <div className='nav-tagsE'>
                    <p id='hometag'>Home</p>
                    <p id='storytag'>Our Story</p>
                    <p id='coursetag'>Course Page</p>
                    <p id='comtag'>Community</p>
                    <p id='talktag'>Talk To Us</p>
                </div>
                <div><input type="text" placeholder='Enter Email' id='input-tagE' /></div>
                <div><button id='subBtn'>Subscribe</button></div>
            </div>
        </div>
    )
}

export default HeaderE
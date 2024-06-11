import React from 'react'
import './HeaderA.css'
import logo from '../Assets/logo.png'
import icons from '../Assets/icons.png'
import avatar from '../Assets/avatar.png'

const HeaderA = () => {
  return (
    <div className='headerA-main'>
        <div><img src={logo} alt="" id='logo'/></div>
        <div><input type="text" placeholder='Search' id='input-tag'/></div>
        <div className='nav-tags'>
            <p id='hometag'>Home</p>
            <p id='storytag'>Our Story</p>
            <p id='coursetag'>Course Page</p>
            <p id='comtag'>Community</p>
            <p id='talktag'>Talk To Us</p>
        </div>
        <div><img src={icons} alt="" id='icons'/></div>
        <div><img src={avatar} alt="" id='avatar'/></div>
    </div>
  )
}

export default HeaderA
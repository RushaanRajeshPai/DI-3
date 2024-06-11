import React from 'react'
import './HeaderD.css'
import logo from '../Assets/logo.png'
import circles from '../Assets/circles.png'
import line from '../Assets/line.png'

const HeadersD = () => {
  return (
    <div className='headerD-main'>
      <div className='headertop'>
        <div id='logoB'><img src={logo} alt="" /></div>
        <div id='headerD'><h1>Roullez.</h1></div>
        <div><input type="text" placeholder='Search' id='input-tagD' /></div>
        <div id='circles'><img src={circles} alt="" /></div>
      </div>
      <div className='headermid'><img src={line} alt="" /></div>
      <div className='headerbottom'>
        <div className='nav-tagsD'>
          <p id='hometag'>Home</p>
          <p id='storytag'>Our Story</p>
          <p id='coursetag'>Course Page</p>
          <p id='comtag'>Community</p>
          <p id='talktag'>Talk To Us</p>
        </div>
      </div>
    </div>
  )
}

export default HeadersD
import React from 'react'

import logo from "../images/logo.png";

const nav = () => {
  return (
    <nav>
      <div className="image-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="links-wrapper"></div>
    </nav>
  )
}

export default nav

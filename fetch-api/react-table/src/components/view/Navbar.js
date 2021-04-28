import React from 'react'
import './Navbar.css'
function NavBar(props) {

    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <input type="text" placeholder="Search By Id" value={props.data} onChange={props.callback}  />
      </div>
    )
}

export default NavBar;

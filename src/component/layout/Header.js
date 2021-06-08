import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';

const Header = (props) => {
  return (
    <div>
    <Nav>
        <Bars />
        
        <NavMenu>
          <NavLink to='/' activeStyle style={{textDecoration: 'none'}}>
            Home
          </NavLink>
          <NavLink to='/youtube' activeStyle style={{textDecoration: 'none'}}>
            YouTube Video
          </NavLink>
          {/* <NavLink to='/about-us' activeStyle style={{textDecoration: 'none'}}>
            About Us
          </NavLink>
          <NavLink to='/add-review' activeStyle style={{textDecoration: 'none'}}>
            Add Review
          </NavLink>
          <NavLink to='/users' activeStyle style={{textDecoration: 'none'}}>
            Users
          </NavLink> */}
          </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/' style={{textDecoration: 'none'}}>Welcome to Technology</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </div>
  );
}

export default Header;
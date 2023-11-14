import React from "react";
import { Link } from 'react-router-dom';
import Shopping from "../assets/shopping-bag.svg";
import "./header.scss";

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='#'>
      <div>logo</div>
    </Link>
    <div className='options'>
      <Link className='option' to='#'>
        SHOP
      </Link>
      <Link className='option' to='#'>
        CONTACT
      </Link>
      <img src={Shopping} alt="shopping cart icon" style={{width: '45px', height: '45px', paddingRight: "5px" }}/>
    </div>
  </div>
);

export default Header
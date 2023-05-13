import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineModeOfTravel } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-dom';

const Navbar = () => {


  const [active, setActive] = useState(false);

  const showNav = () =>{
      setActive(!active)
  }

  const removeNav = () =>{
      setActive(false);
  }


return (
  <section className='navBarSection'>
      <header className='header flex'>
          <div className='logoDiv'>
              <a href='#' className='logo flex'>
                  <MdOutlineModeOfTravel className='icon'/>
                  <h1>travelcom</h1>
              </a>
          </div>
          <div className={ active ? 'navbar activeNavbar' : 'navbar'}>
              <ul className='navLists flex'>
                  <li className='navItem'>
                      <a href='#' className='navLink'>Home</a>
                  </li>
                  <li className='navItem'>
                      <a href='#' className='navLink'>Packages</a>
                  </li>
                  <li className='navItem'>
                      <a href='#' className='navLink'>Shop</a>
                  </li>
                  <li className='navItem'>
                      <a href='#' className='navLink'>About</a>
                  </li>
                  <li className='navItem'>
                      <a href='#' className='navLink'>Pages</a>
                  </li>
                  <li className='navItem'>
                      <a href='#' className='navLink'>News</a>
                  </li>
                  <li className='navItem'>
                      <a href='#' className='navLink'>Contact</a>
                  </li>

                  <button className='btn'>
                      <a href='#' >Book Now</a>
                  </button>
              </ul>
              <div className='closeNavbar' onClick={removeNav}>
                  <AiFillCloseCircle className='icon'/>
              </div>
          </div>

          <div className="toggleNavbar" onClick={showNav}>
              <TbGridDots className='icon'/>
          </div>
      </header>

  </section>
)
}

export default Navbar

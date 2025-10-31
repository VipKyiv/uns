"use client";
import { useEffect, useState} from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Element } from "react-scroll";
import logo from '../../src/assets/Moneta_1.png'
import './navbar.css';

const  Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  const handleBurgerMenuClick = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  }
  return (
    <nav className='container'>
      <img src={logo.src} alt='logo' className='logo'/>
      <ul className={`${isMobileMenuVisible ? '' : 'hide-mobile-menu'} ${sticky ? 'blur': ''}`}>
        <li className='menu-item'>
          <Link to="hero" smooth={true} offset={0} duration={500}>Головна</Link> 
        </li>
        <li className='menu-item'>
          <Link to="about" smooth={true} offset={-100} duration={500}>Про нас</Link>
        </li>
        <li className='menu-item'>
          <Link to="events" smooth={true} offset={-200} duration={500}>Події</Link>

        </li>
        <li className='menu-item'>
          <Link to="partners" smooth={true} offset={-180} duration={500}>Партнери</Link>

        </li>
        <li className='menu-item'>
          <Link to="testimonials" smooth={true} offset={-150} duration={500}>Відгуки</Link>

        </li>
        <li className='menu-item'>
          <Link to="contact" smooth={true} offset={-150} duration={500}>Контакти</Link>
        </li>
        <li>
          <button className='btn'>
            <FaCircleArrowRight className='left-arrow'/>
            Зробити внесок
          </button>
        </li>
      </ul>
      <GiHamburgerMenu className='burger-menu' onClick={handleBurgerMenuClick}/>
    </nav>
  )
}

export default Navbar

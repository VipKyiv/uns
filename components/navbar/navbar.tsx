"use client";
import { useEffect, useState, useRef, MouseEvent} from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Element } from "react-scroll";
import {SourceType, SourceDataType} from '@/lib/types';
import logo from '../../src/assets/Moneta_1.png'
import './navbar.css';

const MenuItemsData = [
    { 
      linkTo: 'hero',
      offset: 0,
      duration: 500,
      value: 'Головна'  
    },
    { 
      linkTo: 'about',
      offset: -100,
      duration: 500,
      value: 'Про нас'  
    },
    { 
      linkTo: 'events',
      offset: -200,
      duration: 500,
      value: 'Події'  
    },
    // { 
    //   linkTo: 'partners',
    //   offset: -180,
    //   duration: 500,
    //   value: 'Партнери'  
    // },
    { 
      linkTo: 'testimonials',
      offset: -150,
      duration: 500,
      value: 'Відгуки'  
    },
    { 
      linkTo: 'contact',
      offset: -150,
      duration: 500,
      value: 'Контакти'  
    },

]


const  Navbar = ({onContributeButtonClick} : {onContributeButtonClick:(srcData:SourceDataType) => void}) => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const menu = useRef<HTMLUListElement | HTMLUListElement | null>(null);
  const burgerMenuIcon = useRef<HTMLDivElement>(null);

  // useEffect(()=>{
  //  const scrollY = () => {
  //     window.scrollY > 50 ? setSticky(true) : setSticky(false);
  //    }
  //   window?.addEventListener('scroll', scrollY);
  //  return() => {
  //    window?.removeEventListener('scroll', scrollY);
  //  }
  // },[])

  useEffect(()=>{
    document.addEventListener("click", handleBurgerMenuClose);
    window?.addEventListener('scroll', scrollY);
    return() => {
      window?.removeEventListener('scroll', scrollY);
      document.removeEventListener("click", handleBurgerMenuClose);
    }
    
  });

  const handleBurgerMenuClose = (e:any) => {
     if(isMobileMenuVisible){
       if (!menu.current?.contains(e.target)) {
         setIsMobileMenuVisible(false);
       }
     }
  }
  const scrollY = () => {
      window?.scrollY > 50 ? setSticky(true) : setSticky(false);
  }

  const handleBurgerMenuItemClick = () => {
    if(isMobileMenuVisible)
      setIsMobileMenuVisible(false);
  }
  const handleBurgerMenuIconClick = () => {
    if(!isMobileMenuVisible)
      setIsMobileMenuVisible(true);
  }

  return (
    <nav className='container'>
      <img src={logo.src} alt='logo' className='logo'/>
      <ul ref={menu} className={`${isMobileMenuVisible ? 'mobile-menu' : 'hide-mobile-menu'} ${sticky ? 'blur': ''}`}>
        {MenuItemsData.map((item, index) => (
          <li key={index}  className='menu-item'>
            <Link to={item.linkTo} smooth={true} offset={item.offset} duration={item.duration} onClick={handleBurgerMenuItemClick}>
             {item.value}
            </Link>
          </li>
        ))}
        <li>
          <button className='btn' onClick={() => onContributeButtonClick({type:SourceType.paymentData, data:''})}>
            <FaCircleArrowRight className='left-arrow'/>
            Зробити внесок
          </button>
        </li>
      </ul>
      <div ref={burgerMenuIcon}  onClick={handleBurgerMenuIconClick}>
        <GiHamburgerMenu className='burger-menu'/>
      </div>
    </nav>
  )
}

export default Navbar

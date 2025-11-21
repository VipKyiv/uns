"use client";
import { useEffect, useState, useRef} from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Element } from "react-scroll";
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


const  Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const menu = useRef<HTMLUListElement | HTMLUListElement | null>(null);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
    
  },[])
  
  useEffect(() => {
    if (isMobileMenuVisible) {
      const handler = (e:any) => {
        if(!menu.current?.contains(e.target)) {
          setIsMobileMenuVisible(false);
        }
      };  
      document.addEventListener("mousedown", handler);
      return() => {
        document.removeEventListener("mousedown", handler);
      }
    }
  });


  const handleBurgerMenuClick = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  }

  const handleBurgerMenuItemClick = () => {
    if(isMobileMenuVisible)
      setIsMobileMenuVisible(false);
  }

  return (
    <nav className='container'>
      <img src={logo.src} alt='logo' className='logo'/>
      <ul  ref={menu} className={`${isMobileMenuVisible ? 'mobile-menu' : 'hide-mobile-menu'} ${sticky ? 'blur': ''}`}>
        {MenuItemsData.map((item, index) => (
          <li key={index}  className='menu-item'>
            <Link to={item.linkTo} smooth={true} offset={item.offset} duration={item.duration} onClick={handleBurgerMenuItemClick}>
             {item.value}
            </Link>
          </li>
        ))}
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

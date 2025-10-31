import { GoArrowRight } from "react-icons/go";
import logo_1 from '../../src/assets/aston-villa-fc.svg'
import logo_2 from '../../src/assets/commodore-logo.svg'
import logo_3 from '../../src/assets/guinness-8.svg'
import logo_4 from '../../src/assets/jacksonville-jaguars-1.svg'
import logo_5 from '../../src/assets/polski-fiat-logo.svg'
import logo_6 from '../../src/assets/jacksonville-tomcats.svg'
import './partners.css';

const Partners = () => {
  return (
    <div className='partners'>
    <div className='grid'>
        <div className='cell'>
          <img src={logo_1.src} alt='logo' className='logo-p'/>
        </div>
        <div className='cell'>
          <img src={logo_2.src} alt='logo' className='logo-p'/>
        </div>
        <div className='cell'>
          <img src={logo_3.src} alt='logo' className='logo-p'/>
        </div>
        <div className='cell'>
          <img src={logo_4.src} alt='logo' className='logo-p'/>
        </div>
        <div className='cell'>
          <img src={logo_5.src} alt='logo' className='logo-p'/>
        </div>
        <div className='cell'>
          <img src={logo_6.src} alt='logo' className='logo-p'/>
        </div>
    </div>
    <button className='btn'>Показати ще <GoArrowRight/></button>
</div>
  )
}

export default Partners

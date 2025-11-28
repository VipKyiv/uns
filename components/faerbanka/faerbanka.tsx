import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";
import logo from '../../src/assets/faerbanka/fb_logo.png'
import gallery_1 from '../../src/assets/faerbanka/fb_photo_1.jpg';
import gallery_2 from '../../src/assets/faerbanka/fb_photo_2.jpg';
import gallery_3 from '../../src/assets/faerbanka/fb_photo_5.jpg';
import gallery_4 from '../../src/assets/faerbanka/fb_photo_4.jpg';

import './faerbanka.css';

const FaerBanka = () => {
  return (
    <div className='faerbanka'>
      <div className='faerbanka-about'>
        <div className="faerbanka-left">
          <h3> ФАЄРБАНКА це проект по виробництву маскувальних димів.</h3>
          <h3> В армії на даний час є велика потреба в МД, що використовуються для:</h3>
          <ul>
            <li> евакуації </li>
            <li> штурмових дій </li>
            <li> маскування переміщення техніки і особового складу </li>
            <li> фіктивних цілей </li>
            <li> імітації підбитої техніки </li>
            <li> захисту від дронів </li>
          </ul>
        </div>
        <div className="faerbanka-right">
          <Image src={logo} alt="" width={250} height={250} className='faerbank-about-img' />
        </div>
      </div>
      <div  className='faerbanka-gallery'>
        <img src={gallery_1.src} alt='' />
        <img src={gallery_2.src} alt='' />
        <img src={gallery_3.src} alt='' />
        <img src={gallery_4.src} alt='' />
      </div> 
      <button className='btn'>Тут більше ...<GoArrowRight/></button>
    </div>
  )
}

export default FaerBanka

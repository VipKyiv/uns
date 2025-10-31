"use client";
import { useRef} from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import user_1 from '../../src/assets/photo_1.png';
import user_2 from '../../src/assets/photo_2.png';
import user_3 from '../../src/assets/photo_3.png';
import user_4 from '../../src/assets/photo_4.png';
import './testimonials.css';

const Testimonials = () => {
  const slider = useRef<HTMLUListElement | HTMLUListElement | null>(null);
  let tx = 0;
  const handleBack = () => {
    if (tx < 0)
        tx += 25;
    if (slider.current)
      slider.current.style.transform = `translateX(${tx}%)`;

  }  
  const handleForward = () => {
    if (tx > -50)
        tx -= 25;
    if (slider.current)
      slider.current.style.transform = `translateX(${tx}%)`;
  }  

  return (
    <div className='testimonials'>
      <IoIosArrowDropleft className="prev-btn" onClick={handleBack}/>
      <IoIosArrowDropright className="next-btn" onClick={handleForward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1.src} alt='' />
                        <div>
                            <h3>Горлиця</h3>
                            <span>Пілот БПЛА</span>
                        </div>
                    </div>
                    <p> відзив першого користувача відзив першого користувачавідзив першого користувачавідзив першого користувача
                        відзив першого користувачавідзив першого користувачавідзив першого користувачавідзив першого користувача
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2.src} alt='' />
                        <div>
                            <h3>Смайл</h3>
                            <span>Снайпер</span>
                        </div>
                    </div>
                    <p> відзив першого користувача відзив першого користувачавідзив першого користувачавідзив першого користувача
                        відзив першого користувачавідзив першого користувачавідзив першого користувачавідзив першого користувача
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3.src} alt='' />
                        <div>
                            <h3>Шумахер</h3>
                            <span>Водій</span>
                        </div>
                    </div>
                    <p> відзив третього користувача відзив третього користувачавідзив третього користувачавідзив третього користувача
                        відзив третього користувачавідзив третього користувачавідзив третього користувачавідзив третього користувача
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4.src} alt='' />
                        <div>
                            <h3>Рембо</h3>
                            <span>Штурмовик</span>
                        </div>
                    </div>
                    <p> відзив четвертого  користувач  четвертого користувачавідзив четвертого користувачавідзив четвертого користувача
                        відзив четвертого того користувачавідзив четвертого користувачаві четвертого користувача четвертого користувача
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials;

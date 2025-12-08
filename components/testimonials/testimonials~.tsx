"use client";
import { useState, useRef, RefObject} from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";
import {SourceType, SourceDataType} from '@/lib/types';

import './testimonials.css';

const TestimonialsData = [
    { 
      video: 'videos/testimonials/IMG_7621.MP4',
      image: 'videos/testimonials/IMG_7621.jpg',
      text: 'Висловлюємо подяку хлопцям з фонду УНС за чергову і своєчасну допомогу.'  
    },
    { 
      video: 'videos/testimonials/IMG_7622.mp4',
      image: 'videos/testimonials/IMG_7622.jpg',
      text: 'Дякуємо фонду УНС та компанії Globallogic за РЕБи та Старлінки.'  
    },
    { 
      video: 'videos/testimonials/IMG_7623.mp4',
      image: 'videos/testimonials/IMG_7623.jpg',
      text: 'Хочемо висловити велику подяку від нашого підрозділу за оперативний збір та закупівлю двох РЕБів.'  
    },
    { 
      video: 'videos/testimonials/IMG_7624.mp4',
      image: 'videos/testimonials/IMG_7624.jpg',
      text: 'Дякуємо хлопцям з фонду УНС за придбаний ними Старлінк та три чудових смартфони.'  
    },
]

const Testimonials = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {
  const [delta, setDelta] = useState<number>(0);  
  const slider = useRef<HTMLUListElement | HTMLUListElement | null>(null);

  const handleBack = () => {
    let currentDelta = delta;
    if (currentDelta < 0) {
      currentDelta += 25;  
      if (slider.current)
        slider.current.style.transform = `translateX(${currentDelta}%)`;
      setDelta(currentDelta);
    }

  }

  const handleForward = () => {
    let currentDelta = delta;
    if (currentDelta > -(maxDelta(slider))) {
      currentDelta -= 25; 
      if (slider.current)
        slider.current.style.transform = `translateX(${currentDelta}%)`;
      setDelta(currentDelta);

    }
  }  
  const maxDelta = (ref: RefObject<HTMLUListElement | null>) => 
    (ref.current && ref.current?.offsetHeight < 300) ? 75 : 50;

  const handlePlayButton = (index:number) => {
    onPlayButtonClick({type:SourceType.video, data:TestimonialsData[index].video});
  }  


  return (
    <div className='testimonials'>
      {delta < 0 && <IoIosArrowDropleft className="prev-btn" onClick={handleBack} />}
      {delta > -(maxDelta(slider)) && <IoIosArrowDropright className="next-btn" onClick={handleForward}/>}
      <div className="slider">
        <ul ref={slider}>
            {TestimonialsData.map((item, index) => (
              <li key={index}>
                <Slide index={index} onPlayButtonClick={handlePlayButton}/>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

function Slide({index, onPlayButtonClick}:{index:number, onPlayButtonClick: (index:number) => void}) {
  return(
    <div className="sliderss-container">
    <div className="list-item">
        <div className="item-left">
            <img src={TestimonialsData[index].image} alt='' />
            <FaRegPlayCircle className='play-icon' onClick={()=>onPlayButtonClick(index)}/>
        </div>
        <div className="item-right"> {TestimonialsData[index].text}</div>
    </div>
    <div className="list-item">
        <div className="item-left">
            <img src={TestimonialsData[index].image} alt='' />
            <FaRegPlayCircle className='play-icon' onClick={()=>onPlayButtonClick(index)}/>
        </div>
        <div className="item-right"> {TestimonialsData[index].text}</div>
    </div>

    </div>
  );
}


export default Testimonials;

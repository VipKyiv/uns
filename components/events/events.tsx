import './events.css';
import { GoArrowRight } from "react-icons/go";
import gallery_1 from '../../src/assets/gallery-1.jpg';
import gallery_2 from '../../src/assets/gallery-2.jpg';
import gallery_3 from '../../src/assets/gallery-3.jpg';
import gallery_4 from '../../src/assets/gallery-4.jpg';

const Events = () => {
  return (
    <div className='events'>
      <div  className='gallery'>
        <img src={gallery_1.src} alt='' />
        <img src={gallery_2.src} alt='' />
        <img src={gallery_3.src} alt='' />
        <img src={gallery_4.src} alt='' />
      </div>
      <button className='btn'>Тут більше ...<GoArrowRight/></button>
    </div>
  )
}

export default Events

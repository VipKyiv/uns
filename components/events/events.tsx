import { galleryData } from './data'; 
import { FaRegPlayCircle } from "react-icons/fa";
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import {SourceType, SourceDataType} from '@/lib/types';
import './events.css';

const Events = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {

  const imageList:React.JSX.Element[] = [];
  if(galleryData.length > 4) {
    for (let i = 0; i < 4; i++) {
      imageList.push(
        <>
          <Image key={i} src={galleryData[i].image} alt={galleryData[i].image} 
               fill 
              //  sizes="(max-width: 768px) 25vw, 25vw"
               style={{ objectFit: "cover", borderRadius:"5px"}}
               sizes="(max-width: 945px) 50vw, 50vw"
               onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:JSON.stringify(galleryData), index:i})}/> 
            {galleryData[i].video &&  
              <FaRegPlayCircle className='play-icon' onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:JSON.stringify(galleryData), index:i})}/> }
        </>
      );
    }
  }

  return (
    <div className='events'>
      <div  className='adaptive-image-container'>
        {imageList.map((item, index) => (
          <div key={index} className="image-wrapper" > 
            {item}
          </div>
        ))}
      </div> 
      <button className='btn'  onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:JSON.stringify(galleryData)})}>
        Тут більше ...<GoArrowRight/>
      </button>
    </div>
  )
}

export default Events

import Image from 'next/image';
import { FaRegPlayCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import {SourceType, SourceDataType} from '@/lib/types';
import { galleryData } from './data'; 

import './faerbanka.css';

const FaerBanka = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {

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
              <FaRegPlayCircle className='play-icon' 
              onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:JSON.stringify(galleryData), index:i})}/> }
        </>
      );
    }
  }

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
          <Image src={'/faerbanka/fb_logo.jpg'} alt="" width={250} height={250} className='faerbank-about-img' />
        </div>
      </div>
      <div  className='adaptive-image-container'>
        {imageList.map((item, index) => (
          <div key={index} className="image-wrapper" > 
            {item}
          </div>
        ))}
      </div> 
      <button className='btn' onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:JSON.stringify(galleryData)})}>
        Тут більше ...<GoArrowRight/>
      </button>
    </div>
  )
}

export default FaerBanka

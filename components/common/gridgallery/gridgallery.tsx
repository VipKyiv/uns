import Image from 'next/image';
import {GalleryItem} from '@/lib/types';
import { FaRegPlayCircle } from "react-icons/fa";
import {SourceType, SourceDataType} from '@/lib/types';
import './gridgallery.css'; 

type PropsType = {
  src : GalleryItem[],
  imgNumber? : number,
  numColumns?: number,
  onImageClick:(srcData:SourceDataType) => void,
};

const GridGallary = ( {src, imgNumber = 9, numColumns = 3, onImageClick} : PropsType) => {

  const gridStyle = {
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
  };

  const imageList = [];
  if(src.length >= imgNumber) {
    for (let i = 0; i < imgNumber; i++) {
        imageList.push(
          <>
            <Image key={i} src={src[i].image} alt={`Image ${i + 1}`} 
              fill style={{ objectFit: "cover", borderRadius:"5px"}}
              className="grid-image"
              onClick={()=>onImageClick({type:SourceType.mixed, data:JSON.stringify(src), index: i})}/>
            {src[i].video &&  
              <FaRegPlayCircle className='play-icon' onClick={()=>onImageClick({type:SourceType.mixed, data:JSON.stringify(src), index: i})}/>}
          </>
                
        )
    }
  }
  
  return (
    <>
    <div className="image-grid" style={gridStyle}>
      {imageList.map((item, index) => (
        <div key={index} className="grid-item-container" > 
          {item}
        </div>
      ))}
    </div>
    </>
  );
};

export default GridGallary;
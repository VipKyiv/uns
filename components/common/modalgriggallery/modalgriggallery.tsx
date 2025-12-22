import { useState} from "react";
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { galleryData } from './data'; 
import { FaRegPlayCircle } from "react-icons/fa";
import Modal from "@/components/common/modal/modal";
import VideoPlayer from "@/components/common/videoplayer/videoplayer";
import './modalgriggallery.css'; 

const ModalGridGallary = () => {
  const [childrenComponent, setChildrenComponent] = useState<React.JSX.Element | undefined>();

  const handleCloseModal = () => {
    console.log('handleCloseModal');
    setChildrenComponent(undefined);
  }  
  
  const handlePlayButton = (index : number) => {
    if (galleryData[index].video) {
      setChildrenComponent(<VideoPlayer src={galleryData[index].video}/>)
    } else {
      setChildrenComponent(<Image src={galleryData[index].image} alt="image" fill sizes="95vh"
                          style={{ objectFit: "contain", borderRadius:"10px"}}/>);
    }
  }
   
  return (
    <>
      <div className="image-grid-container">
        { galleryData.map((url, index) => (
          <div key={index} className="image-item">
            <Image
              src={url.image}
              alt={`Галерея Зображення ${index + 1}`}
              fill // <-- Використовуємо fill
              sizes="(max-width: 700px) 25vw, 16.6vw" 
              style={{ objectFit: 'cover', cursor: 'pointer' }} // <-- objectFit керує обрізанням/масштабуванням
              className="grid-image" 
              onClick={()=>handlePlayButton(index)}
            />        
            {url.video &&  <FaRegPlayCircle className='play-icon' onClick={()=>handlePlayButton(index)}/>}
          </div>
        ))}
      </div>
      { childrenComponent && 
        createPortal(<Modal zIndex={1100} handleClose={handleCloseModal} historyKey={"nested-modal"}>
                       {childrenComponent}
                     </Modal>,document.body)}
    </>
  );
};

export default ModalGridGallary;
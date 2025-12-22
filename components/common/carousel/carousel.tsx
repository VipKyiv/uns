import { useState, useEffect, TouchEvent} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader';
import { GalleryItem, SourceDataType} from '@/lib/types';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import './carousel.css';

const Carousel = ( {src} : {src: SourceDataType}) => {
  const [fileList, setFileList] = useState<GalleryItem[]>([]);  
  const [currentIndex, setCurrentIndex] = useState(src.index ?? 0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string>();

  const minSwipeDistance = 50; 

  useEffect(() => {
    setFileList(JSON.parse(src.data));
  }, []);

 useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

 }, [fileList]);


  const handleKeyDown = (event: KeyboardEvent) => {
    // Деструктуризація для зручності
    const { key } = event;

    if (key === 'ArrowLeft') {
      event.preventDefault(); 
      handleBack();
    } else if (key === 'ArrowRight') {
      event.preventDefault(); 
       handleForward();
    }
  };

  const handleBack = () => {
    setCurrentIndex(currentIndex => currentIndex === 0 ? fileList.length - 1 : currentIndex - 1);
  }

  const handleForward = () => {
    setCurrentIndex(currentIndex => currentIndex === fileList.length - 1 ? 0 : currentIndex + 1);
  }  

  const handleTouchStart = (e:TouchEvent<HTMLDivElement>) => {
    setTouchEndX(0); // Скинути кінцеву позицію на початку нового дотику
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e:TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX); 
  };

  const handleTouchEnd = () => {
    if (!touchEndX) return; // Якщо руху не було, виходимо
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        handleForward();
      } else if (isRightSwipe) {
        handleBack();
      }
    }
  };

  if (!fileList || fileList.length === 0)
    return (<Loader />);

  return (
    <div className="carousel">
        <div className="slides" 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {fileList[currentIndex] && fileList[currentIndex].video ? <video  key={currentIndex}
           controls autoPlay muted style={{height:"95vh", width:"100vw"}} playsInline={false}>
              <source type="video/mp4" src={fileList[currentIndex].video}></source></video> 
              : <Image src={fileList[currentIndex].image} alt="image" fill sizes="100vw"
                   style={{ objectFit: "contain", borderRadius:"10px"}}/>}
      </div>
      <div className="btn-container">
        <button  className="prev-btn" onClick={handleBack}><IoIosArrowDropleft/>
        </button>
        <button  className="next-btn" onClick={handleForward}><IoIosArrowDropright/>
        </button>
      </div>  
      <div className="carousel-pagination"> 
          {fileList.map((_, i) => 
              <div key={i} className={`pagination-dot ${currentIndex === i ? 'pagination-dot-active' : ''}`}
                   onClick={() => setCurrentIndex(i)}></div>
            )}
      </div>
    </div>
  )
}

export default Carousel

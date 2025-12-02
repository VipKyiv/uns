import { useState, useEffect, useRef, TouchEvent} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import './carousel.css';

const Carousel = ( {src} : {src: string}) => {
  const [fileList, setFileList] = useState<{filePath: string, fileType: string}[]>([]);  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const videoRef = useRef<HTMLVideoElement>(null);

  const minSwipeDistance = 50; 

  useEffect(() => {
    const sourceData = src.split(';');
    if(sourceData.length > 1)
      setCurrentIndex(Number(sourceData[1]))

    const getFilesList = async () => {
      const getData = await getFilesListAction('mixed', sourceData[0]);
      if (getData.returnStatus) {
        const fileData = await JSON.parse(getData.payload);

        setFileList(fileData);
      } else {
        // set error
      }
    }
    setIsLoading(true);
    getFilesList().then(()=>{
    //   setFormData(prepearingDGData(dbData));
      setIsLoading(false);
    });
  }, []);

  const handleBack = () => {
    setCurrentIndex(currentIndex => currentIndex === 0 ? fileList.length - 1 : currentIndex - 1);
  }

  const handleForward = () => {
    const cuttent = currentIndex;
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
  if (isLoading || fileList.length === 0)
    return (<Loader />);

  return (
    <div className="carousel">
        <div className="slides" 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {fileList[currentIndex].fileType === 'image' && <img alt='' src={fileList[currentIndex].filePath} />}
          {/* {fileList[currentIndex].fileType === 'image' &&  <Image src={fileList[currentIndex].filePath} alt="image" fill sizes="100vw"
                   style={{ objectFit: "contain", borderRadius:"10px"}}/>} */}
          
          {fileList[currentIndex].fileType === 'video' &&  
             <video  key={fileList[currentIndex].filePath} controls autoPlay muted
                      style={{height:"95vh", width:"100vw"}}>
              <source type="video/mp4" src={fileList[currentIndex].filePath}></source>
            </video>}
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

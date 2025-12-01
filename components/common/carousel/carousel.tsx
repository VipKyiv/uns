import { useState, useEffect, useRef} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import './carousel.css';

const Carousel = ( {src} : {src: string}) => {
  const [fileList, setFileList] = useState<{filePath: string, fileType: string}[]>([]);  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const videoRef = useRef<HTMLVideoElement>(null);
  

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

  if (isLoading || fileList.length === 0)
    return (<Loader />);

  return (
    <div className="carousel">
        <div className="slides">
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

import { useState, useRef, useEffect,MouseEvent} from 'react';
import { MdClose } from "react-icons/md";
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import img1 from '@/src/assets/heroes/photo_5253551499541941797_y.jpg';
import './showimagesfolder.css';

type ShowProps = {
  src:string,
  handleClose:()=>void,
};


const ShowImagesFolder = ({src, handleClose} : ShowProps) => {
  const [fileList, setFileList] = useState<string[]>([]);  
  const [currentImage, setCurrentImage] = useState(0);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const container =useRef<HTMLDivElement>(null);

  useEffect(() => {
    // let dbData:TestingDatesDataType[] = [];
    const getFilesList = async () => {
      const getData = await getFilesListAction('images',src);
      if (getData.returnStatus) {
        const fileData = await JSON.parse(getData.payload);
        const ddd = `@/src/assets/${fileData[0]}`;
        // if (src) {
        //   const response = await import(`@/src/assets/heroes/${fileData[0]}`);
        //   setFile1(response.default);
        // }
         // change relative path to suit your needs
        setFileList(fileData);
      } else {
      }
    }
    setIsLoading(true);
    getFilesList().then(()=>{
    //   setFormData(prepearingDGData(dbData));
      setIsLoading(false);
    })
  }, []);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if(e.target === container.current) {
      handleClose();
    }
  }
  return (
    <div ref={container} className='images-container' onClick={closeModal} >
      <div className='close-button'>
        <button onClick={() => {handleClose()}}><MdClose/></button>
      </div>
      <div className="images">
         <div className="left-part">
          {fileList.map((item, index) => <Image src={item} key={item} alt="" width={100} height={100} 
                                          style={{cursor: "pointer", borderRadius: "5px"}}
                                          onMouseOver={() => setCurrentImage(index)}
                                          onClick={() => setCurrentImage(index)}/>)}
         </div>
         <div className="right-part">
          {/* <div style={{ position: "relative", width: "90%", height: "900px" }}> */}
          { fileList.length && <Image 
            src={fileList[currentImage]} alt="image" 
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
          />}
          {/* </div> */}
         </div>
      </div>
      {/* { fileList[0] && <Image src={fileList[6]} alt="" width={100} height={100} />} */}

    </div>
  )
}

export default ShowImagesFolder

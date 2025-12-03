import { useState, useEffect} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader'
import './showimagesfolder.css';

const ShowImagesFolder = ( {src} : {src: string}) => {
  const [fileList, setFileList] = useState<string[]>([]);  
  const [currentImage, setCurrentImage] = useState(0);  
  const [imageSize, setImageSize] = useState(100);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getFilesList = async () => {
      const getData = await getFilesListAction('images',src);
      if (getData.returnStatus) {
        const fileData = await JSON.parse(getData.payload);
        if (fileData.length > 10) {
          setImageSize(60);
        } else if (fileData.length <= 5){
          setImageSize(200);
        }

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

  if (isLoading)
    return (<Loader />);

  return (
    <>
      { fileList.length > 0 && <div className="images">
         <div className="right-part">
           <Image 
              src={fileList[currentImage]} alt="image" 
              fill
              sizes="100vw"
              style={{ objectFit: "contain", borderRadius:"10px"}}
            />
         </div>
         <div className="left-part">
          {fileList.map((item, index) => 
          <img key={index} src={item} alt='' onMouseOver={() => setCurrentImage(index)}
                                          onClick={() => setCurrentImage(index)}
                                          style={{cursor: "pointer", borderRadius: "7px"}}/>)}
          {/* <Image src={item} key={item} alt="" 
                                          layout="fill" objectFit="cover" className="grid-image"
                                          style={{cursor: "pointer", borderRadius: "7px"}}
                                          onMouseOver={() => setCurrentImage(index)}
                                          onClick={() => setCurrentImage(index)}/>)} */}
         </div>
      </div>}
    </>
  )
}

export default ShowImagesFolder

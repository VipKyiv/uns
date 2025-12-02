import { useState, useEffect, MouseEvent} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader';
import {SourceType, SourceDataType} from '@/lib/types';
import './gridgallery.css'; // Імпортуємо ваші стилі

const GridGallary = ( {src, onImageClick} : {src: string, onImageClick:(srcData:SourceDataType) => void}) => {
  const [fileList, setFileList] = useState<{filePath: string, fileType: string}[]>([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getFilesList = async () => {
      const getData = await getFilesListAction('mixed', src);
      if (getData.returnStatus) {
        const fileData = await JSON.parse(getData.payload);

        setFileList(fileData);
      } else {
        // set error
      }
    }
    setIsLoading(true);
    getFilesList().then(()=>{
      setIsLoading(false);
    });
  }, []);

  const imageList = [];
  if(fileList.length >= 9) {
    for (let i = 0; i < 9; i++) {
      imageList.push(
         <Image key={i} src={fileList[i].filePath} alt={`Image ${i + 1}`} 
                layout="fill" objectFit="cover" className="grid-image"
                onClick={()=>onImageClick({type:SourceType.mixed, data:`about;${i}`})}/>
      )
    }
  }
  if (isLoading)
    return (<Loader />);
  
  return (
    <>
    <div className="image-grid">
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
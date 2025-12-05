import { useState, useEffect, MouseEvent} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader';
import {SourceType, SourceDataType} from '@/lib/types';
import './gridgallery.css'; 

type PropsType = {
  src : string,
  imgNumber? : number,
  numColumns?: number,
  onImageClick:(srcData:SourceDataType) => void,
};

const GridGallary = ( {src, imgNumber = 9, numColumns = 3,onImageClick} : PropsType) => {
  const [fileList, setFileList] = useState<{filePath: string, fileType: string}[]>([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const gridStyle = {
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
  };

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
  if(fileList.length >= imgNumber) {
    for (let i = 0; i < imgNumber; i++) {
      if (fileList[i].fileType === 'image') {
        imageList.push(
         <Image key={i} src={fileList[i].filePath} alt={`Image ${i + 1}`} 
                layout="fill" objectFit="cover" className="grid-image"
                onClick={()=>onImageClick({type:SourceType.mixed, data:`about;${i}`})}/>
        )
      }
    }
  }
  if (isLoading)
    return (<Loader />);
  
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
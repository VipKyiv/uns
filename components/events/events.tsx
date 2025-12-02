import { useState, useEffect} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Loader from '@/components/common/loader/loader'
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import {SourceType, SourceDataType} from '@/lib/types';
import './events.css';

const Events = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {
  const [fileList, setFileList] = useState<{filePath: string, fileType: string}[]>([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getFilesList = async () => {
      const getData = await getFilesListAction('mixed','events');
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

  if (isLoading)
    return (<Loader />);

  const imageList = [];
  if(fileList.length > 4) {
    for (let i = 0; i < 4; i++) {
      imageList.push(
      <img key={i} src={fileList[i].filePath} alt='' 
                          onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:`events;${i}`})}/>
      //  <Image src={fileList[i].filePath} alt="" width={200} height={300} className='faerbank-about-img' />                          
                        );
    }
  }


  return (
    <div className='events'>
      {/* <div  className='gallery'>
        <img src={gallery_1.src} alt='' />
        <img src={gallery_2.src} alt='' />
        <img src={gallery_3.src} alt='' />
        <img src={gallery_4.src} alt='' />
      </div> */}
      <div  className='gallery'>
        {imageList}
      </div> 
      <button className='btn'  onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:`events`})}>
        Тут більше ...<GoArrowRight/>
      </button>
    </div>
  )
}

export default Events

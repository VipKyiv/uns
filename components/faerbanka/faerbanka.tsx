import { useState, useEffect} from 'react';
import {getFilesListAction} from '@/lib/serveractions';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader'
import { GoArrowRight } from "react-icons/go";
import logo from '../../src/assets/faerbanka/fb_logo.jpg'
import {SourceType, SourceDataType} from '@/lib/types';

import './faerbanka.css';

const FaerBanka = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {
  const [fileList, setFileList] = useState<{filePath: string, fileType: string}[]>([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getFilesList = async () => {
      const getData = await getFilesListAction('mixed','faerbanka');
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
      imageList.push(<img key={i} src={fileList[i].filePath} alt='' 
                          onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:`faerbanka;${i}`})}/>);
    }
  }
  return (
    <div className='faerbanka'>
      <div className='faerbanka-about'>
        <div className="faerbanka-left">
          <h3> ФАЄРБАНКА це проект по виробництву маскувальних димів.</h3>
          <h3> В армії на даний час є велика потреба в МД, що використовуються для:</h3>
          <ul>
            <li> евакуації </li>
            <li> штурмових дій </li>
            <li> маскування переміщення техніки і особового складу </li>
            <li> фіктивних цілей </li>
            <li> імітації підбитої техніки </li>
            <li> захисту від дронів </li>
          </ul>
        </div>
        <div className="faerbanka-right">
          <Image src={logo} alt="" width={250} height={250} className='faerbank-about-img' />
        </div>
      </div>
      <div  className='faerbanka-gallery'>
        {imageList}
      </div> 
      <button className='btn' onClick={()=>onPlayButtonClick({type:SourceType.mixed, data:`faerbanka`})}>
        Тут більше ...<GoArrowRight/>
      </button>
    </div>
  )
}

export default FaerBanka

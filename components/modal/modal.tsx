import { useEffect, useRef, MouseEvent} from 'react';
import {SourceType, SourceDataType} from '@/lib/types';
import { MdClose } from "react-icons/md";
import VideoPlayer from "@/components/common/videoplayer/videoplayer";
import PaymentDetails from "@/components/paymentdetails/paymentdetails";
import ShowImagesFolder from '@/components/common/showimagesfolder/showimagesfolder';

type ModalProps = {
  src:SourceDataType,
  handleClose:()=>void,
};

const Modal = ({src, handleClose}:ModalProps) => {
  const container =useRef<HTMLDivElement>(null);

  useEffect(() => {   // remove scrolling on backgraund
    const body = document.body;
    body.classList.add('no-scroll');
    return () => {
      body.classList.remove('no-scroll');
    };
  }, []);
  
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
      if(e.target === container.current) {
        handleClose();
      }
    }
  

  return (
    <div ref={container} className='modal-container' onClick={closeModal} >
      <div className='close-button'>
        <button onClick={() => {handleClose()}}><MdClose/></button>
      </div>
      {src.type === SourceType.video && <VideoPlayer src={src.data}/>}
      {src.type === SourceType.paymentData && <PaymentDetails/>}
      {src.type === SourceType.imageFolder && <ShowImagesFolder  src={src.data}/>}
    </div> 
  )
}

export default Modal

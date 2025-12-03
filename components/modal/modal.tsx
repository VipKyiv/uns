import { useEffect, useRef, useCallback, MouseEvent} from 'react';
import {SourceType, SourceDataType} from '@/lib/types';
import { MdClose } from "react-icons/md";
import VideoPlayer from "@/components/common/videoplayer/videoplayer";
import PaymentDetails from "@/components/paymentdetails/paymentdetails";
import ShowImagesFolder from '@/components/common/showimagesfolder/showimagesfolder';
import Carousel from '../common/carousel/carousel';

type ModalProps = {
  src:SourceDataType,
  handleClose:()=>void,
};

const Modal = ({src, handleClose}:ModalProps) => {
  const container =useRef<HTMLDivElement>(null);

  useEffect(() => {   
    const body = document.body;
    body.classList.add('no-scroll');  // remove scrolling on backgraund
    window.history.pushState({ modalOpen: true }, '', window.location.pathname + '#modal');

      const handlePopState = (event:PopStateEvent) => {
        if (!event.state || !event.state.modalOpen) {
            handleClose(); // Close the modal
        }
      };
      window.addEventListener('popstate', handlePopState);
    return () => {
      body.classList.remove('no-scroll');
        window.removeEventListener('popstate', handlePopState);
    };
  }, [handleClose]);

  const handleOutsideClose = useCallback(() => {
    if (window.location.hash === '#modal') {
       window.history.back(); 
    }
    handleClose(); // Call the parent state handler
  }, [handleClose]);
  
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
      if(e.target === container.current) {
        handleOutsideClose();
      }
  }
  

  return (
    <div ref={container} className='modal-container' onClick={closeModal} >
      <div className='close-button'>
        <button onClick={handleOutsideClose}><MdClose/></button>
      </div>
      {src.type === SourceType.video && <VideoPlayer src={src.data}/>}
      {src.type === SourceType.paymentData && <PaymentDetails/>}
      {src.type === SourceType.imageFolder && <ShowImagesFolder  src={src.data}/>}
      {src.type === SourceType.mixed && <Carousel src={src.data}/>}
    </div> 
  )
}

export default Modal

import {SourceType, SourceDataType} from '@/lib/types';
import VideoPlayer from "@/components/videoplayer/videoplayer";
import PaymentDetails from "@/components/paymentdetails/paymentdetails";

type ModalProps = {
  src:SourceDataType,
  handleClose:()=>void,
};

const Modal = ({src, handleClose}:ModalProps) => {

    return (
    <>
      {src.type === SourceType.video && <VideoPlayer src={src.data} handleClose={handleClose}/>}
      {src.type === SourceType.paymentData && <PaymentDetails handleClose={handleClose}/>}
      
      {/* <div ref={playear} className={`video-player ${modalState ? '' : 'hide'}`} onClick={closePlayer} >
        <div className='close-button'>
          <button onClick={() => {videoRef.current?.pause();handleClose()}}><MdClose/></button>
        </div>
        <div>
          <video ref={videoRef} controls autoPlay muted key={src.data}>
            <source type="video/mp4" src={src.data}></source>
          </video>
        </div>
      </div> */}
    </>
  )
}

export default Modal

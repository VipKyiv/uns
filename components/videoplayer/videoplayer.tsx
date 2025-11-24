import { useRef, MouseEvent} from 'react';
import { MdClose } from "react-icons/md";
import './videoplayer.css';

type VideoProps = {
  src:string,
  handleClose:()=>void,
};


const VideoPlayer = ({src, handleClose}:VideoProps) => {
  const playear =useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closePlayer = (e: MouseEvent<HTMLDivElement>) => {
    if(e.target === playear.current) {
      videoRef.current?.pause();
      handleClose();
    }
  }
  return (
    // <div ref={playear} className={`video-player ${playState ? '' : 'hide'}`} onClick={closePlayer} >
    <div ref={playear} className='video-player' onClick={closePlayer} >
      <div className='close-button'>
        <button onClick={() => {videoRef.current?.pause();handleClose()}}><MdClose/></button>
      </div>

      <video ref={videoRef} controls autoPlay muted key={src}>
        <source type="video/mp4" src={src}></source>
      </video>
    </div>
  )
}

export default VideoPlayer

import { useEffect, useRef} from 'react';
import './videoplayer.css';

const VideoPlayer = ({src}: {src:string}) => {
  const playear =useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {   
    return () => {
      videoRef.current?.pause();
    };
  }, []);

  return (
      <video ref={videoRef} controls autoPlay muted key={src} style={{height:"95vh", width:"90vw"}}>
        <source type="video/mp4" src={src}></source>
      </video>
  )
}

export default VideoPlayer

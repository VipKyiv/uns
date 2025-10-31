import { useRef} from 'react';
import './videoplayer.css';

const VideoPlayer = ({playState, setPlayState}:{playState:boolean, setPlayState:(state:boolean)=>void}) => {
  const playear =useRef(null);
  const closePlayer = (e:any) => {
    if(e.target === playear.current) {
      setPlayState(false);
    }
  }
  return (
    <div ref={playear} className={`video-player ${playState ? '' : 'hide'}`} onClick={closePlayer} >
      <video controls autoPlay muted >
        <source type="video/mp4" src={"videos/video.mp4"} ></source>
      </video>
    </div>
  )
}

export default VideoPlayer

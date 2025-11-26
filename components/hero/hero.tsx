import { GoArrowRight } from "react-icons/go";
import {SourceType, SourceDataType} from '@/lib/types';
import './hero.css';

const Hero = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Тиша, в якій працюють герої.</h1>
        <p>Допоможи тим, хто бачить далі.</p>
        <button className='btn' onClick={()=>onPlayButtonClick({type:SourceType.imageFolder, data:'heroes'})}>
          Дізнатися більше<GoArrowRight style={{marginLeft:'10px'}}/>
        </button>
      </div>
    </div>
  )
}

export default Hero

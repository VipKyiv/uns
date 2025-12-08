import { GoArrowRight } from "react-icons/go";
import {SourceType, SourceDataType} from '@/lib/types';
import './hero.css';

const Hero = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Тиша, в якій працюють герої.</h1>
        <h3>Допоможи тим, хто бачить далі.</h3>
        <p> 
           Наші Герої — це безстрашні військові розвідники, чия невидима робота є вирішальною для захисту України. 
           Вони щодня ризикують життям, щоб здобути критично важливу інформацію, забезпечуючи успіх операцій та зберігаючи життя наших захисників. 
          Підтримуючи цей Фонд, ви допомагаєте забезпечити їх сучасним обладнанням та технологіями, необхідними для виконання найскладніших завдань.
        </p>

        <button className='btn' onClick={()=>onPlayButtonClick({type:SourceType.imageFolder, data:'heroes'})}>
          Дізнатися більше<GoArrowRight style={{marginLeft:'10px'}}/>
        </button>
      </div>
    </div>
  )
}

export default Hero

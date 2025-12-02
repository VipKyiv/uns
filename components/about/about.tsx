import './about.css';
import about_img from '../../src/assets/uns-2.jpg';
import { FaRegPlayCircle } from "react-icons/fa";
import {SourceType, SourceDataType} from '@/lib/types';

const About = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {

  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img.src} alt='img' className='about-img'/>
        <FaRegPlayCircle className='play-icon' onClick={()=>onPlayButtonClick({type:SourceType.video, data:'videos/video.mp4'})}/>
      </div>
      <div className="about-right">
        <h3> Про БФ У.Н.С.</h3>
        <h2>Тиша, в якій працюють герої — потребує наших голосів.</h2>
        <p> 
            Благодійний Фонд УНС — волонтерська ініціатива, яка допомагає українським військовим розвідникам.
            Без гучних слів і великих сцен — лише точна робота, підтримка й турбота про тих, хто щодня залишається в тіні.

        </p>
        <p> 
           Ми збираємо кошти на зв’язок, оптику, медичне забезпечення та різне інше обладнання.
        </p>
        <p> 
           Кожна гривня — це ще один крок до безпеки тих, хто бачить далі, ніж інші.
        </p>
      </div>
    </div>
  )
}

export default About

import {SourceDataType} from '@/lib/types';
import GridGallary from "@/components/common/gridgallery/gridgallery";
import { galleryData } from './data'; 
import './about.css';

const About = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {

  return (
    <div className='about'>
      <div className="about-left">
        <GridGallary src={galleryData} onImageClick={onPlayButtonClick} numColumns={3}/>   
      </div>
      <div className="about-right">
        {/* <h3> Про БФ У.Н.С.</h3> */}
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

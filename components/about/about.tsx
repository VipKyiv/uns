import './about.css';
import about_img from '../../src/assets/uns-1.jpg'
import { FaRegPlayCircle } from "react-icons/fa";

const About = ({onPlayButtonClick}:{onPlayButtonClick:(type:string, src:string) => void}) => {

  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img.src} alt='logo' className='about-img'/>
        <FaRegPlayCircle className='play-icon' onClick={()=>onPlayButtonClick('video', 'videos/video.mp4')}/>
      </div>
      <div className="about-right">
        <h3> Про Фонд</h3>
        <h2>Тиша, в якій працюють герої — потребує наших голосів.</h2>
        <p> 
            Ми — волонтерська ініціатива, яка допомагає українським військовим розвідникам.
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

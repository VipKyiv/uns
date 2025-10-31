import { GoArrowRight } from "react-icons/go";
import './hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Тиша, в якій працюють герої.</h1>
        <p>Допоможи тим, хто бачить далі.</p>
        <button className='btn'>Дізнатися більше<GoArrowRight style={{marginLeft:'10px'}}/></button>
      </div>
    </div>
  )
}

export default Hero

import {SourceDataType} from '@/lib/types';
import GridGallary from "@/components/common/gridgallery/gridgallery";
import './ourheroes.css';

const OurHeroes = ({onPlayButtonClick}:{onPlayButtonClick:(srcData:SourceDataType) => void}) => {

  return (
    <div className='ourheroes'>
      <div className="ourheroes-right">
        {/* <h3> Наші Герої та Друзі</h3>
        <h2>Забезпечуючи Успіх.</h2> */}
        <p> 
           Наші Герої — це безстрашні військові розвідники, чия невидима робота є вирішальною для захисту України. 
        </p>
        <p> 
           Вони щодня ризикують життям, щоб здобути критично важливу інформацію, забезпечуючи успіх операцій та зберігаючи життя наших захисників. 
        </p>
        <p> 
          Підтримуючи цей фонд, ви допомагаєте забезпечити їх сучасним обладнанням та технологіями, необхідними для виконання найскладніших завдань.
        </p>
      </div>
      <div className="ourheroes-left">
        <GridGallary src='about' imgNumber={6} onImageClick={onPlayButtonClick}/>   
      </div>

    </div>
  )
}

export default OurHeroes

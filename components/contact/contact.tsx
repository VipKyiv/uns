import { BsEnvelopeAt } from "react-icons/bs";
import { FcPhone } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";
import message from '../../src/assets/message.png';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Надішліть нам повідомлення <img src={message.src} alt='' /></h3>
            <p>Звертайтеся до нас через контактну форму або знайдіть нашу контактну інформацію нижче. Ваші відгуки, 
                запитання та пропозиції важливі для нас, оскільки ми прагнемо надавати виняткову інформацію 
                про нашу спільноту.
            </p>
            <ul>
                <li><BsEnvelopeAt className='icon'/>contact@uns.org</li>
                <li><FcPhone  className='icon'/>+38 012 3456789</li>
                <li><GrLocation  className='icon'/>03234 Київ вул. Яскрава, 34</li>
            </ul>
        </div>
      
        <div className="contact-col">
            <form>
                <label>Ваше Ім'я</label>
                <input type="text" name="name" placeholder="Введіть Ваше ім'я" required/>
                <label>Телефон</label>
                <input type="tel" name="phone" placeholder="Введіть Ваш номер телефону" required/>
                <label>Що Ви хотіли би нам повідомити</label>
                <textarea name="message" rows={6} placeholder="Введіть Ваше повідомлення" required></textarea>
                <button type='submit' className="btn dark-btn">Відправити<GoArrowRight style={{marginLeft:'10px'}}/></button>

            </form>
        </div>
    </div>
  )
}

export default Contact

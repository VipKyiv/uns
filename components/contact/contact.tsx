import { useState, FormEvent} from 'react';
import { sendGAEvent } from '@next/third-parties/google';
import { BsEnvelopeAt } from "react-icons/bs";
import { FcPhone } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";
import message from '../../src/assets/message.png';
import './contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setResult("Sending ...");
    sendGAEvent({ event: 'buttonClicked', value: 'contact_form' });
    const formElement = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7ccdd059-2d8d-43c3-a7c3-ab62a585f3dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success) {
        formElement.reset();
        setResult("Email sent successfully!");
    } else {
        setResult("Error");
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Надішліть нам повідомлення <img src={message.src} alt='' /></h3>
            <p>Звертайтеся до нас через контактну форму або знайдіть нашу контактну інформацію нижче. Ваші відгуки, 
                запитання та пропозиції важливі для нас, оскільки ми прагнемо надавати виняткову інформацію 
                про нашу спільноту.
            </p>
            <ul>
                <li><BsEnvelopeAt className='icon'/>info@unc.org.ua</li>
                {/* <li><FcPhone  className='icon'/>+380 93 432 3333</li> */}
                {/* <li><GrLocation  className='icon'/>03234 Київ вул. Яскрава, 34</li> */}
            </ul>
        </div>
      
        <div className="contact-col">
            <form onSubmit={handleSubmit}>
                <label>Ваше Ім'я</label>
                <input type="text" name="name" placeholder="Введіть Ваше ім'я" required/>
                <label>Телефон</label>
                <input type="tel" name="phone" placeholder="Введіть Ваш номер телефону" required/>
                <label>Що Ви хотіли би нам повідомити</label>
                <textarea name="message" rows={6} placeholder="Введіть Ваше повідомлення" required></textarea>
                <button type='submit' className="btn dark-btn">Відправити<GoArrowRight style={{marginLeft:'10px'}}/></button>
            </form>
            <br />
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact

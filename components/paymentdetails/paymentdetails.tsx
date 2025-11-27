import { useRef} from 'react';
import Image from 'next/image'
import qrcode from '../../src/assets/QR-code.png'
import './paymentdetails.css';

const PaymentDetails = () => {
  const container =useRef<HTMLDivElement>(null);

  return (
      <div className="payment-data">
        <h2>Реквізити для внеску:</h2>
        <br />
        <h3>Найменування отримувача: БО БФ У.Н.С.</h3>
        <h3>Код отримувача: 45682236</h3>
        <h3>Рахунок отримувача у форматі відповідно до стандарту IBAN:</h3>
        <h3><strong>UA663052990000026002036816850</strong></h3>
        <h3>Назва банку: АТ КБ "Приватбанк"  </h3> 
        <br />
        <div className="qr-code">
         <Image src={qrcode} alt="" width={300} height={350} />
        </div>
      </div>
  )
}

export default PaymentDetails

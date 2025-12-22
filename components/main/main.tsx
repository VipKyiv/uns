'use client'
import { useState, useCallback } from "react";
import { SourceType, SourceDataType} from '@/lib/types';
import Modal from "@/components/common/modal/modal";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Title from "@/components/title/title";
import Events from "@/components/events/events";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import FaerBanka from "@/components/faerbanka/faerbanka";
import VideoPlayer from "@/components/common/videoplayer/videoplayer";
import PaymentDetails from "@/components/paymentdetails/paymentdetails";
import ModalGridGallary from '@/components/common/modalgriggallery/modalgriggallery';
import Carousel from '@/components/common/carousel/carousel';



const Main = () => {
  const [source , setSource] = useState<SourceDataType | undefined>();
  const [childrenComponent, setChildrenComponent] = useState<React.JSX.Element>(<></>);

  const handlePlayButton = useCallback((srcData: SourceDataType) => {
    setSource(srcData);
    if (srcData.type === SourceType.video) {
      setChildrenComponent(<VideoPlayer src={srcData.data as string}/>);
    } else if (srcData.type === SourceType.paymentData){
      setChildrenComponent(<PaymentDetails/>);
    } else if (srcData.type === SourceType.imageFolder){
      // setChildrenComponent(<ShowImagesFolder  src={srcData.data}/>);
      setChildrenComponent(<ModalGridGallary/>);
    } else if (srcData.type === SourceType.mixed ){
      setChildrenComponent(<Carousel src={srcData}/>);
    }
  } , [source]) 
  
  // const handlePlayButton = (srcData: SourceDataType) => {
  //   setSource(srcData);
  //   if (srcData.type === SourceType.video) {
  //     setChildrenComponent(<VideoPlayer src={srcData.data}/>);
  //   } else if (srcData.type === SourceType.paymentData){
  //     setChildrenComponent(<PaymentDetails/>);
  //   } else if (srcData.type === SourceType.imageFolder){
  //     // setChildrenComponent(<ShowImagesFolder  src={srcData.data}/>);
  //     setChildrenComponent(<ModalGridGallary/>);
  //   } else if (srcData.type === SourceType.mixed ){
  //     setChildrenComponent(<Carousel src={srcData.data}/>);
  //   }
  // }  

  const handleCloseModal = () => {
    setSource(undefined);
  }  

  return (
    <main>
     <Navbar onContributeButtonClick={handlePlayButton}/>
     <Hero  onPlayButtonClick={handlePlayButton}/>
     <div className="container">
       <Title title='БО БФ У.Н.С.' subtitle='Про нас'/>
       <About onPlayButtonClick={handlePlayButton}/>
       <Title title='Події' subtitle='Наше дозвілля'/>
       <Events onPlayButtonClick={handlePlayButton}/>
       <Title title='Нам дякують' subtitle="Зворотній зв'язок"/>
       <Testimonials onPlayButtonClick={handlePlayButton}/>
       <Title title='ФАЄРБАНКА' subtitle='Проект'/>
       <FaerBanka onPlayButtonClick={handlePlayButton}/>
       <Title title="Зв'яжіться з нами" subtitle='Наші контакти'/>
       <Contact/>
       <Footer/>
     </div>
     { source && <Modal handleClose={handleCloseModal} historyKey={"modal"}>{childrenComponent}</Modal>}
    </main>
  );


}

export default Main

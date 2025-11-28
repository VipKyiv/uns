'use client'
import { useState, useEffect } from "react";
import { SourceDataType} from '@/lib/types';
import Modal from "@/components/modal/modal";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Title from "@/components/title/title";
import Events from "@/components/events/events";
import Partners from "@/components/partners/partners";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import FaerBanka from "../faerbanka/faerbanka";

const Main = () => {
  const [source , setSource] = useState<SourceDataType | undefined>();
  
  const handlePlayButton = (srcData: SourceDataType) => {
    setSource(srcData);
  }  

  const handleCloseModal = () => {
    setSource(undefined);
  }  

  return (
    <main>
     <Navbar onContributeButtonClick={handlePlayButton}/>
     <Hero  onPlayButtonClick={handlePlayButton}/>
     <div className="container">
       <About onPlayButtonClick={handlePlayButton}/>
       <Title title='Події' subtitle='Галерея фото'/>
       <Events/>
       {/* <Title title='Нам довіряють' subtitle='Партнери'/>
       <Partners/> */}
       <Title title='Проект ФаєрБанка' subtitle='Партнери'/>
       <FaerBanka/>
       <Title title='Нам дякують' subtitle=''/>
       <Testimonials onPlayButtonClick={handlePlayButton}/>
       <Title title="Зв'яжіться з нами" subtitle='Наші контакти'/>
       <Contact/>
       <Footer/>
     </div>
     { source && <Modal src={source} handleClose={handleCloseModal}/>}
     {/* { source && <VideoPlayer playState={playState} src={source} handleClose={handleCloseModal}/>} */}
    </main>
  );


}

export default Main

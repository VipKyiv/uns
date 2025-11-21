'use client'
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Title from "@/components/title/title";
import Events from "@/components/events/events";
import Partners from "@/components/partners/partners";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import VideoPlayer from "@/components/videoplayer/videoplayer";
import { useState, useEffect } from "react";

const Main = () => {
  const [playState, setPlayState] = useState(false);
  const [source , setSource] = useState<string | undefined>();
  
  const handlePlayButton = (type:string, src:string) => {
    setSource(src);
    setPlayState(true);
  }  

  const handleCloseModal = () => {
    setSource(undefined);
    setPlayState(false);
  }  

  return (
    <main>
     <Navbar/>
     <Hero/>
     <div className="container">
       <About onPlayButtonClick={handlePlayButton}/>
       <Title title='Події' subtitle='Галерея фото'/>
       <Events/>
       <Title title='Нам довіряють' subtitle='Партнери'/>
       <Partners/>
       <Title title='Нам дякують' subtitle=''/>
       <Testimonials onPlayButtonClick={handlePlayButton}/>
       <Title title="Зв'яжіться з нами" subtitle='Наші контакти'/>
       <Contact/>
       <Footer/>
     </div>
     { source && <VideoPlayer playState={playState} src={source} onClose={handleCloseModal}/>}
    </main>
  );


}

export default Main

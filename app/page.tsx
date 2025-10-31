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
import { useState } from "react";

export default function Home() {
  const [playState, setPlayState] = useState(false);
  return (
    <main>
     <Navbar/>
     <Hero/>
     <div className="container">
       {/* <Title title='Ми команда' subtitle='Про нас'/> */}
       <About handlePlayButton={setPlayState}/>
       <Title title='Події' subtitle='Галерея фото'/>
       <Events/>
       <Title title='Нам довіряють' subtitle='Партнери'/>
       <Partners/>
       <Title title='Нам дякують' subtitle=''/>
       <Testimonials/>
       <Title title="Зв'яжіться з нами" subtitle='Наші контакти'/>
       <Contact/>
       <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </main>
  );
}

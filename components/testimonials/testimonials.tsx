import React, { useState, useMemo } from 'react';
import Image from 'next/image'; 
import { FaRegPlayCircle } from "react-icons/fa";
import { galleryData } from './data'; 
import {SourceType, SourceDataType} from '@/lib/types';
import './testimonials.css'; 

const ITEMS_PER_PAGE = 6;

interface ImageGalleryProps {
  onPlayButtonClick:(srcData:SourceDataType) => void
}

const Testimonials: React.FC<ImageGalleryProps> = ({ onPlayButtonClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const TOTAL_PAGES = Math.ceil(galleryData.length / ITEMS_PER_PAGE); // 18 / 6 = 3

  // Обрізання масиву (Data Slicing)
  const currentItems = useMemo(() => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return galleryData.slice(startIndex, endIndex);
  }, [currentPage]);

  // Логіка навігації
  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, TOTAL_PAGES - 1));
  };

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };
  
  const handlePlayButton = (index:number) => {
      onPlayButtonClick({type:SourceType.video, data:currentItems[index].video});
  }  
  
  // Визначення видимості кнопок
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === TOTAL_PAGES - 1;

  return (
    <div className="testimonials">
      
      {/* Кнопка "Вліво" (показуємо, якщо це не перша сторінка) */}
      <button 
        className="nav-button"
        onClick={handlePrev} 
        disabled={isFirstPage}
        aria-label="Попередня група"
      >
        &#9664; {/* Стрілка вліво */}
      </button>

      {/* Сітка елементів */}
      <div className="gallery-grid">
        {currentItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <div className="image-wrapper">
                <p className="gallery-item-text">{item.image}</p>
                <Image 
                    src={item.image} 
                    alt={item.text} 
                    fill // Дозволяє зображенню заповнити батьківський контейнер
                    priority={currentPage === 0 && index < 3} // Прискорює завантаження перших кількох зображень
                    // Важливо: Описуємо розмір зображення на різних брейкпойнтах
                    sizes="(max-width: 900px) 50vw, 33vw" 
                    style={{ objectFit: 'cover' }} 
                />
                <FaRegPlayCircle className='play-icon' onClick={()=>handlePlayButton(index)}/>
                
            </div>
            <p className="gallery-item-text">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Кнопка "Вправо" (показуємо, якщо це не остання сторінка) */}
      <button 
        className="nav-button"
        onClick={handleNext} 
        disabled={isLastPage}
        aria-label="Наступна група"
      >
        &#9654; {/* Стрілка вправо */}
      </button>
      
    </div>
  );
};

export default Testimonials;
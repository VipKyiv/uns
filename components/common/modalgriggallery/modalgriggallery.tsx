import React from 'react';
import Image from 'next/image';
import { galleryData } from './data'; 
import {SourceType, SourceDataType} from '@/lib/types';
import './modalgriggallery.css'; 

// 1. Константний масив із 24 посилань на зображення (типу string).
// ЗАМІНІТЬ ЦІ ПРИКЛАДИ на ваші фактичні URL-адреси зображень

// Тип для пропсів компонента (хоча тут пропси не використовуються,
// це хороша практика TypeScript)
interface ImageGridProps {
  // Тут можуть бути додаткові пропси, якщо потрібно
}

const ModalGridGallary: React.FC<ImageGridProps> = () => {
  return (
    // Використовуємо div з Tailwind CSS класами, де 'grid' відповідає за CSS Grid.
    // Класи `grid-cols-6` та `grid-rows-4` встановлюють сітку 6x4 для великих екранів.
    // Медіа-запит `max-width: 900px` обробляється за допомогою префіксу `sm:` або
    // прямо в CSS-модулі (див. нижче). Для простоти тут використаємо інлайн-стилі,
    // які прив'язані до модуля CSS.
    <div className="image-grid-container">
      { galleryData.map((url, index) => (
        <div key={index} className="image-item">
          <Image
            src={url.image}
            alt={`Галерея Зображення ${index + 1}`}
            fill // <-- Використовуємо fill
            sizes="(max-width: 700px) 25vw, 16.6vw" 
            style={{ objectFit: 'cover' }} // <-- objectFit керує обрізанням/масштабуванням
          />        </div>
      ))}
    </div>
  );
};

export default ModalGridGallary;
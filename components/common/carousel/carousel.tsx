import { useState, useEffect} from 'react';
import Image from 'next/image';
import Loader from '@/components/common/loader/loader'
import './carousel.css';

const Carousel = ( {src} : {src: string}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  if (isLoading)
    return (<Loader />);

  return (
    <>
    </>
  )
}

export default Carousel

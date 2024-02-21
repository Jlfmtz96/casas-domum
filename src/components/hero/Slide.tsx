'use client';

import { SetStateAction, useEffect, useState } from "react";

import styles from './Hero.module.css';

interface ImageData {
  imagen: string;
  url: string;
  title: string;
  location: string;
}

interface HeroProps {
  images: ImageData[];
}


export const Slide = ({ images }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetTimer(false); // Restablecer el temporizador

      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)

    return () => clearInterval(interval);
  }, [resetTimer, currentIndex, images]);

  const handleButtonClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
    setResetTimer(true); // Reiniciar el temporizador al hacer clic en un botón
  };

  // Función para cambiar la clave de animación cada vez que cambia el título
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [images[currentIndex].imagen]);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-10 inset-0 bg-neutral-900 bg-[size:20px_20px] opacity-35 blur-[100px]"></div>
      {images.map((imageUrl, index) => (
        <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full transition-transform duration-[10000ms] ease-in-out transform ${
          index === currentIndex ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
        }`}
        style={{
          backgroundImage: `url(${imageUrl.imagen})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        />
      ))}
      <div 
      key={animationKey}
      className="absolute z-30 md:px-40 left-1/2 md:left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 text-white p-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-nowrap ${styles['slide-animation']}`}>
          {images[currentIndex].title}
        </h2>
        <h4 className={`mt-6 lg:ml-52 tracking-[0.3em] uppercase ${styles['slide-animation-out']}`}>{images[currentIndex].location}</h4>
        <div className={`mt-12 lg:ml-52 slide-link ${styles['slide-animation-up']}`}>
          <a href={images[currentIndex].url} className='border p-4 text-sm hover:border-[#C91E7B] hover:border-2'>
            <span>Ver desarrollo</span> 
          </a>
        </div>
      </div>

      <div className="px-8 absolute z-30 bottom-10 grid grid-cols-2 w-full items-center justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`text-white px-4 py-2 col-span-1 ${
              currentIndex === index ? styles['active-button'] : ''
            }`}
            onClick={() => handleButtonClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

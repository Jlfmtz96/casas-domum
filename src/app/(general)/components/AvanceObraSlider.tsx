import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface AvanceObra {
    image: string | StaticImageData;
    date: string;
}

interface AvanceObraSliderProps {
    avances: AvanceObra[];
}

const AvanceObraSlider: React.FC<AvanceObraSliderProps> = ({ avances }) => {
    // Número de avances de obra
    const avancesCount = avances.length;

    // Calcular cuántos skeletons se necesitan (máximo 4 en escritorio)
    const skeletonsNeeded = Math.max(0, 4 - avancesCount);

    // Crear un array de skeletons
    const skeletons = Array.from({ length: skeletonsNeeded }, (_, index) => (
        <SwiperSlide key={`skeleton-${index}`}>
            <div className="pr-4">
                <div className="relative h-[23rem] w-[23rem] overflow-hidden shadow-lg bg-gray-200 animate-pulse">
                    {/* Contenedor del skeleton */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400">Cargando...</span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="container mx-auto my-16 lg:my-28 relative">
            <h3 className="text-2xl font-sans font-medium mb-4">Avance de Obra</h3>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.custom-next-button',
                        prevEl: '.custom-prev-button',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {/* Renderizar avances reales */}
                    {avances.map((avance, index) => (
                        <SwiperSlide key={index}>
                            <div className="pr-4">
                                <div className="relative h-[23rem] w-[23rem] overflow-hidden shadow-lg">
                                    <Image
                                        src={avance.image}
                                        alt={`Avance ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className='absolute left-0 bottom-5 text-center bg-gradient-to-t from-[#dc2c81] to-[#be5f8d] px-4 py-2'>
                                        <p className="text-white">{avance.date}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Renderizar skeletons si es necesario */}
                    {skeletons}
                </Swiper>
            </div>

            {/* Botones de navegación personalizados */}
            <div className="hidden lg:flex flex-col justify-end gap-3 absolute right-0 bottom-0 mt-8 z-20">
                <button className="custom-prev-button w-14 h-14 rounded-full bg-gradient-to-t from-[#dc2c81] to-[#be5f8d] text-white flex items-center justify-center transition-colors">
                    &#10094; {/* Icono de flecha izquierda */}
                </button>
                <button className="custom-next-button w-14 h-14 rounded-full bg-gradient-to-t from-[#dc2c81] to-[#be5f8d] text-white flex items-center justify-center transition-colors">
                    &#10095; {/* Icono de flecha derecha */}
                </button>
            </div>
        </div>
    );
};

export default AvanceObraSlider;
'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AvanceObraSlider from "../../components/AvanceObraSlider";

import MapView from "@/components/map/MapView";


export default function AliaQroPage() {
    const galeriaRef = useRef(null);
    const mapaRef = useRef(null);
  
    const avances = [
        { image: '/assets/arslp/Alía SLP avance 1.jpg', date: '2024-09-04' },
        { image: '/assets/arslp/DJI_20250207110258_0021_D.jpg', date: '2025-02-07' },
    ];

    // Coordenadas iniciales del mapa
    const initialViewState = {
        longitude: -100.86133871049233,
        latitude: 22.065481697549046,
        zoom: 13,
    };

    // Marcadores para el mapa
    const markers = [
        { 
            longitude: -100.86133871049233,
            latitude: 22.065481697549046,
            link: 'https://maps.app.goo.gl/YSu6CExbAB74u2B6A', // Enlace opcional
        },
        // Agrega más marcadores según sea necesario
    ];
    
  return (
    <section>
        <div className="h-screen w-full overflow-hidden">
            <Image src={'/assets/DSC00884.jpg'} alt="" layout="fill" objectFit="cover" />
        </div>

        <div className="container mx-auto">
            <div className="px-4 lg:px-0">
                <div className="flex gap-2 md:gap-4 mt-4 mb-20">
                    <Link href={'/desarrollos'} className="font-sans text-gray-500 text-sm md:text-base hover:underline">Desarrollos</Link>
                    <span>/</span>
                    <Link href={'/desarrollos/alia-residencial-slp'} className="font-sans text-sm md:text-base text-pink-500 hover:underline">Casas Domum</Link>
                </div>


                <div>
                    <Image src={'/assets/domum color.png'} alt='' width={220} height={220} className='mb-4' />
                    <span className='uppercase tracking-[0.5em] font-medium'>San Luis Potosí</span>
                </div>

                <div className='container mx-auto lg:px-96 text-xl lg:text-3xl mt-16'>
                <p>Ubicado dentro del macro desarrollo más importante en la ciudad Los Lagos Residencial, en privada Cielo Abierto, frente al Parque Tres Naciones. </p>
                {/* <p>Desde tu futuro hogar, disfrutarás de panorámicas hacia la ciudad de San Luis Potosí y hacia la majestuosa cañada, también conocida como el Paseo a la Presa de San José.</p> */}

                {/* Este exclusivo desarrollo residencial está diseñado para aquellos que valoran la privacidad y la belleza natural. Con una ubicación estratégica, podrás estar a pocos minutos de los principales puntos de la ciudad, mientras disfrutas de un entorno único y rodeado de tranquilidad. */}
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 text-2xl font-sans font-medium mt-16 lg:mt-28">
            Galería
        </div>
        {/* <h3 className="text-2xl font-sans font-medium mb-4">Galeria</h3> */}
        <div id="galeria" className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 lg:px-2" ref={galeriaRef}>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/domum/DSC00834.jpg'} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/domum/DSC00866.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/domum/DSC00849.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/domum/DSC00865.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/domum/DSC00883.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/domum/DSC00887.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>

        </div>

        <div className="container mx-auto mt-16 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-0">
            <div className="lg:pr-20">
                <h3 className="font-medium text-4xl lg:text-5xl">Terrenos Residenciales en privada</h3>
                <p className="text-lg font-sans my-6 lg:mt-16">37 exclusivos lotes ubicados en una privada con alberca, acceso controlado, casa club y gimnasio. La lotificación es excepcional, con la mayoría de los lotes orientados hacia la casa club. Algunos cuentan con una ligera pendiente negativa, y en la parte baja del terreno se encuentra el sistema de drenaje.</p>
            </div>
            <div className="relative min-h-96 lg:min-h-[40rem] overflow-hidden">
                <Image src={'/assets/arslp/Alía SLP 11.02.25.jpg'} alt="" layout="fill" objectFit="cover" />
            </div>            
        </div>

        <div className="container mx-auto mt-16 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-0">
            <div className="relative min-h-96 lg:min-h-[40rem] overflow-hidden">
                <Image src={'/assets/arqro/hacienda1.jpg'} alt="" layout="fill" objectFit="cover" />
            </div>    
            <div className="lg:pl-20">
                <h3 className="font-medium text-4xl lg:text-5xl">Se parte de algo único</h3>
                <p className="text-lg font-sans mt-6 lg:mt-16">Un proyecto exclusivo diseñado por Artigas Arquitectos, donde se combinan diseño contemporáneo y confort en una ubicación privilegiada.</p>
                <p className="text-lg font-sans mt-6">Conoce este desarrollo exclusivo y déjate impresionar por la originalidad y precisión en cada detalle.</p>

            </div>        
        </div>

        <div className="container mx-auto my-16 px-2 lg:px-0">
            <AvanceObraSlider avances={avances} />
        </div>

        <div id="mapa" ref={mapaRef} className="overflow-hidden">
            <MapView initialViewState={initialViewState} markers={markers} />
        </div>

    </section>
  );
}
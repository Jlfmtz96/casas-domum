'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AvanceObraSlider from "../../components/AvanceObraSlider";
import MapView from "@/components/map/MapView";


export default function AliaQroPage() {
    const galeriaRef = useRef(null);
    const mapaRef = useRef(null);
  
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const avances = [
        { image: '/assets/arqro/DJI_20240919181642_0216_D.jpg', date: '2024-09-19' },
        { image: '/assets/arqro/DJI_20250116114703_0239_D.jpg', date: '2025-01-16' },
        { image: '/assets/arqro/ao20250116.jpg', date: '2025-01-16' },
        { image: '/assets/arqro/Parte 3.jpg', date: '2025-02-15' },
        { image: '/assets/arqro/Parte 3.1.jpg', date: '2025-02-16' },
        { image: '/assets/arqro/ao20250213.jpg', date: '2025-02-16' },
        { image: '/assets/arqro/ao202502132.jpg', date: '2025-02-16' },
        { image: '/assets/arqro/ao20250214.jpg', date: '2025-02-16' },
    ];

    // Coordenadas iniciales del mapa
    const initialViewState = {
        longitude: -100.31347130980191,
        latitude: 20.596930607764385,
        zoom: 13,
    };

    // Marcadores para el mapa
    const markers = [
        {
            longitude: -100.31347130980191,
            latitude: 20.596930607764385,
            link: 'https://maps.app.goo.gl/TLFyNmJDZMGgFVLN6', // Enlace opcional
        },
        // Agrega más marcadores según sea necesario
    ];
    
  return (
    <section>
        <div className="h-screen w-full overflow-hidden">
            <Image src={'/assets/Alia_Casa_Club.jpg'} alt="" layout="fill" objectFit="cover" />
        </div>

        <div className="container mx-auto">
            <div className="px-4 lg:px-0">
                <div className="flex gap-2 md:gap-4 mt-4 mb-20">
                    <Link href={'/desarrollos'} className="font-sans text-gray-500 text-sm md:text-base hover:underline">Desarrollos</Link>
                    <span>/</span>
                    <Link href={'/desarrollos/alia-residencial-qro'} className="font-sans text-sm md:text-base text-pink-500 hover:underline">Alía Residencial Querétaro</Link>
                </div>


                <div>
                    <Image src={'/assets/Aliìa_logo_negro.png'} alt='' width={220} height={220} className='mb-4' />
                    <span className='uppercase tracking-[1.1em] font-medium'>Querétaro</span>
                </div>

                <div className='container mx-auto lg:px-96 text-xl lg:text-3xl mt-16'>
                    ¡Bienvenido a Alia Residencial! Te invitamos a conocer nuestro nuevo proyecto, pensado para que tú y tu familia hagan realidad el sueño de tener un hogar propio. Disfruta de espaciosas casas con acabados de excelente calidad, rodeadas de áreas verdes y amenidades excepcionales. ¡Tu nuevo estilo de vida te espera!
                </div>
            </div>
        </div>

        {/* <div className="container mx-auto mt-16 lg:mt-28 hidden md:block">
            <div id="info" className=" p-10 relative">
                <div className="mt-10 mb-4 2xl:my-10">
                    <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Fecha:</span> Mayo - 21 - 2018</p>
                    <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Estatus:</span>Terminado</p>
                    <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Diseño:</span>Artigas</p>
                    <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Ubicación:</span>Los Lagos Residencial, 78421 San Luis Potosí, S.L.P, Mx</p>
                </div>

                <div className="flex space-x-20 mb-5">
                    <div className="flex space-x-4 items-end">
                        <Image src={Terreno} alt="" height={30}/>
                        <p className="text-nowrap">162 m<sup>2</sup></p>
                    </div>
                    <div className="flex space-x-4 items-end">
                        <Image src={Mts} alt="" height={30}/>
                        <p className="text-nowrap">231.29 m<sup>2</sup></p>
                    </div>
                </div>
                
                <div id="menu" className="hidden md:flex md:space-x-10 border-t p-4 w-full justify-center">
                    <Link href={'#'} passHref>
                        <div className='hover:text-[#C91E7B] focus:outline-none flex space-x-2' onClick={() => scrollToRef(galeriaRef)}>
                            <IoImage />
                            <span className="text-xs tracking-[0.2em] uppercase">Galeria</span>
                        </div>
                    </Link>
                    <Link href={'#'} passHref>
                        <div className='hover:text-[#C91E7B] focus:outline-none flex space-x-2' onClick={() => scrollToRef(mapaRef)}>
                            <IoLocation />
                            <span className="text-xs tracking-[0.2em] uppercase">Tu entorno</span>
                        </div>
                    </Link>
                    <Link href={'#'} passHref>
                        <div className='hover:text-[#C91E7B] focus:outline-none flex space-x-2' onClick={() => scrollToRef(plantaRef)}>
                            <IoMap />
                            <span className="text-xs tracking-[0.2em] uppercase">Plantas</span>
                        </div>
                    </Link>
                    <Link href={'#'} passHref>
                        <div className='hover:text-[#C91E7B] focus:outline-none flex space-x-2' onClick={() => scrollToRef(recorridoRef)}>
                            <IoCube />
                            <span className="text-xs tracking-[0.2em] uppercase">Recorrido 360°</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div> */}

        <div className="container mx-auto px-4 lg:px-0 text-2xl font-sans font-medium mt-16 lg:mt-28">
            Galería
        </div>
        {/* <h3 className="text-2xl font-sans font-medium mb-4">Galeria</h3> */}
        <div id="galeria" className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 lg:px-2" ref={galeriaRef}>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/arqro/acceso.webp'} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/arqro/R01_ALIA.webp'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/arqro/24A_R9_CDM_R01_TREN_FCH1.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/arqro/24A_R9_CDM_R01_TREN_FCH3.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/arqro/R01_TESSA.webp'} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='relative hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl h-96 w-full'>
                <Image src={'/assets/24A_CDM_R08_CASA_C-1.jpg'} alt="" layout="fill" objectFit="cover"/>
            </div>

        </div>

        <div className="container mx-auto mt-16 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-0">
            <div className="lg:pr-20">
                <h3 className="font-medium text-4xl lg:text-5xl">Descubre un estilo de vida exclusivo</h3>
                <p className="text-lg font-sans my-6 lg:mt-16">94 residencias diseñadas para ofrecerte comodidad, privacidad y tranquilidad. Cada uno de nuestros siete modelos de casas, cuenta con espacios amplios y distribuciones inteligentes, perfectas para disfrutar de tu día a día.</p>

                <Link
                    href="https://aliaresidencial.mx/"
                    className="border p-4 text-sm flex items-center justify-between group relative overflow-hidden w-52"
                    >
                    {/* Texto "Ver más" */}
                    <span className="transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                        Alía Residencial
                    </span>

                    {/* Contenedor de la línea y la flecha */}
                    <div className="relative flex items-center justify-end flex-1">
                        {/* Línea que crece */}
                        <div className="absolute right-0 h-[2px] bg-black rounded-full transition-all duration-300 w-10 group-hover:w-44">
                        {/* <div className="w-10 h-full bg-black transition-all duration-300 group-hover:w-full"></div> */}
                        </div>

                        {/* Flecha SVG */}
                        <svg
                        fill="none"
                        height="12"
                        width="7"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                        >
                        <path
                            d="M5 5.25a.75.75 0 0 0 0 1.5v-1.5Zm1.53 1.28a.75.75 0 0 0 0-1.06L1.757.697a.75.75 0 0 0-1.06 1.06L4.939 6 .697 10.243a.75.75 0 0 0 1.06 1.06L6.53 6.53ZM5 6.75h1v-1.5H5v1.5Z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </div>
                </Link>
            </div>
            <div className="relative min-h-96 lg:min-h-[40rem] overflow-hidden">
                <Image src={'/assets/arqro/Maste_Alia.jpg'} alt="" layout="fill" objectFit="cover" objectPosition="left" />
            </div>            
        </div>

        <div className="container mx-auto mt-16 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-0">
            <div className="relative min-h-96 lg:min-h-[40rem] overflow-hidden">
                <Image src={'/assets/arqro/hacienda1.jpg'} alt="" layout="fill" objectFit="cover" />
            </div>    
            <div className="lg:pl-20">
                <h3 className="font-medium text-4xl lg:text-5xl">Comparte momentos únicos</h3>
                <p className="text-lg font-sans mt-6 lg:mt-16">Ubicado a solo unos pasos de Alía Residencial, el desarrollo cuenta con una amplia gama de amenidades diseñadas para brindarte comodidad, entretenimiento y bienestar en un solo lugar.</p>
                <p className="text-lg font-sans mt-6">La Hacienda Corralejo cuenta con un restaurante y bar donde podrás disfrutar de deliciosos platillos y bebidas, una terraza al aire libre para relajarte y un lobby elegante que marca la calidad del desarrollo. Además, encontrarás espacios comunes, una capilla, un patio con áreas verdes para descansar y un futuro salón de eventos.</p>

                <p className="text-lg font-sans">Además, disfrutarás de un parque lineal para paseos al aire libre y un mirador con vistas impresionantes, brindando un entorno perfecto para tu día a día.</p>
                <p className="text-lg font-sans">Haz de Alía Residencial tu nuevo hogar y vive rodeado de lo mejor, donde cada detalle está pensado para ti.</p>
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
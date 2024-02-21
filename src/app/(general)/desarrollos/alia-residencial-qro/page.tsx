'use client';

import Image from "next/image";
import Link from "next/link";
import { IoCube, IoImage, IoLocation, IoMap } from "react-icons/io5";
import { MutableRefObject, useRef } from "react";

import L5 from '../../../../assets/ALIA_E24A_R01_COMEDOR.jpg'
import r6 from '../../../../assets/r6.jpeg'
import r7 from '../../../../assets/r7.jpeg'
import r1 from '../../../../assets/r1.jpeg'
import r8 from '../../../../assets/r8.jpg'
import PlantaB from '../../../../assets/planta b.png'
import PlantaA from '../../../../assets/planta A.png'
import Alia from '../../../../assets/icono_icono_verde.png'
import Terreno from '../../../../assets/icono 160m2.png'
import Mts from '../../../../assets/icono 231.29m2.png'
import ModalImage from "react-modal-image";




export default function AliaQroPage() {
    const galeriaRef = useRef(null);
    const mapaRef = useRef(null);
    const plantaRef = useRef(null);
    const recorridoRef = useRef(null);
  
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    
  return (
    <section className="mt-40">
        <div className="container mx-auto">

            <div className="px-4 lg:px-44 flex space-x-5">
                <div>
                    <Image src={Alia} alt="" width={100}/>
                </div>
                <div>
                    <span className='text-xs tracking-[0.2em] uppercase'>NUESTROS DESARROLLOS</span>
                    <h3 className='font-bold text-3xl md:text-5xl mt-2'>ALIA Residencial</h3>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-16">
            <div id="info" className=" p-10 relative">
                <div className="">
                    <p className="text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipis lot cing elit, sed doeiusmod tempor incididunt ut stit labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
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
        </div>

        <div id="galeria" className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-2" ref={galeriaRef}>
            <div className='hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl'>
                <Image src={r1} alt="" className='object-cover w-full h-full ' />
            </div>
            <div className='hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl'>
                <Image src={r6} alt="" className='object-cover w-full h-full '/>
            </div>
            <div className='hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl'>
                <Image src={L5} alt="" className='object-cover w-full h-full '/>
            </div>
            <div className='hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl'>
                <Image src={r8} alt="" className='object-cover w-full h-full '/>
            </div>
            <div className='hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl'>
                <Image src={r1} alt="" className='object-cover w-full h-full '/>
            </div>
            <div className='hover:transform hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:shadow-xl'>
                <Image src={r7} alt="" className='object-cover w-full h-full '/>
            </div>

        </div>

        <div id="mapa" ref={mapaRef}>
            <div className="w-full h-[450px] md:h-[650px] mt-40">
                <iframe loading="lazy" src="https://residencialloslagos.com.mx/mapbox/mapbox.html" className="w-full h-full"></iframe>
            </div>
        </div>

        <div id="planta" ref={plantaRef} className="container mx-auto mt-40 md:mt-0">
            <h2 className='font-bold text-5xl text-center'>Plantas</h2>
            <div className="mt-16 md:flex md:space-x-6">
                <div className="md:w-1/2 bg-slate-100 p-8">
                    <div className="flex justify-center">
                        <ModalImage small={PlantaB.src} large={PlantaB.src} alt="" className="h-auto w-[250px]"/>
                    </div>
                    <div>
                        <div className="flex my-10 items-center justify-between">
                            <h3 className='font-bold text-2xl'>Planta Baja</h3>
                            <span className='border-b-2 w-1/2 2xl:w-3/4'></span>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                            <div>🚗 Cochera</div>
                            <div>🛋 Sala</div>
                            <div>🍴 Comedor</div>
                            <div>🍳 Cocina</div>
                            <div>🛁 1 Baño</div>
                            <div>🚽 1/2 Baño</div>
                            <div>🛏 1 Recámara</div>
                            <div>🧺 Área de Servicio</div>
                            <div>🏡 Jardín</div>

                        </div>
                    </div>

                </div>
                <div className="md:w-1/2 mt-16 md:mt-0 bg-slate-100 p-8">
                    <div className="flex justify-center">
                    <ModalImage small={PlantaA.src} large={PlantaA.src} alt="" className="h-auto w-[250px]"/>
                    </div>

                    <div>
                        <div className="flex my-10 items-center justify-between">
                            <h3 className='font-bold text-2xl'>Planta Alta</h3>
                            <span className='border-b-2 w-1/2 2xl:w-3/4'></span>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                            <div>⬜ Balcón</div>
                            <div>🛏 2 Recámaras</div>
                            <div>🛁 2 Baños</div>
                            <div>📺 Área de TV</div>
                            <div>👗 vestidor</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="recorrido" ref={recorridoRef} className="container mx-auto mt-40">
            <h2 className='font-bold text-5xl text-center'>Recorrido 360°</h2>
            <div id="praga" className="mt-16"></div>
            <iframe src="https://my.matterport.com/show/?m=DsTeEwQvgrm" width="100%" height="700px" frameBorder="0" allowFullScreen></iframe>
        </div>

    </section>
  );
}
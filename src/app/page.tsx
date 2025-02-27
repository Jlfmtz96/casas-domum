import { Banner, Contact, Footer, Hero, NavBar } from "@/components";
import Image from "next/image";

import casas from '../assets/Casas Qro.jpg';
import Artigas from '../assets/Artigas_Logo.svg';
import lagos from '../assets/E1E5D2AE-DD7F-4B6D-8E07-D487F3C1071B.jpg';
import vm from '../assets/arslp/VILLAMGN_SEM_R09_ACCESO_2.jpg';
import qro from '../assets/acceso.webp';
import Alia from '../assets/icono_icono_blanco.png';
import logoAlia from '../assets/Aliìa_logo_blanco.png'
import Domum from '../assets/domum bl.png';
import Link from "next/link";

const Especialidad = [
  { ruta: 'https://freebw.com/templates/tatee/images/icon/service-01.png', texto: 'Arquitectura' },
  { ruta: 'https://freebw.com/templates/tatee/images/icon/service-02.png', texto: 'Interior' },
  { ruta: 'https://freebw.com/templates/tatee/images/icon/service-03.png', texto: 'Planeación' },
  // Agrega más objetos para más imágenes
];

const Firmas = [
  { ruta: Artigas, texto: '' },
];

export default function Home() {
  return (
    <main>
      {/* <Slide images={images}/> */}
      <NavBar />
      <Hero />

      <section className='container mx-auto mt-40'>
        <div className="lg:flex lg:space-x-12">
            <div className='relative lg:w-1/2 min-h-96 lg:min-h-[40rem] overflow-hidden'>
                <Image src={casas} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className='lg:w-1/2 px-8 lg:px-0 mt-10'>
                <span className='text-xs tracking-[0.2em] uppercase'>Somos <h1 className="inline-flex">Casas Domum</h1></span>
                <h3 className='font-bold text-3xl mt-2'>Nuestros residenciales se inspiran en el reto de equilibrar funcionalidad y belleza.</h3>
                <p className='mt-6'>En Casas Domum, nos enorgullecen los 10 años de trayectoria que respaldan
                    nuestro compromiso con la excelencia. Hemos entregado exitosamente múltiples
                    proyectos, gracias a la confianza y satisfacción de nuestros clientes. El equipo se
                    dedica a cada detalle, seleccionando materiales de primera y creando espacios
                    que combinan funcionalidad con elegancia. ¡Nos apasiona construir el hogar de
                    tus sueños!
                </p>
                <div className='mt-16'>
                    <a href="" className='border p-4 text-sm'>
                        <span>Contactanos</span> 
                    </a>
                </div>
                <div className='mt-16 grid grid-cols-2 gap-2 md:grid-cols-3'>
                    <div>
                        <span className='font-bold text-3xl'>10</span>
                        <p className=' uppercase tracking-[0.2em] text-xs md:text-nowrap'>Años de experiencia</p>
                    </div>
                    <div>
                        <span className='font-bold text-3xl'>100</span>
                        <p className=' uppercase tracking-[0.2em] text-xs md:text-nowrap'>Clientes Felices</p>
                    </div>
                    <div>
                        <span className='font-bold text-3xl'>3</span>
                        <p className=' uppercase tracking-[0.2em] text-xs md:text-nowrap'>Proyectos Completados</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Banner
      title="Nuestra especialidad"
      subTitle="Lo que nos distingue"
      imagenes={Especialidad} 
      bg="bg-slate-100"
      size={100}
      />

      <section className="container mx-auto mt-40">
        <div className="text-center">
            <span className="text-xs tracking-[0.2em] uppercase">Nuestro Trabajo</span>
            <h3 className="font-bold text-3xl mt-2">Últimos Desarrollos</h3>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-8">
            <Link href='/desarrollos/alia-residencial-qro' className='group relative'>
                <div className='min-h-96 lg:min-h-[40rem] overflow-hidden'>
                    <Image src={qro} alt="" layout="fill" objectFit="cover" objectPosition="left" />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center'>
                    <Image src={Alia} width={200} height={200} alt="" />
                    <span className='text-sm uppercase tracking-[1.2em] mt-2'>Querétaro</span>
                </div>
                <div className="hidden lg:block absolute top-0 left-0 bg-pink-500 text-white w-full h-full p-10 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <div className="flex h-full flex-col items-start justify-between">
                        <div>
                            <Image src={logoAlia} width={200} height={200} alt="" />
                            <span className='text-sm uppercase tracking-[1.2em] mt-2'>Querétaro</span>
                        </div>

                        <div className="opacity-0 transition-opacity duration-300 ease-out lg:group-hover:opacity-100">
                            <p className="text-xl mb-4">Alía Residencial Querétaro te brinda una ubicación privilegiada en una de las zonas con mayor crecimiento y plusvalía, convirtiendo tu hogar en una inversión segura.</p>

                            <div className="relative flex items-center justify-end w-40">
                                {/* Línea que crece */}
                                <div className="absolute right-0 h-[2px] bg-white rounded-full transition-all duration-300 w-10 group-hover:w-full">
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
                        </div>
                    </div>

                </div>
            </Link>

            <Link href='/desarrollos/alia-residencial-slp' className='group relative'>
                <div className='min-h-96 lg:min-h-[40rem] overflow-hidden'>
                    <Image src={vm} alt="" layout="fill" objectFit="cover" objectPosition="left" />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center'>
                    <Image src={Alia} width={200} height={200} alt="" />
                    <span className='text-sm uppercase tracking-[0.8em] mt-2'>San Luis Potosí</span>
                </div>
                <div className="hidden lg:block absolute top-0 left-0 bg-pink-500 text-white w-full h-full p-10 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <div className="flex h-full flex-col items-start justify-between">
                        <div>
                            <Image src={logoAlia} width={200} height={200} alt="" />
                            <span className='text-sm uppercase tracking-[0.5em] mt-2'>San Luis Potosí</span>
                        </div>

                        <div className="opacity-0 transition-opacity duration-300 ease-out lg:group-hover:opacity-100">
                            <p className="text-xl mb-4">Alía Residencial San Luis Potosí, se ubica dentro de los puntos más altos de Villa Magna. Lo que te permite vistas espectaculares hacia la ciudad y hacia la cañada mejor conocido como paseo a la Presa de San José.</p>

                            <div className="relative flex items-center justify-end w-40">
                                {/* Línea que crece */}
                                <div className="absolute right-0 h-[2px] bg-white rounded-full transition-all duration-300 w-10 group-hover:w-full">
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
                        </div>
                    </div>

                </div>
                {/* <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <Link href="/desarrollos/alia-residencial-qro">
                        <h3 className='font-bold text-xl'>Alia Residencial</h3>
                    </Link>
                    <span className='text-xs'>Querétaro, Mx</span>
                </div> */}
            </Link>
            {/* <div className='group relative'>
                <div className='min-h-96 lg:min-h-[40rem] overflow-hidden'>
                    <Image src={r4} alt="" className='object-cover w-full h-full'/>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em] '>Próximamente</span>
                    <Image src={Alia} alt="" width={200} height={200} className='opacity-75' />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <Link href="/desarrollos/alia-residencial-qro">
                        <h3 className='font-bold text-xl'>Alia Resindencial</h3>
                    </Link>
                    <span className='text-xs'>San Luis Potosí, Mx</span>
                </div>
            </div> */}
            <div className="lg:col-span-2 mt-6 text-center lg:text-left">
              <h3 className="font-bold text-3xl mt-2">Desarrollos Terminados</h3>
            </div>
            <Link href={'/desarrollos/casas-domum'} className='group relative lg:col-span-2'>
                <div className='min-h-96 lg:min-h-[40rem] overflow-hidden'>
                    <Image src={lagos} alt="" layout="fill" objectFit="cover" />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                    <Image src={Domum} width={300} height={300} alt="" />
                    <span className='text-sm uppercase tracking-[0.2em]'>Los Lagos, San Luis Potosí</span>
                </div>

                <div className="hidden lg:block absolute top-0 left-0 bg-pink-500 text-white w-full h-full p-10 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <div className="flex h-full flex-col items-start justify-between">
                        <div>
                            <Image src={Domum} width={200} height={200} alt="" />
                            <span className='text-sm uppercase tracking-[0.5em] mt-2'>San Luis Potosí</span>
                        </div>

                        <div className="opacity-0 transition-opacity duration-300 ease-out lg:group-hover:opacity-100">
                            <p className="text-xl mb-4">Casas Domum San Luis Potosí está ubicada en el macrodesarrollo más importante de la ciudad, Los Lagos Residencial, en la privada Cielo Abierto, <br /> justo frente al Parque Tres Naciones.</p>

                            {/* <div className="relative flex items-center justify-end w-40">
                                <div className="absolute left-0 right-0 h-[1.5px] bg-white overflow-hidden rounded-full">
                                    <div className="w-0 h-full bg-white transition-all duration-300 group-hover/arrow:w-full"></div>
                                </div>
                                <svg fill="none" height="12" width="7" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                                    <path d="M5 5.25a.75.75 0 0 0 0 1.5v-1.5Zm1.53 1.28a.75.75 0 0 0 0-1.06L1.757.697a.75.75 0 0 0-1.06 1.06L4.939 6 .697 10.243a.75.75 0 0 0 1.06 1.06L6.53 6.53ZM5 6.75h1v-1.5H5v1.5Z" fill="currentColor"></path>
                                </svg>
                            </div> */}

                            <div className="relative flex items-center justify-end w-40">
                                {/* Línea que crece */}
                                <div className="absolute right-0 h-[2px] bg-white rounded-full transition-all duration-300 w-10 group-hover:w-full">
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
                        </div>
                    </div>

                </div>
                
                {/* <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <Link href="/desarrollos/alia-residencial-qro">
                        <h3 className='font-bold text-xl'>Casas Domum</h3>
                    </Link>
                    <span className='text-xs'>San Luis Potosí, Mx</span>
                </div> */}
            </Link>

        </div>
        <div className='mt-16 text-center'>
            <Link href="/desarrollos" className='border p-4 text-sm'>
                <span>Ve todos los proyectos</span> 
            </Link>
        </div>
      </section>
      
      <Banner
      title="Firmas Destacadas"
      subTitle="Diseños Impresionantes"
      imagenes={Firmas} 
      bg=""
      size={200}
      />

      <Contact />

      <Footer />

    </main>
  );
}

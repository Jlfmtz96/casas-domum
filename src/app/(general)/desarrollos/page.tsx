import r1 from '../../../assets/24A_CDM_R10_VISTA_4.webp'
import r2 from '../../../assets/VILLAMGN_SEM_R09_AV-4.jpg'
import r3 from '../../../assets/DSC00884.jpg'
import Alia from '../../../assets/icono_icono_gris.png'
import Domum from '../../../assets/domum color.png'
import logoAlia from '../../../assets/Aliìa_logo_negro.png'

import Image from 'next/image'
import Link from 'next/link'

export default function DesarrollosPage() {
  return (
    <section className="my-40">
        <div className="container mx-auto">
            <div className="px-4 lg:px-0">
                <h3 className='font-medium text-3xl md:text-7xl font-sans'>Diseño y confort en armonía</h3>
                <div className='mt-8 flex items-center gap-4'>
                    <span className='text-xs tracking-[0.2em] uppercase'>Nuestros Desarrollos</span>
                    <div className="relative flex items-center justify-end w-32">
                        <div className="absolute right-0 h-[2px] bg-black rounded-full w-full"></div>
                    </div>
                </div>
                <div className='container mx-auto px-96 text-3xl mt-16'>
                Te presentamos desarrollos diseñados para brindarte exclusividad, comodidad y una ubicación privilegiada. Espacios pensados para que disfrutes de un estilo de vida único, rodeado de naturaleza y excelentes amenidades.
                </div>
            </div>

            <div className="mt-20 px-4 lg:px-0">

                <div className='flex flex-col gap-20'>
                    <div className='grid grid-cols-2 gap-20 items-center'>
                        <div>
                            <Image src={logoAlia} alt='' width={300} height={300} className='mb-4' />
                            <span className='text-xl uppercase tracking-[1.2em] font-medium'>Querétaro</span>

                            <p className='text-xl my-14'>Alía Residencial Querétaro te brinda una ubicación privilegiada en una de las zonas con mayor crecimiento y plusvalía, convirtiendo tu hogar en una inversión segura.</p>

                            <Link
                                href="/desarrollos/alia-residencial-qro"
                                className="border p-4 text-sm flex items-center justify-between group relative overflow-hidden w-40"
                                >
                                {/* Texto "Ver más" */}
                                <span className="transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                                    Ver más
                                </span>

                                {/* Contenedor de la línea y la flecha */}
                                <div className="relative flex items-center justify-end flex-1">
                                    {/* Línea que crece */}
                                    <div className="absolute right-0 h-[1.5px] bg-black rounded-full transition-all duration-300 w-10 group-hover:w-32">
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
                        <div className='min-h-96 lg:min-h-[40rem] overflow-hidden bg-black relative'>
                            <Image 
                                src={r1} 
                                alt='' 
                                layout='fill' // Esto hace que la imagen ocupe todo el espacio del contenedor padre
                                objectFit='cover' // Esto asegura que la imagen cubra todo el espacio sin distorsionarse
                                className='' // Esto posiciona la imagen correctamente dentro del contenedor
                            />
                        </div>

                    </div>

                    <div className='grid grid-cols-2 gap-20 items-center'>
                        <div className='min-h-96 lg:min-h-[40rem] overflow-hidden bg-black relative'>
                            <Image 
                                src={r2} 
                                alt='' 
                                layout='fill' // Esto hace que la imagen ocupe todo el espacio del contenedor padre
                                objectFit='cover' // Esto asegura que la imagen cubra todo el espacio sin distorsionarse
                                className='' // Esto posiciona la imagen correctamente dentro del contenedor
                            />
                        </div>

                        <div>
                            <Image src={logoAlia} alt='' width={300} height={300} className='mb-4' />
                            <span className='text-xl uppercase tracking-[0.6em] font-medium'>San Luis Potosí</span>

                            <p className='text-xl my-14'>Alía Residencial San Luis Potosí, se ubica dentro de los puntos más altos de Villa Magna. Lo que te permite vistas espectaculares hacia la ciudad y hacia la cañada mejor conocido como paseo a la Presa de San José.</p>

                            <Link
                                href="/desarrollos/alia-residencial-slp"
                                className="border p-4 text-sm flex items-center justify-between group relative overflow-hidden w-40"
                                >
                                {/* Texto "Ver más" */}
                                <span className="transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                                    Ver más
                                </span>

                                {/* Contenedor de la línea y la flecha */}
                                <div className="relative flex items-center justify-end flex-1">
                                    {/* Línea que crece */}
                                    <div className="absolute right-0 h-[1.5px] bg-black rounded-full transition-all duration-300 w-10 group-hover:w-32">
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
                    </div>

                    <div className='grid grid-cols-2 gap-20 items-center'>
                        <div>
                            <Image src={Domum} alt='' width={300} height={300} className='mb-4' />
                            <span className='text-xl uppercase tracking-[0.6em] font-medium'>San Luis Potosí</span>

                            <p className='text-xl my-14'>Casas Domum San Luis Potosí está ubicada en el macrodesarrollo más importante de la ciudad, Los Lagos Residencial, en la privada Cielo Abierto, <br /> justo frente al Parque Tres Naciones.</p>

                            <Link
                                href="/desarrollos/casas-domum"
                                className="border p-4 text-sm flex items-center justify-between group relative overflow-hidden w-40"
                                >
                                {/* Texto "Ver más" */}
                                <span className="transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                                    Ver más
                                </span>

                                {/* Contenedor de la línea y la flecha */}
                                <div className="relative flex items-center justify-end flex-1">
                                    {/* Línea que crece */}
                                    <div className="absolute right-0 h-[2px] bg-black rounded-full transition-all duration-300 w-10 group-hover:w-32">
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
                        <div className='min-h-96 lg:min-h-[40rem] overflow-hidden bg-black relative'>
                            <Image 
                                src={r3} 
                                alt='' 
                                layout='fill' // Esto hace que la imagen ocupe todo el espacio del contenedor padre
                                objectFit='cover' // Esto asegura que la imagen cubra todo el espacio sin distorsionarse
                                className='' // Esto posiciona la imagen correctamente dentro del contenedor
                            />
                        </div>

                    </div>
                </div>

{/* 
                <div className='h-[600px] bg-neutral-900 overflow-hidden relative group lg:col-span-3'>
                    <Image src={r4} alt="" className='w-full h-full object-cover group-hover:opacity-50' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000 text-center text-white z-30'>
                        <Link href="/desarrollos/alia-residencial-qro">
                            <p className='uppercase font-bold text-3xl 2xl:text-4xl text-nowrap'>Alia Residencial</p>
                        </Link>
                        <span className='text-sm uppercase tracking-[0.2em] '>San Luis Potosí, Mx</span>
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-70 lg:transition-opacity lg:duration-1000 text-center text-white z-10'>
                        <Image src={Alia} alt="" width={150} height={150} />
                    </div>
                    <div className="absolute top-2 left-2 border-l-2 border-t-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000"></div>
                    <div className="absolute bottom-2 right-2 border-r-2 border-b-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000"></div>
                </div>
                <div className='h-[600px] bg-neutral-900 overflow-hidden relative group hidden lg:flex'>
                    <Image src={r2} alt="" className='w-full h-full object-cover opacity-50' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 text-center text-white z-30'>
                        <Link href="/desarrollos/alia-residencial-qro">
                            <p className='uppercase font-bold text-3xl 2xl:text-4xl text-nowrap'>Alia Residencial</p>
                        </Link>
                        <span className='text-sm uppercase tracking-[0.2em] '>San Luis Potosí, Mx</span>
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 text-center text-white z-10'>
                        <Image src={Alia} alt="" height={150} width={150} />
                    </div>
                    <div className="absolute top-2 left-2 border-l-2 border-t-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                    <div className="absolute bottom-2 right-2 border-r-2 border-b-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                </div>
                <div className='h-[600px] bg-neutral-900 overflow-hidden relative group hidden lg:flex'>
                    <Image src={r3} alt="" className='w-full h-full object-cover opacity-50' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 text-center text-white z-30'>
                        <Link href="/desarrollos/alia-residencial-qro">
                            <p className='uppercase font-bold text-3xl 2xl:text-4xl text-nowrap'>Alia Residencial</p>
                        </Link>
                        <span className='text-sm uppercase tracking-[0.2em] '>Querétaro, Mx</span>
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 text-center text-white z-10'>
                        <Image src={Alia} alt="" height={150} width={150}/>
                    </div>
                    <div className="absolute top-2 left-2 border-l-2 border-t-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                    <div className="absolute bottom-2 right-2 border-r-2 border-b-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                </div>
                <div className='h-[600px] bg-neutral-900 overflow-hidden relative group lg:col-span-3'>
                    <Image src={cdm} alt="" className='w-full h-full object-cover group-hover:opacity-50' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000 text-center text-white z-30'>
                        <Link href="/desarrollos/alia-residencial-qro">
                            <p className='uppercase font-bold text-3xl 2xl:text-4xl text-nowrap'>Alia Residencial</p>
                        </Link>
                        <span className='text-sm uppercase tracking-[0.2em] '>Querétaro, Mx</span>
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-70 lg:transition-opacity lg:duration-1000 text-center text-white z-10'>
                        <Image src={Alia} alt="" height={150} width={150}/>
                    </div>
                    <div className="absolute top-2 left-2 border-l-2 border-t-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000"></div>
                    <div className="absolute bottom-2 right-2 border-r-2 border-b-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000"></div>
                </div>
                <div className='h-[600px] bg-neutral-900 overflow-hidden relative group lg:col-span-3 md:col-span-2'>
                    <Image src={r6} alt="" className='w-full h-full object-cover group-hover:opacity-50' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000 text-center text-white z-30'>
                        <Link href="/desarrollos/alia-residencial-qro">
                            <p className='uppercase font-bold text-3xl 2xl:text-4xl text-nowrap'>Casas Domum</p>
                        </Link>
                        <span className='text-sm uppercase tracking-[0.2em] '>San Luis Potosí, Mx</span>
                    </div>
                    <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 opacity-75 lg:opacity-0 lg:group-hover:opacity-70 lg:transition-opacity lg:duration-1000 text-center text-white z-10'>
                        <Image src={Domum} alt="" height={150} width={150} />
                    </div>

                    <div className="absolute top-2 left-2 border-l-2 border-t-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000"></div>
                    <div className="absolute bottom-2 right-2 border-r-2 border-b-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000"></div>
                </div>
                <div className='h-[600px] bg-neutral-900 overflow-hidden relative group hidden lg:flex'>
                    <Image src={r5} alt="" className='w-full h-full object-cover opacity-50' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 text-center text-white z-30'>
                        <Link href="/desarrollos/alia-residencial-qro">
                            <p className='uppercase font-bold text-3xl 2xl:text-4xl text-nowrap'>Casas Domum</p>
                        </Link>
                        <span className='text-sm uppercase tracking-[0.2em] '>San Luis Potosí, Mx</span>
                    </div>
                    <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 opacity-75 text-center text-white z-10'>
                        <Image src={Domum} alt="" height={150} width={150} />
                    </div>
                    <div className="absolute top-2 left-2 border-l-2 border-t-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                    <div className="absolute bottom-2 right-2 border-r-2 border-b-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                </div> */}
            </div>
        </div>

    </section>
  );
}
import r1 from '../../../assets/d1061f84-27de-41a3-b601-c96485dc8af8.jpg'
import r2 from '../../../assets/VillaMagna.jpg'
import r3 from '../../../assets/fuente.jpg'
import r4 from '../../../assets/24A_CDM_R06B_CASA_C-1.jpg'
import r5 from '../../../assets/lagos_vista_2.jpg'
import cdm from '../../../assets/cdm.jpg'
import p2 from '../../../assets/Prototipo 2_SLP.png'
import r6 from '../../../assets/lagos.png'
import Alia from '../../../assets/icono_icono_gris.png'
import Domum from '../../../assets/domum bl.png'
import Image from 'next/image'
import Link from 'next/link'

export default function DesarrollosPage() {
  return (
    <section className="mt-40">
        <div className="container mx-auto">
            <div className="px-4 lg:px-44">
                <span className='text-xs tracking-[0.2em] uppercase'>Nuestros Desarrollos</span>
                <h3 className='font-bold text-3xl md:text-5xl mt-2'>Damos forma a nuestros residenciales después ellos nos dan forma a nosotros</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 px-4 lg:px-0">
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
                    {/* Borde en esquinas opuestas */}
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
                    {/* Borde en esquinas opuestas */}
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
                    {/* Borde en esquinas opuestas */}
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
                    {/* Borde en esquinas opuestas */}
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
                    {/* Borde en esquinas opuestas */}
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
                    {/* Borde en esquinas opuestas */}
                    <div className="absolute top-2 left-2 border-l-2 border-t-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                    <div className="absolute bottom-2 right-2 border-r-2 border-b-2 h-20 w-20 lg:h-52 lg:w-44 opacity-100"></div>
                </div>
            </div>
        </div>

    </section>
  );
}
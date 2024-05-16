import { Banner, Contact, Footer, Hero, NavBar } from "@/components";
import Image from "next/image";

import P_SLp from '../assets/Prototipo 1_SLP.png';
import Artigas from '../assets/Artigas_Logo.svg';
import r2 from '../assets/r2.jpeg';
import r4 from '../assets/VillaMagna.jpg';
import cdm from '../assets/cdm.jpg';
import Alia from '../assets/icono_icono_gris.png';
import Domum from '../assets/domum color original.png';
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
            <div className='lg:w-1/2'>
                <Image src={P_SLp} alt="" sizes="100vw"/>
            </div>
            <div className='lg:w-1/2 px-8 lg:px-0 mt-10'>
                <span className='text-xs tracking-[0.2em] uppercase'>Somos <h1 className="inline-flex">Casas Domum</h1></span>
                <h3 className='font-bold text-3xl mt-2'>Nuestros residenciales se inspiran en el reto de equilibrar funcionalidad y belleza.</h3>
                <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utins labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco cot laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vactil oluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
        <div className="mt-20 grid lg:grid-cols-2 gap-4">
            <div className='group relative'>
                <div className='h-96 overflow-hidden'>
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
            </div>
            <div className='group relative'>
                <div className='h-96 overflow-hidden'>
                    <Image src={cdm} alt="" className='object-cover w-full h-full'/>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-75 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em]'>Próximamente</span>
                    <Image src={Alia} width={200} height={200} alt="" />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <Link href="/desarrollos/alia-residencial-qro">
                        <h3 className='font-bold text-xl'>Alia Residencial</h3>
                    </Link>
                    <span className='text-xs'>Querétaro, Mx</span>
                </div>
            </div>
            <div className="lg:col-span-2 mt-6 text-center lg:text-left">
              <h3 className="font-bold text-3xl mt-2">Desarrollos Terminados</h3>
            </div>
            <div className='group relative lg:col-span-2'>
                <div className='h-96 lg:h-[500px] overflow-hidden'>
                    <Image src={r2} alt="" className='object-cover w-full h-full' />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-75 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em]'></span>
                    <Image src={Domum} width={200} height={200} alt="" />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <Link href="/desarrollos/alia-residencial-qro">
                        <h3 className='font-bold text-xl'>Casas Domum</h3>
                    </Link>
                    <span className='text-xs'>San Luis Potosí, Mx</span>
                </div>
            </div>

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

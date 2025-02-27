import Lagos from '../../assets/lagos.png';
import Logo from '../../assets/domum bl.png';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="relative py-10 w-full bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className='absolute inset-0 h-full w-full z-0'>
            <Image src={Lagos} alt="" className='object-cover  w-full h-full  opacity-40' />
        </div>
        <div className="container mx-auto z-10 relative">
            <div className='grid md:grid-cols-2 gap-4 md:gap-20 lg:gap-6 lg:grid-cols-5 text-white px-12 lg:px-0'>
                <div className='lg:col-span-2'>
                    <div>
                        <a href="">
                        <Image src={Logo} alt="" className='w-36' />
                        </a>
                    </div>
                    <div className='mt-6 text-sm'>
                        <p className='mt-2'>Dirección : Quéretaro , México</p>
                        <p className='mt-2'>Teléfono : + (898) 784-7217</p>
                        <p className='mt-2'>Email : casasdomum@gmail.com</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='font-bold uppercase text-lg'>Link</h2>
                    </div>
                    <div className='mt-2 lg:mt-6 text-sm'>
                        <ul className="[&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:mt-2">
                            <li><a href="#" className='hover:text-[#C91E7B]'>Nosotros</a></li>
                            <li><a href="#" className='hover:text-[#C91E7B]'>Desarrollos</a></li>
                            <li><a href="#" className='hover:text-[#C91E7B]'>Contacto</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='font-bold uppercase text-lg'>Social</h2>
                    </div>
                    <div className='mt-2 lg:mt-6'>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/tu.casa.comebi/" target="_blank"  rel="noopener noreferrer" className="hover:text-[#C91E7B]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg></a>
                            <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg></a>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='font-bold uppercase text-lg'>Copyright</h2>
                    </div>
                    <div className='mt-2 lg:mt-6 text-sm'>
                        <p>&copy; 2025 Casas Domum</p>
                    </div>
                </div>

            </div>

            <div className='text-white mt-20 text-xs text-center px-8'>
                *Imágenes y renders mostrados en este sitio son estrictamente de carácter ilustrativo. Los proyectos podrán cambiar o sufrir de modificaciones de acuerdo al desarrollador. Sujeto a cambios sin previo aviso. Consulta prototipos y amenidades disponibles con tu asesor.
                <div className='mt-2'>
                    <a href="" className='hover:text-[#C91E7B]'>Aviso de Privacidad</a>  
                </div>
            </div>
        </div>
    </div>
  )
}

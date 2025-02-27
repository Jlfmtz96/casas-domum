import Image from 'next/image';
import map from '../../assets/map-isometric.svg';
import chat from '../../assets/undraw_chatting_re_j55r.svg';
import email from '../../assets/sent-messages-isometric.svg';
import { IoLocationOutline, IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5';

export const Contact = () => {
  return (
    <section className="container mx-auto my-40">
        <div className="text-center">
            <span className="text-xs tracking-[0.2em] uppercase">Personas Talentosas</span>
            <h3 className="font-bold text-3xl mt-2">Conozca al equipo</h3>
        </div>
        <div className="mt-20 flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-40">
                <div>
                    <div className="relative group h-60 w-60 rounded-full overflow-hidden flex items-center">
                        <a href="">
                            <Image src={map} alt='' />
                        </a>
                        <div className="absolute inset-0 rounded-full bg-black clip-circle opacity-0 group-hover:opacity-50 transition-opacity">

                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex text-5xl text-white">
                                <a href="https://www.tiktok.com/@comebi.mx" target="_blank"  rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                                    <IoLocationOutline />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="uppercase font-bold text-xl">+ Conócenos</p>
                        <span className="text-sm text-slate-400">Quéretaro , México</span>
                    </div>
                </div>

                <div>
                    <div className="relative group h-60 w-60 rounded-full overflow-hidden flex items-center">
                        <a href="">
                            <Image src={chat} alt='' />
                        </a>
                        <div className="absolute inset-0 rounded-full bg-black clip-circle opacity-0 group-hover:opacity-50 transition-opacity">
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex text-5xl text-white">
                                <a href="https://www.tiktok.com/@comebi.mx" target="_blank"  rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                                    <IoLogoWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="uppercase font-bold text-xl">+ Llamanos</p>
                        <span className="text-sm text-slate-400">+ (898) 784-7217</span>
                    </div>
                </div>

                <div>
                    <div className="relative group h-60 w-60 rounded-full overflow-hidden flex items-center">
                        <a href="">
                            <Image src={email} alt='' />
                        </a>
                        <div className="absolute inset-0 rounded-full bg-black clip-circle opacity-0 group-hover:opacity-50 transition-opacity">
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex text-5xl text-white">
                                <a href="https://www.tiktok.com/@comebi.mx" target="_blank"  rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                                    <IoMailOutline />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="uppercase font-bold text-xl">+ Escribenos</p>
                        <span className="text-sm text-slate-400">casasdomum@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

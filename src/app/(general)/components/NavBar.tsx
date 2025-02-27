'use client';

import { useEffect, useState } from "react";
import { IoClose, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube, IoMenuOutline } from "react-icons/io5";

import styles from './Navbar.module.css';
import LogoColor from '../../../assets/domum color.png';
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isMenu, setIsMenu] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(true);
        setIsMenu(true);
      };
    
      const closeMenu = () => {
        setIsMenu(false);
        // Retrasa la actualización de isMenuOpen para que la animación tenga tiempo de ejecutarse
        setTimeout(() => {
          setIsMenuOpen(false);
        }, 1000); // Ajusta el tiempo según la duración de tu animación
      };
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          // Ajusta el valor de 100 según la posición en la que desees que se active el cambio de estilo
          setIsScrolled(scrollPosition > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <div>
            <header 
            className='py-6 px-10 fixed top-0 w-full justify-between z-40 bg-white'>
                <div className="container mx-auto">

                    <nav className="flex flex-grow basis-0 justify-end lg:justify-between items-center">
                        {/* <a href="" className='hidden lg:flex'>
                            Tel : + (898) 784 -7218
                        </a>
                        <a href="" className='hidden lg:flex'>
                            casasdomum@gmail.com
                        </a> */}
                        <div className="flex flex-grow basis-0">
                            <a href="/">
                                <Image src={ '/assets/domum color.png' } alt="" className={`transition-all duration-300 ease-in-out ${isScrolled ? 'filter-invert' : ''}`} width={120} height={120} />
                                {/* <h1 className='text-3xl font-bold'>Domum</h1> */}
                            </a>
                        </div>

                        <button className={`border-[1px] p-1`} onClick={toggleMenu}>
                            <IoMenuOutline className="h-5 w-5" />
                        </button>

                        {isMenuOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 cursor-pointer" onClick={closeMenu}></div>}

                        {isMenuOpen && (
                            <div id="menu" className={`fixed top-0 right-0 flex flex-col h-screen pt-6 bg-white text-black ${isMenu ? styles['menu-overlay'] : styles['menu-overlay-close']}`}>
                                {/* Aquí agregarías el contenido del menú */}

                                <nav className="text-3xl mx-20">
                                    <div className="flex justify-end">
                                    <button onClick={closeMenu} className="">
                                        <IoClose className="w-8 h-8"/>
                                    </button>
                                    </div>
                                    <ul className="mt-12 [&>li>a]:text-current [&>li>a]:font-bold [&>li>a]:block [&>li>a]:pr-32 [&>li>a]:py-4">
                                        <li>
                                            <Link href="/" className="hover:text-[#C91E7B]" onClick={closeMenu}>
                                                Inicio
                                            </Link>
                                        </li>
                                        <li>
                                        <Link href="/nosotros" className="hover:text-[#C91E7B]" onClick={closeMenu}>
                                            Nosotros
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href="/desarrollos" className="hover:text-[#C91E7B]" onClick={closeMenu}>
                                            Desarrollos
                                        </Link>
                                        </li>
                                        <li>
                                        {/* <Link href="/blog" className="hover:text-[#C91E7B]" onClick={closeMenu}>
                                            Blog
                                        </Link> */}
                                        </li>
                                        <li>
                                        <Link href="/contacto" className="hover:text-[#C91E7B]" onClick={closeMenu}>
                                            Contacto
                                        </Link>
                                        </li>
                                        <li className="mt-16 text-base">
                                        <Link href="/contacto" className="hover:text-[#C91E7B]">
                                            (444) 784-7217
                                        </Link>
                                        </li>
                                        <li className="text-base">
                                        <Link href="/contacto" className="hover:text-[#C91E7B]">
                                            casasdomum@gmail.com
                                        </Link>
                                        </li>
                                    </ul>

                                    <div className="flex space-x-8 mt-40">
                                        <a href="https://www.instagram.com/tu.casa.comebi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                                            <IoLogoInstagram className="w-5 h-5" />
                                        </a>
                                        <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                                            <IoLogoFacebook className="w-5 h-5" />
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        )}
                    </nav>
                </div>
            </header>

        </div>
    )
}


import Image from "next/image"
import { Slide } from "./Slide"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

import Cdm from "../../assets/04_CASETA_DE_ACCESO.jpg"
import Villa from "../../assets/VILLAMGN_SEM_R09_ACCESO_1.jpg"



const images = [
//   {
//       /* url: 'https://freebw.com/templates/tatee/images/slide-02.jpg', */
//       imagen: 'https://freebw.com/templates/tatee/images/slide-02.jpg',
//       url: '/desarrollo-lagos',
//       title: 'Casas Domum',
//       location: 'San Luis Potosí, México'
//   },
  {
      /* url: 'https://freebw.com/templates/tatee/images/slide-06.jpg', */
      imagen: '/assets/04_CASETA_DE_ACCESO.jpg',
      url: '/desarrollos/alia-residencial-qro',
      title: 'Alía Residencial',
      location: 'Querétaro, México'
  },
  {
      /* url: 'https://freebw.com/templates/tatee/images/slide-07.jpg', */
      imagen: '/assets/VILLAMGN_SEM_R09_ACCESO_1.jpg',
      url: '/desarrollos/alia-residencial-slp',
      title: 'Alía Residencial',
      location: 'San Luis Potosí, México'
  },
];

export const Hero = () => {
   
  return (
    <div className="h-screen relative overflow-hidden">
        <Slide images={images} />
        <footer className="hidden md:flex absolute bottom-28 md:right-12 xl:right-20  2xl:right-48 z-30">
          <div className="text-white">
              {/* <div className="my-10">
                  <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                      <IoLogoTiktok className="w-[16px] h-[16px]" />
                  </a>
              </div> */}
              {/* <div className="my-10">
                  <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                      <IoLogoYoutube className="w-[16px] h-[16px]"/>
                  </a>
              </div>
              <div className="my-10">
                  <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                      <IoLogoTwitter className="w-[16px] h-[16px]" />
                  </a>
              </div> */}
              <div className="my-10">
                  <a href="https://www.instagram.com/tu.casa.comebi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                      <IoLogoInstagram className="w-[16px] h-[16px]" />
                  </a>
              </div>
              <div className="my-10">
                  <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                      <IoLogoFacebook className="w-[16px] h-[16px]" />
                  </a>
              </div>
          </div>
        </footer>
    </div>
    
  )
}

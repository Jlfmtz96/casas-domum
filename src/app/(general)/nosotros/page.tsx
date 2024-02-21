import { Banner, Contact, Timeline } from "@/components";
import Image from "next/image";

const Especialidad = [
    { ruta: 'https://freebw.com/templates/tatee/images/icon/service-01.png', texto: 'Arquitectura' },
    { ruta: 'https://freebw.com/templates/tatee/images/icon/service-02.png', texto: 'Interior' },
    { ruta: 'https://freebw.com/templates/tatee/images/icon/service-03.png', texto: 'Planeación' },
    // Agrega más objetos para más imágenes
  ];

export default function NosotrosPage() {
  return (
    <section className="mt-40">
        <div className="container mx-auto">
            <div className="px-4 lg:px-44">
                <span className='text-xs tracking-[0.2em] uppercase'>Somos <h1 className="inline-flex">Casas Domum</h1></span>
                <h3 className='font-bold text-3xl md:text-5xl mt-2'>Nuestros residenciales se inspiran en el reto de equilibrar funcionalidad y belleza.</h3>
            </div>
            <div className="mt-20 w-full h-auto">
                <Image src="https://freebw.com/templates/tatee/images/page-img-01.jpg" alt="" width={1920} height={862} />
            </div>

            <div className="lg:flex mt-20 px-4 lg:px-44">
              <div className="lg:w-1/2">
                <div className="grid md:grid-cols-2 gap-16">
                  <div className="relative w-28 h-28 bg-slate-100">
                    <div className="absolute top-1/2 left-28 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="font-bold text-3xl">10+</p>
                      <span className="text-xs tracking-[0.2em] uppercase text-nowrap">Años de experiencia</span>
                    </div>
                  </div>
                  <div className="relative w-28 h-28 bg-slate-100">
                    <div className="absolute top-1/2 left-24 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="font-bold text-3xl">100+</p>
                      <span className="text-xs tracking-[0.2em] uppercase text-nowrap">Clientes felices</span>
                    </div>
                  </div>
                  <div className="relative w-28 h-28 bg-slate-100">
                    <div className="absolute top-1/2 left-36 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="font-bold text-3xl">3+</p>
                      <span className="text-xs tracking-[0.2em] uppercase text-nowrap">Proyectos completados</span>
                    </div>
                  </div>
                  <div className="relative w-28 h-28 bg-slate-100">
                    <div className="absolute top-1/2 left-28 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="font-bold text-3xl">10+</p>
                      <span className="text-xs tracking-[0.2em] uppercase text-nowrap">Premios al diseño</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 mt-20 lg-mt-0">
                <div>
                  <p className="text-lg"><span className="font-bold">Sed ut</span> perspiciatis unde omnis iste natus error sit voluptatem galax accusantium doloremque laudantium, totam rem aper ein iam sha eaque ipsa quae ab illo inventore veritatis et quasi architecto luniso beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="mt-6">
                  <p className="text-lg"><span className="font-bold">Nemo</span> enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione vshaun oluptatem sequi nesciunt.</p>
                </div>
              </div>
            </div>

            {/* <Timeline /> */}
        </div>

            <Banner
            title="Nuestra especialidad"
            subTitle="Lo que nos distingue"
            imagenes={Especialidad} 
            bg="bg-slate-100"
            size={100}
            />

            <Contact />

    </section>
  );
}
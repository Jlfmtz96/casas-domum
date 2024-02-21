import Image from "next/image";
import internal from "stream";

interface ImagenBanner {
    ruta: string;
    texto: string;
}

interface Props {
    title: string;
    subTitle: string;
    imagenes: ImagenBanner[];
    bg: string;
    size: number;
}

export const Banner = ({ title, subTitle, imagenes, bg, size }: Props) => {
  return (
    <section className="px-6 py-16 lg:p-16 mt-40 relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-[#C91E7B] bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className="container mx-auto">
        <div className="lg:flex justify-between relative">
            <div className="lg:mt-16 ">
                <span className="text-white text-xs tracking-[0.2em] uppercase">{subTitle}</span>
                <h3 className="text-white font-bold text-3xl mt-2">{title}</h3>
            </div>
            <div className="lg:flex lg:space-x-4 mt-6 lg:mt-0">
                {imagenes.map((imagen, index) => (
                    <div key={index} className={`flex mt-6 lg:mt-0 flex-col items-center justify-center ${bg} p-4 lg:w-60 lg:h-60`}>
                        <Image src={imagen.ruta} alt={`Imagen ${index}`} width={size} height={size} />
                        <p className="font-bold text-xl uppercase mt-4">{imagen.texto}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </section>
  )
}

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import MenuComidaIcon from './icons/MenuComidaIcon'

function Hero({ data }) {


  const backgroundImageUrl = data?.['imagen_fondo'][0]?.url ? (import.meta.env.VITE_STRAPI_URL + data?.['imagen_fondo'][0]?.url) : './public/restaurante.webp'

  return (
    <section className={`relative flex md:h-screen py-36 items-center bg-no-repeat bg-top bg-cover w-full flex flex-col justify-center items-center`} style={{backgroundImage: `url(${backgroundImageUrl})`}}>
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="container relative">
            <div className="grid grid-cols-1 justify-center text-center">
                <div className="">
                    <h1 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-6xl text-white mb-5 font-platypi">Restaurante <br/> Santa María</h1>
                    <span className="text-white/70 text-lg max-w-xl mx-auto"><BlocksRenderer content={data['descripcion']} /></span>
                
                    <div className="mt-8 flex justify-center items-center">
                        <a href="reservation.html" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center text-amber-500 hover:text-white bg-transparent hover:bg-amber-500 border border-amber-500 rounded-md flex md:w-72 gap-2 w-full justify-center items-center"><MenuComidaIcon/>{data['boton'] || 'Consulta nuestra carta'}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  
}

export default Hero
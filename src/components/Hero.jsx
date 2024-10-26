import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import MenuComidaIcon from './icons/MenuComidaIcon'

function Hero({ data }) {


  const backgroundImageUrl = data?.['imagen_fondo'][0]?.url ? (import.meta.env.VITE_STRAPI_URL + data?.['imagen_fondo'][0]?.url) : './public/restaurante.webp'

  return (
    <div className="bg-slate-200 h-screen relative">
      <img src={backgroundImageUrl} className="w-full h-full object-cover brightness-[.30]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-4 w-full">
        <div className='max-w-[300px] md:max-w-[600px]'>
          <h1 className="mb-4 text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.013em] whitespace-nowrap">{data?.['titulo'] || 'Santa Maria'}</h1>
          <span className="text-white text-sm md:text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"><BlocksRenderer content={data['descripcion']} /></span>
        </div>
        <button className="flex text-sm w-[80%] md:w-auto uppercase cursor-pointer items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white md:px-8 md:py-4 px-4 py-3 font-bold leading-normal transition-all duration-200 gap-2"><MenuComidaIcon />{data['boton'] || 'Consulta nuestra carta'}</button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-40"></div>
    </div>
  )
}

export default Hero
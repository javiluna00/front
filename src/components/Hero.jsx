import { BlocksRenderer } from '@strapi/blocks-react-renderer'

function Hero({ data }) {


  const backgroundImageUrl = data?.['imagen_fondo'][0]?.url ? (import.meta.env.VITE_STRAPI_URL + data?.['imagen_fondo'][0]?.url) : './public/restaurante.webp'

  return (
    <div className="bg-slate-200 h-screen relative">
      <img src={backgroundImageUrl} className="w-full h-full object-cover brightness-[.30]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-10">

        <h1 className="text-[12rem] text-white font-floodplain tracking-wider leading-tight">{data?.['titulo'] || 'Santa Maria'}</h1>
        <p className="text-white text-xl font-inter"><BlocksRenderer content={data['descripcion']} /></p>
        <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black py-4 px-8 mt-4 font-semibold w-96 uppercase tracking-wider transition-all duration-200 text-sm">{data['boton'] || 'Consulta nuestra carta'}</button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-40 bg-gradient-to-b from-transparent to-amber-950"></div>
    </div>
  )
}

export default Hero
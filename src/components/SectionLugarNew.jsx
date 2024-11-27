import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import MapPinIcon from './icons/MapPinIcon'

function SectionLugarNew({ data }) {
  const { titulo, descripcion, imagen, boton } = data
  return (
    <section className="w-full flex justify-center items-center p-10 py-20 bg-gray-50" id="quienessomos">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-12 grid-cols-1 gap-8 items-center">
      
      {/* Imagen Izquierda */}
      <div className="lg:col-span-4 md:col-span-6 flex justify-center">
        <img
          src={import.meta.env.VITE_STRAPI_URL + imagen[0].url}
          className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          alt="Imagen plato 1"
        />
      </div>

      {/* Texto Central */}
      <div className="lg:col-span-4 md:col-span-12 text-center md:order-2">
        <h4 className="text-3xl font-bold font-platypi text-gray-800">{titulo}</h4>
        <p className="text-slate-600 mt-6 leading-relaxed font-sans">
          <BlocksRenderer content={descripcion} />
        </p>
        <div className="mt-6 flex justify-center items-center gap-2">
          <MapPinIcon className="text-amber-500" />
          <a
            href="aboutus.html"
            className="text-amber-600 hover:text-amber-800 text-lg font-platypi transition"
          >
            {boton}
          </a>
        </div>
      </div>

      {/* Imagen Derecha */}
      <div className="lg:col-span-4 md:col-span-6 flex justify-center">
        <img
          src={import.meta.env.VITE_STRAPI_URL + imagen[1].url}
          className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          alt="Imagen plato 2"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default SectionLugarNew
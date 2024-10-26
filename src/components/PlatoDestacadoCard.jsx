import { BlocksRenderer } from "@strapi/blocks-react-renderer"

function PlatoDestacadoCard({ plato }) {
  return (
    <div className="relative w-full max-w-xs min-h-[350px] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-200 cursor-pointer">
      {/* Imagen */}
      <div className="relative">
        <img src={import.meta.env.VITE_STRAPI_URL + plato.imagenes[0].url} alt={"Plato destacado " + plato.titulo} className="w-full h-72 object-cover" />

        {/* Badge "Nuevo" */}
        {plato.novedad && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Nuevo
          </span>
        )}
      </div>

      {/* Título */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 z-10">{plato.nombre}</h3>
        <hr className="my-2" />
        <span className="text-xs mt-4"><BlocksRenderer content={plato.descripcion} /></span>
      </div>
    </div>
  )
}

export default PlatoDestacadoCard
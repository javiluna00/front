import { useEffect, useRef, useState } from "react"
import PlusIcon from "../components/icons/PlusIcon"
import usePlatos from "../hooks/usePlatos"
import useUser from "../hooks/useUser"
import useCategorias from "../hooks/useCategorias"


function NuevoPlato() {

  const [hasMultiplePrices, setHasMultiplePrices] = useState(false)
  const [hasImageUploaded, setHasImageUploaded] = useState(false)
  const [activeCategories, setActiveCategories] = useState([])
  const [available, setAvailable] = useState(false)
  const imageInputRef = useRef()
  const imageViewerRef = useRef()
  const handleUploadImage = () => {
    imageInputRef.current.click()
  }

  const { uploadPlato } = usePlatos()
  const { categorias } = useCategorias({ token: user?.token })
  const { user } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    const plato = {
      name: e.target.nombre.value,
      description: e.target.descripcion.value,
      category: "Desayuno",
      available: e.target.available.checked,
      prices: [],
      image: imageInputRef.current.files[0] || null,
    }
    if (hasMultiplePrices) {
      plato.prices.push({
        name: "Racion",
        value: e.target.precioRacion.value,
      })

      plato.prices.push({
        name: "Media Ración",
        value: e.target.precioMediaRacion.value,
      })
    }
    else {
      plato.prices.push({
        name: "Racion",
        value: e.target.precioRacion.value,
      })
    }
    plato.prices = JSON.stringify(plato.prices)
    uploadPlato(plato, user?.token)
  }

  useEffect(() => {
    if (hasImageUploaded) {
      imageViewerRef.current.src = URL.createObjectURL(imageInputRef.current.files[0])
    }
  }, [hasImageUploaded])

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex-col flex justify-start items-start p-4 bg-amber-500 rounded-lg gap-3 mt-10" onSubmit={handleSubmit}>
        <h3 className="text-3xl font-bold text-amber-100 text-center font-bold w-full my-2">Nuevo plato</h3>
        <div className="w-full flex justify-start items-start gap-3">
          <div className="w-full flex flex-col justify-start items-start gap-3 px-2">
            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-semibold">Nombre</label>
              <input className="px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-amber-700" type="text" name="nombre" id="nombre" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-semibold">Descripción</label>
              <textarea className="px-4 py-2 rounded-lg w-72 h-24 focus:outline-none focus:ring-2 focus:ring-amber-700" name="descripcion" id="descripcion" />
            </div>
            <div className="flex gap-3">
              <input type="checkbox" name="hasMultiplePrices" id="hasMultiplePrices" checked={hasMultiplePrices} onChange={(e) => setHasMultiplePrices(e.target.checked)} />
              <label htmlFor="hasMultiplePrices" className="text-white text-sm font-semibold">¿Tiene múltiples precios? (media ración y ración)</label>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-semibold">Precio por ración (€) </label>
              <input className="px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-amber-700" type="text" name="precioRacion" id="precioRacion" />
            </div>

            {hasMultiplePrices && (
              <div className="flex flex-col gap-3">
                <label className="text-white text-sm font-semibold">Precio por media ración (€) </label>
                <input className="px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-amber-700" type="text" name="precioMediaRacion" id="precioMediaRacion" />
              </div>
            )}

            {categorias && categorias.map((category) => (
              <div className="flex gap-3" key={category.name}>
                <input type="checkbox" name="category" id="category" checked={activeCategories.find(c => c === category)} onChange={() => setActiveCategories(!category)} />
                <label htmlFor="category" className="text-white text-sm font-semibold">{category}</label>
              </div>
            ))}

            <div className="flex gap-3">
              <input type="checkbox" name="available" id="available" checked={available} onChange={() => setAvailable(!available)} />
              <label htmlFor="available" className="text-white text-sm font-semibold">Disponible</label>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-semibold">Imagen</label>
              <input type="file" name="image" className="hidden" onChange={(e) => setHasImageUploaded(e.target.files[0])} ref={imageInputRef} />
              <div className="w-72 h-72 bg-amber-50 rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md hover:border-2 hover:border-amber-800 transition-all duration-100" onClick={(e) => handleUploadImage(e)}>
                {!hasImageUploaded && (
                  <PlusIcon size={20} />
                )}
                {hasImageUploaded && (
                  <img src="https://via.placeholder.com/300x300" ref={imageViewerRef} alt="Imagen" className="w-full h-full object-cover rounded-lg" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <button type="submit" className="mt-2 text-sm px-4 py-2 rounded-md hover:shadow-md transition-all duration-200 hover:scale-105 bg-white text-amber-500 uppercase font-semibold">Guardar</button>
        </div>

      </form>
    </div>
  )
}

export default NuevoPlato
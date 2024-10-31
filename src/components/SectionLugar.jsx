import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import MapPinIcon from "./icons/MapPinIcon"
import { Carousel } from 'flowbite-react'

function SectionLugar({ data }) {

  const { titulo, descripcion, imagen, boton } = data
  return (
    <div className="md:h-screen bg-gradient-to-br from-amber-100 via-amber-100 to-amber-950 w-full flex justify-center py-10">

      <div className="container">
        <div className="flex md:flex-row flex-col items-center justify-center md:h-full gap-10">
          <div className="w-full flex flex-col justify-start items-start gap-10 px-10">
            <h2 className="text-3xl md:text-5xl text-amber-500 font-black font-platypi">{titulo || '¿Quiénes somos?'}</h2>
            <span className="text-amber-900 text-md font-inter tracking-wide">{descripcion ? <BlocksRenderer content={descripcion} /> : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</span>
            <button className="flex text-sm cursor-pointer items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white md:px-8 md:py-4 px-4 py-3 font-bold leading-normal transition-all duration-200 flex gap-2"><MapPinIcon size={24} />{boton || '¡Ven a visitarnos!'}</button>
          </div>
          <div className="w-full flex justify-center items-start px-10">
            <div className="h-[300px] md:h-[450px] w-full">
              <Carousel className="w-full h-full" slideInterval={5000}>
                {imagen?.map((image, index) => (
                  <img
                    key={index}
                    src={import.meta.env.VITE_STRAPI_URL + image.url}
                    className="h-full object-cover"
                  />
                ))}
              </Carousel>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SectionLugar
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import MapPinIcon from "./icons/MapPinIcon"
import { Carousel } from 'flowbite-react'

function SectionLugar({ data }) {

  const { titulo, descripcion, imagen, boton } = data
  return (
    <div className="h-screen bg-gradient-to-br from-amber-100 via-amber-100 to-amber-950 w-full flex justify-center">

      <div className="container">
        <div className="flex items-center justify-center h-full gap-10">
          <div className="w-full flex flex-col justify-start items-start gap-10 px-10">
            <h2 className="text-6xl text-amber-500 font-semibold">{titulo || '¿Quiénes somos?'}</h2>
            <p className="text-amber-900 text-md font-inter tracking-wide">{descripcion ? <BlocksRenderer content={descripcion} /> : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
            <button className="border-2 border-amber-500 text-amber-500 bg-white hover:bg-amber-500 hover:text-black py-4 px-8 font-semibold w-72 uppercase tracking-wider transition-all duration-200 text-sm flex items-center justify-center gap-2"><MapPinIcon size={24} />{boton || '¡Ven a visitarnos!'}</button>
          </div>
          <div className="w-full flex justify-center items-start">
            <div className="h-[500px] w-[500px]">
              <Carousel className="w-[500px] h-full" slideInterval={5000}>
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
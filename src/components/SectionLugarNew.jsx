import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import MapPinIcon from './icons/MapPinIcon'

function SectionLugarNew({ data }) {
  const { titulo, descripcion, imagen, boton } = data
  return (
    <section className=' w-full flex justify-center items-start p-10'>
        <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
                <div className="lg:col-span-4 md:col-span-12 lg:order-2">
                    <div className="text-center">
                        

                        <h4 className="text-3xl font-semibold font-platypi">{titulo}</h4>
                        <div className='mt-6'>
                        <span className='text-slate-400 mt-6 font-sans'><BlocksRenderer content={descripcion} /></span>
                        <div className="mt-4 flex justify-center items-center hover:text-amber-500 gap-2 cursor-pointer font-platypi">
                          <MapPinIcon />
                            <a href="aboutus.html" className="hover:text-amber-500 h6">{boton}</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 md:col-span-6 lg:order-1">
                    <img src={import.meta.env.VITE_STRAPI_URL + imagen[0].url} className="rounded shadow dark:shadow-gray-800" alt=""/>
                </div>
                
                <div className="lg:col-span-4 md:col-span-6 lg:order-3">
                    <img src={import.meta.env.VITE_STRAPI_URL + imagen[1].url} className="rounded shadow dark:shadow-gray-800" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionLugarNew
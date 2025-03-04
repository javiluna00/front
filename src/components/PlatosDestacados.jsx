
import { Link } from "react-router-dom"
import MenuComidaIcon from "./icons/MenuComidaIcon"
import PlatoDestacadoCard from "./PlatoDestacadoCard"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
function PlatosDestacados({ data = [] }) {
  const { titulo, platos, descripcion } = data
  return (
    <section className=' w-full flex justify-center items-start p-10 py-20' id="platos-destacados">
      <div className="container flex flex-col gap-10 justify-start items-center">
        <h2 className="text-3xl font-platypi font-bold leading-tight tracking-[-0.033em]">{titulo || 'Platos destacados'}</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-10">
          {platos.map((plato, index) => (
            <PlatoDestacadoCard key={index} plato={plato} />
          ))}
        </div>
        <Link to="/carta" className="md:w-72 w-full"><button className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center text-amber-500 hover:text-white bg-transparent hover:bg-amber-500 border border-amber-500 rounded-md flex md:w-72 gap-2 w-full justify-center items-center"><MenuComidaIcon />Consulta nuestra carta</button></Link>
        {/*<button className="flex text-sm w-full md:w-auto uppercase cursor-pointer items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white md:px-8 md:py-4 px-4 py-3 font-bold leading-normal transition-all duration-200 gap-2"><MenuComidaIcon />Consulta nuestra carta</button>*/}
      </div>
    </section>
  )
}

export default PlatosDestacados
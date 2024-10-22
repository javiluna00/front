import { Link } from "react-router-dom"
import PlusIcon from "../components/icons/PlusIcon"

function EditarCarta() {
  return (
    <div>
      <h3 className="text-3xl font-bold text-amber-500 text-center font-bold my-10">Editar carta</h3>
      <div className="w-full h-96 flex justify-end gap-4">
        <Link to={"/admin/carta/nuevaCategoria"}>
          <div className="w-72 h-16 bg-amber-500 rounded-md flex justify-center items-center gap-3 cursor-pointer hover:shadow-md hover:scale-105 hover:text-amber-200 transition-all duration-100 text-white">
            <PlusIcon size={20} />
            <h3 className="text-md font-bold">Nueva categoría</h3>
          </div>
        </Link>
        <Link to={"/admin/carta/nuevo"}>
          <div className="w-72 h-16 bg-amber-500 rounded-md flex justify-center items-center gap-3 cursor-pointer hover:shadow-md hover:scale-105 hover:text-amber-200 transition-all duration-100 text-white">
            <PlusIcon size={20} />
            <h3 className="text-md font-bold">Nuevo plato</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default EditarCarta
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import paths from '../constants/paths'

function Breadcrumbs() {

  const location = useLocation()

  const [breadcrumbs, setBreadcrumbs] = useState([])

  const generarRutas = (ruta) => {
    // Dividimos la ruta en partes, filtrando los elementos vacíos
    const partes = ruta.split("/").filter(Boolean);

    // Generamos un array de rutas desde la más completa hasta la más superficial
    const rutas = partes.map((_, index) => `/${partes.slice(0, index + 1).join("/")}`);

    return rutas;
  };

  useEffect(() => {
    setBreadcrumbs(generarRutas(location.pathname).map((ruta) => {
      return {
        path: ruta,
        name: paths.find((path) => path.path === ruta)?.name || 'Error 404'
      }
    }))
  }, [location.pathname])

  useEffect(() => {
    console.log(breadcrumbs)
  }, [breadcrumbs])

  return (
    <div className='w-full h-8 my-1 flex gap-1 justify-start items-center'>
      {breadcrumbs.map((breadcrumb, index) => (
        <Link to={breadcrumb.path} key={index}>
          <div key={index} className="flex gap-3">
            <span className="text-sm text-amber-500 font-semibold hover:underline cursor-pointer">{breadcrumb.name}</span>
            {index < breadcrumbs.length - 1 && <span className="text-sm text-amber-500 mr-2">/</span>}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Breadcrumbs
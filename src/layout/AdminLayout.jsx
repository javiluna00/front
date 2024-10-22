import { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import NavBar from '../components/NavBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

function AdminLayout() {

  const location = useLocation()
  const navigate = useNavigate()
  const { isLogged } = useUser()
  useEffect(() => {
    if (location.pathname !== '/admin') {
      if (!isLogged()) {
        navigate('/')
      }
    }
  }, [location, isLogged, navigate])

  return (
    <div className="min-h-screen absolute w-full font-inter bg-amber-100">
      <NavBar />
      <div className='container mx-auto mt-4'>
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
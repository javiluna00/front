import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Carta from './pages/Carta'
import AdminLogin from './pages/AdminLogin'
import { Toaster } from 'sonner'
import AdminLayout from './layout/AdminLayout'
import EditarCarta from './pages/EditarCarta'
import NuevoPlato from './pages/NuevoPlato'


function App() {

  return (
    <>
      <Toaster position='top-right' toastOptions={{
        classNames: {
          'success': 'bg-green-500 text-white',
          'error': 'bg-red-500 text-white',
        }
      }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='carta' element={<Carta />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={<AdminLogin />} />
            <Route path='carta' element={<EditarCarta />} />
            <Route path='carta/nuevo' element={<NuevoPlato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

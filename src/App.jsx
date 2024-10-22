import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Carta from './pages/Carta'
import { Toaster } from 'sonner'



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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

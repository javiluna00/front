import { Link, useLocation } from "react-router-dom"
import useUser from "../hooks/useUser"
import { useEffect, useState } from "react"

function NavBar() {
  const location = useLocation()
  const { pathname } = location

  const { isLogged, logOut } = useUser()

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define el punto de scroll (en píxeles) a partir del cual cambiarán los estilos
      const scrollYTrigger = window.innerHeight * 0.8; // Ejemplo: 100px

      if (window.scrollY > scrollYTrigger) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    };
    // Añade el evento de scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`top-0 py-4 px-16 w-full flex justify-start items-start gap-8 ${isScrolled ? 'text-amber-500' : 'text-white'} z-10 ${pathname !== '/' ? 'bg-amber-500 border-b border-amber-600' : 'bg-transparent fixed'}`}>
      <Link to='/'><button className='flex-none text-sm uppercase tracking-wider font-semibold'>Santa María</button></Link>
      <Link to='/carta'><button className='flex-none text-sm uppercase tracking-wider font-semibold'>Carta</button></Link>
      {isLogged() && <Link to='/admin'><button className='flex-none text-sm uppercase tracking-wider font-semibold'>Admin</button></Link>}
      {isLogged() && <button className='text-sm uppercase tracking-wider font-semibold grow flex justify-end items-center' onClick={() => logOut()}>Logout</button>}
    </div>
  )
}

export default NavBar
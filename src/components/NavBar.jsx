import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import MenuComidaIcon from "./icons/MenuComidaIcon";

function NavBar() {
  const location = useLocation()
  const { pathname } = location

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
    <div className={`top-0 py-4 px-8 md:px-16 w-full flex justify-start items-start gap-16 ${isScrolled ? 'bg-amber-700/90 backdrop-blur-sm text-white font-semibold border-b border-amber-900' : 'bg-transparent text-white'} transition-colors z-10 ${pathname !== '/' ? 'bg-amber-700 border-b border-amber-600' : 'fixed'}`}>
      <Link to='/'><button className='flex-none text-sm uppercase tracking-wider font-semibold'>Santa María</button></Link>
      <Link to='/carta'><button className='flex justify-center items-center gap-2 text-sm uppercase tracking-wider font-semibold'><MenuComidaIcon />Carta</button></Link>
    </div>
  )
}

export default NavBar
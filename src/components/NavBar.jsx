import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MenuComidaIcon from "./icons/MenuComidaIcon";
import { useWindowScroll } from "react-use";
import gsap from 'gsap';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      // Define el punto de scroll a partir del cual cambiarán los estilos
      const scrollYTrigger = window.innerHeight * 0.8; // Ejemplo: 80% del alto de la ventana
      if (pathname === '/') {
        if (window.scrollY > scrollYTrigger) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(true);
      }
    };
    // Añade el evento de scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const containerRef = useRef(null);
  const { y: windowScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const timeoutRef = useRef(null); // Para manejar el temporizador

  useEffect(() => {
    if (windowScrollY === 0) {
      setIsNavVisible(true);
      containerRef.current.classList.remove('floating-nav');
    } else if (windowScrollY > lastScrollY) {
      setIsNavVisible(false);
      containerRef.current.classList.add('floating-nav');
    } else if (windowScrollY < lastScrollY) {
      setIsNavVisible(true);
      containerRef.current.classList.add('floating-nav');
    }
    setLastScrollY(windowScrollY);
  }, [windowScrollY]);

  useEffect(() => {
    gsap.to(containerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  useEffect(() => {
    // Configura un temporizador para ocultar la navbar después de 3 segundos sin scroll
    if (isNavVisible) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Limpia temporizador anterior
      timeoutRef.current = setTimeout(() => {
        setIsNavVisible(false);
      }, 3000); // 3 segundos
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Limpia temporizador al desmontar
    };
  }, [isNavVisible, windowScrollY]);

  return (
    <div
      className="fixed inset-x-[1/2] top-4 z-50 h-16 w-96 border-none transition-all duration-700 sm:inset-x-6"
      ref={containerRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-center p-4">
          <div className="flex items-center justify-center h-full w-full">
            <div className="hidden md:flex justify-center items-center w-full gap-7">
              <Link to={'/'} className="font-platypi nav-hover-btn">Santa María</Link>
              <Link
                to={'/carta'}
                className="font-platypi nav-hover-btn flex gap-2 justify-center items-center"
              >
                <MenuComidaIcon />Carta
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;

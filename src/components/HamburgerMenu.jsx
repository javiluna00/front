import { useState, useEffect, useRef } from "react";
import MenuIcon from "./icons/MenuIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MailIcon from "./icons/MailIcon";
import { Link } from "react-router-dom";


function HamburgerMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const [menuOffsetX, setMenuOffsetX] = useState(0); // Desplazamiento del menú en tiempo real
  const [touchStartX, setTouchStartX] = useState(0);
  const menuRef = useRef(null);

  const openMenu = () => {
    setIsOpen(true);
    setMenuOffsetX(0); // Reinicia la posición cuando se abre
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMenuOffsetX(0); // Resetea el offset cuando se cierra
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - touchStartX;
    if (deltaX < 0) {
      // Solo permitimos el arrastre hacia la izquierda
      setMenuOffsetX(deltaX);
    }
  };

  const handleTouchEnd = () => {
    // Cierra el menú si el desplazamiento fue suficiente hacia la izquierda
    if (menuOffsetX < -100) { // Ajusta el umbral según tu preferencia
      closeMenu();
    } else {
      // Restaura el menú si el arrastre fue menor al umbral
      setMenuOffsetX(0);
    }
  };

  // Maneja clics fuera del menú para cerrarlo
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 h-16 w-full bg-amber-800 text-white z-50 flex items-center ">
      {/* Botón para abrir/cerrar el menú */}
      <button
        className="p-4 focus:outline-none"
        onClick={openMenu}
      >
        {/* Icono de hamburguesa */}
        <MenuIcon size={24} />
      </button>

      <span className="text-white text-2xl md:text-6xl font-semibold leading-tight tracking-[-0.033em] whitespace-nowrap font-platypi">Santa María</span>

      {/* Menú lateral */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full bg-zinc-900 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{ width: '80%' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={closeMenu}
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center p-6 space-y-4 mt-10 border-b border-gray-700 h-20">
          <h3 className="text-lg">Santa María</h3>
        </div>
        <nav className="flex flex-col grow items-start p-6 space-y-8 mt-10 h-4/6">
          <Link to="/" onClick={closeMenu} className="text-lg">Inicio</Link>
          <Link to="/carta" onClick={closeMenu} className="text-lg">Carta</Link>
        </nav>
        <div className="flex justify-center p-6 h-20">
          <a href="https://www.instagram.com/santasmiafamilia/" className="text-lg text-white"><InstagramIcon size={25} /></a>
          <a href="mailto:Uqfjv@example.com" className="text-lg"><MailIcon size={25} /></a>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
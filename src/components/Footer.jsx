import { Link } from "react-router-dom"

function Footer() {
  return (
<footer className="bg-neutral-800 text-gray-200 py-8 flex justify-center items-center">
  <div className="container mx-auto w-full flex flex-col md:flex-row justify-center">
    <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center text-center md:text-left">
      
      {/* Menú de Navegación */}
      <div className="flex flex-col items-center md:items-center">
        <h4 className="text-lg font-semibold mb-4">Menú</h4>
        <ul className="space-y-2">
          <li>
            <Link 
              to="/"
              className="hover:text-amber-500 transition"
            >
              Bar Santa María
            </Link>
          </li>
        </ul>
      </div>

      {/* Derechos de Autor */}
      <div className="flex flex-col items-center md:items-center">
        <h4 className="text-lg font-semibold mb-4">© Derechos de Autor</h4>
        <p className="text-sm text-gray-400">
          &copy; 2024 Bar Santa María. Todos los derechos reservados.
        </p>
      </div>

      {/* Redes Sociales */}
      <div className="flex flex-col items-center md:items-center">
        <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://www.facebook.com/people/BAR-SANTA-MAR%C3%8DA/100063506442359/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.077V12h2.361v-1.5c0-2.337 1.352-3.623 3.447-3.623.996 0 2.039.176 2.039.176v2.243h-1.148c-1.133 0-1.487.706-1.487 1.43V12h2.527l-.404 2.89h-2.123v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM0 7.75A7.75 7.75 0 017.75 0h8.5A7.75 7.75 0 0124 7.75v8.5A7.75 7.75 0 0116.25 24h-8.5A7.75 7.75 0 010 16.25v-8.5zm7.75 3.5a3.75 3.75 0 107.5 0 3.75 3.75 0 00-7.5 0zm3.75 5.75a5.75 5.75 0 110-11.5 5.75 5.75 0 010 11.5zm6.498-9.623a.998.998 0 100-1.996.998.998 0 000 1.996z" />
            </svg>
          </a>
        </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer
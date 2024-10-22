import { useState } from "react";

function Carta() {

  const [selectedSubMenu, setSelectedSubMenu] = useState("Desayunos");

  return (
    <div className="container mx-auto">

      <h1 className="text-4xl text-amber-500 font-semibold my-10 w-full text-center ">Consulta nuestra <span className="text-amber-600">carta</span></h1>

      <div className="carta-container w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="tipologia w-full h-full flex justify-center items-center gap-4">
          <button className={`text-sm px-4 py-2 rounded-full hover:shadow-md transition-all duration-200 hover:scale-105 ${selectedSubMenu == 'Desayunos' ? ' scale-105 bg-amber-500 text-white' : 'text-amber-500'} uppercase font-semibold`} onClick={() => setSelectedSubMenu("Desayunos")}>Desayunos</button>
          <button className={`text-sm px-4 py-2 rounded-full hover:shadow-md transition-all duration-200 hover:scale-105 ${selectedSubMenu == 'Entrantes' ? ' scale-105 bg-amber-500 text-white' : 'text-amber-500'} uppercase font-semibold`} onClick={() => setSelectedSubMenu('Entrantes')}>Entrantes</button>
          <button className={`text-sm px-4 py-2 rounded-full hover:shadow-md transition-all duration-200 hover:scale-105 ${selectedSubMenu == 'Carne' ? 'scale-105 bg-amber-500 text-white' : 'text-amber-500'} uppercase font-semibold`} onClick={() => setSelectedSubMenu('Carne')}>Carne</button>
          <button className={`text-sm px-4 py-2 rounded-full hover:shadow-md transition-all duration-200 ${selectedSubMenu == 'Pescado' ? 'scale-105 bg-amber-500 text-white' : 'text-amber-500'} uppercase font-semibold`} onClick={() => setSelectedSubMenu('Pescado')}>Pescado</button>
          <button className={`text-sm px-4 py-2 rounded-full hover:shadow-md transition-all duration-200 ${selectedSubMenu == 'Platos combinados' ? 'scale-105 bg-amber-500 text-white' : 'text-amber-500'} uppercase font-semibold`} onClick={() => setSelectedSubMenu('Platos combinados')}>Platos combinados</button>
          <button className={`text-sm px-4 py-2 rounded-full hover:shadow-md transition-all duration-200 ${selectedSubMenu == 'Postres' ? 'scale-105 bg-amber-500 text-white' : 'text-amber-500'} uppercase font-semibold`} onClick={() => setSelectedSubMenu('Postres')}>Postres</button>
        </div>
        <div className="bg-amber-500 h-px w-96"></div>

        <div className="w-full h-[70vh] flex justify-center items-center border border-amber-500 bg-amber-50 rounded-xl">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10 p-10">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Carta
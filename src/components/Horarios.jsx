import TitleReveal from "./TitleReveal";

function Horarios({data = []}) {

  const schedule = [
    { day: 'Lunes', hours: '6:30 AM - 00:00 AM' },
    { day: 'Martes', hours: '6:30 AM - 00:00 AM' },
    { day: 'Miércoles', hours: '6:30 AM - 00:00 AM' },
    { day: 'Jueves', hours: '6:30 AM - 00:00 AM' },
    { day: 'Viernes', hours: '6:30 AM - 00:00 AM' },
    { day: 'Sábado', hours: '6:30 AM - 00:00 AM' },
    { day: 'Domingo', hours: '6:30 AM - 0:00 AM' },
  ];

  return (
    <section 
      className="w-full py-20 min-h-screen px-4" 
      id="horarios"
    >
      <div className="container mx-auto">
        {/* Título principal */}
        <TitleReveal text={data.titulo || "Horarios"}/>

        <div className="p-4 bg-amber-200 rounded-lg shadow-xl">
          <p className="text-md">Todos los domingos <span className="font-semibold">churros con chocolate</span> desde las <span className="font-semibold">8:00</span> hasta las <span className="font-semibold">12:00</span></p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-10">
          {/* Columna izquierda: Ilustración */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <img 
              src={'/reloj.png'} 
              alt="horario" 
              className="max-w-[400px] w-full md:max-w-[500px]" 
            />
          </div>

          {/* Columna derecha: Horarios */}
          <div className="flex flex-col justify-start items-center w-full md:w-1/2 text-center md:text-left">
          
            {/* Lista de horarios */}
            <ul className="divide-y divide-neutral-300 w-full">
              {schedule.map((entry, index) => (
                <li 
                  key={index} 
                  className="flex justify-between items-center py-3 text-neutral-800 text-lg"
                >
                  <span className="font-semibold">{entry.day}</span>
                  <span className="text-base">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Horarios